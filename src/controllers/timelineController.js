const moment = require('moment')
const dateformat = require('dateformat')
const {sendAnswer} = require('../utils')
const {search} = require('../searcher')

/**
 * @param {Object} req Запит до серверу
 * @param {String} req.content.queries Запит до БД
 * @param {String} content.points Кількість точок для графіка, що потрібно вивести
 * @param {String} req.content.startAt Дата з якої починати пошук
 * @param {String} req.content.stopAt Дата до якої шукати результати
 * @param {Object} res Відповідь від серверу
 * @return {Promise}
 */

const timeline = async (req, res) =>{
    try{
        const {...content} = req.body
            if(!content.queries){
                sendAnswer(req, res, "error", [{message: '"queries" incorrect'}])
                return;
            }
            if(!content.points){
                // for default
                content.points = 50
            }else if(content.points < 0){
                sendAnswer(req, res, "error", [{message: '"points" incorrect < 0'}])
                return;
            }
            // startTimeAt
            if(!content.startAt){
                content.startAt = moment(process.env.MIN_DATETIME, "YYYYMMDD").toDate()
            }else{
                content.startAt = moment(content.startAt).toDate()
            }
            // stopTimeAt
            if(!content.stopAt){
                content.stopAt = moment(process.env.MAX_DATETIME, "YYYYMMDD").toDate()
            }else{
                content.stopAt = moment(content.stopAt).toDate()
            }
            try{
                var answerData  = []
                var queryOfTask = []
                const startAt = moment(content.startAt).unix()
                const stopAt  = moment(content.stopAt).unix()
                var diffDateTime =  Math.floor(stopAt - startAt); 
                var step = Math.floor(diffDateTime / content.points)
                if(step < 1){
                    sendAnswer(req, res, "error", [{message: `hot have enought "points" ${content.points}`}])
                    return
                }
                if(content.queries.length == 0){
                        
                        let count = 0
                        for(var i = 0; i <= content.points; i++){
                            if(count >= content.points){
                                break;
                            }
                            const timeStart = startAt + (i * step)
                            const timeStop  = startAt + ((i + 1) * step)
                            const finalQueryString = ``
                            const date = new Date(timeStart * 1000)
                            let dopInfo = ` utime > ${timeStart} and utime < ${timeStop}`
                            try{
                                const task = search({date:date, dop_info: dopInfo}, 'all', finalQueryString, dopInfo, 'count(*)')
                                queryOfTask.push(task)
                            }catch(error){
                                console.log(error.message)
                            }
                            count++  
                        }    
                        Promise.all([queryOfTask]).then((value) => {
                            Promise.all(value[0]).then((val) =>{
                                let item = {values: []}
                                val.forEach(element => {
                                    var c = 0
                                    try{
                                        const result = element.content
                                        if(result.hits.hits[0]){
                                            c = result.hits.hits[0]._source['count(*)']
                                        }
                                    }catch(error){
                                        console.log(error.message)
                                    }
                                    item.values.push({date: element.field.date, value: c})
                                    
                                });
                                answerData.push(item) 
                                sendAnswer(req, res, "ok", answerData)
                                return;
                            }).catch(err => {
                                sendAnswer(req, res, "error", [{message: err.message}])
                                return;
                            })
                        }, reason => {
                            console.log(reason)
                            sendAnswer(req, res, "error", [{message: reason}])
                        });
                    }else{
                        for(let i = 0; i < content.queries.length; i++){
                            const element = content.queries[i]
                            let name = element.name
                            let query = element.query
                            let queryString = ""
                            if(query){
                                queryString = "@content " + query
                            }
                            let count = 0
                            for(var j = 0; j <= content.points; j++){
                                if(count >= content.points){
                                    break;
                                }
                                const timeStart = startAt + (j * step)
                                const timeStop  = startAt + ((j + 1) * step)
                                const finalQueryString = queryString
                                const date = new Date(timeStart * 1000)
                                let dopInfo = ` utime > ${timeStart} and utime < ${timeStop}`
                                try{
                                    const task = search({date:date, name: name, dop_info: dopInfo}, 'all', finalQueryString, dopInfo, 'count(*)')
                                    queryOfTask.push(task)
                                }catch(error){
                                    console.log(error.message)
                                }
                                count++  
                            }    
                        }
                        Promise.all([queryOfTask]).then(value => {
                            Promise.all(value[0]).then((val) =>{
                                const data = []
                                val.forEach(element => {
                                    var c = 0
                                    try{
                                        const result = element.content
                                        //console.log(result)
                                        if(result.hits.hits[0]){
                                            c = result.hits.hits[0]._source['count(*)']
                                        }
                                    }catch(error){
                                        console.log(error.message)
                                    }
                                    if(!data[element.field.name]){
                                        data[element.field.name] =  [{date: element.field.date, value: c}] 
                                    }else{
                                        data[element.field.name].push({date: element.field.date, value: c})
                                    }
                                });
                                for (var key in data) {
                                    var value = data[key];
                                    answerData.push({name: key, values: value}) 
                                }
                                sendAnswer(req, res, "ok", answerData)
                                return;
                            }).catch(err => {
                                sendAnswer(req, res, "error", [{message: err.message}])
                                return;
                            })
                        }, reason => {
                            console.log(reason)
                            sendAnswer(req, res, "error", [{message: reason}])
                        });
                    }
            }catch(ex){
                console.log(ex)
                sendAnswer(req, res, "error", [{message: ex.message}])
            }
    }catch(error){
        sendAnswer(req, res, "error", [{message: error.message}])
    }
}
module.exports = {
    timeline
}