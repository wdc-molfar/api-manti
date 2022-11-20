const moment = require('moment')
const dateformat = require('dateformat')
const {sendAnswer} = require('../utils')
const {search} = require('../searcher')
const e = require('express')

const aggregateBy = ['content', 'subject', 'source', 'geo', 'person', 'event', 'org', 'firm', 'em', 'url']

/**
 * @param {Object} req Запит до серверу
 * @param {String} req.content.queries Запит
 * @param {String} req.content.return Поля які необхідно видати
 * @param {String} req.content.limit Максимальна кількість результатів у відповіді
 * @param {String} req.content.startIndex Індекс з якого починати пошук
 * @param {String} req.content.startAt Дата з якої починати пошук
 * @param {String} req.content.stopAt Дата до якої шукати результати
 * @param {Object} res Відповідь від серверу
 * @return {Promise}
 */

module.exports = async (req, res) =>{
    try{
        const {...content} = req.body
            if(!content.queries){
                sendAnswer(req, res, "error", [{message: '"queries" incorrect'}])
                return;
            }
            if(!content['return']){
                sendAnswer(req, res, "error", [{message: '"return" incorrect'}])
                return;
            }else{
                const arr = content['return'];
                for(let i = 0; i < arr.length; i++){
                    var item = arr[i]
                    if(aggregateBy.indexOf(item) == -1){
                        sendAnswer(req, res, "error", [{message: `"${item}" incorrect, use [${aggregateBy.join()}]`}])
                        return; 
                    }
                }
            }
            let limit = 0
            if(!content.limit){
                limit = 200
            }else if(content.limit >= 0){
                limit = content.limit
            }else if(content.limit < 0){
                sendAnswer(req, res, "error", [{message: '"limit" incorrect'}])
                return;
            }
            //
            let startIndex = 0
            if(!content.startIndex){
                startIndex = 0
            }else if(content.startIndex >= 0){
                startIndex = content.startIndex
            }else if(content.startIndex < 0){
                sendAnswer(req, res, "error", [{message: '"startIndex" incorrect'}])
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
                var answerData = []
                var queryOfTask = []
                var diffDateTime = Math.floor((content.stopAt - content.startAt) / 86400000); 
                if(diffDateTime < 0){
                    sendAnswer(req, res, "error", [{message: `incorrect "stopAt - startAt" <  ${diffDateTime}`}])
                    return
                }
                if(content.queries.length == 0){
                        const startAt = moment(content.startAt).unix()
                        const stopAt  = moment(content.stopAt).unix()
                        const finalQueryString = ``
                        let dopInfo = ` utime > ${startAt} and utime < ${stopAt}`
                        try{
                            const task = search({offset:startIndex, limit, query: finalQueryString, dop_info: dopInfo}, 'all', finalQueryString, dopInfo, `count(*) as count`)
                            queryOfTask.push(task)
                        }catch(error){
                            console.log(error.message)
                        }
                        Promise.all([queryOfTask]).then(value => {
                            var tasks = []
                            Promise.all(value[0]).then((task) =>{
                                for(let i = 0; i < task.length; i++){
                                    function analise(element){
                                        for(let i = 0; i < element.content.hits.hits.length; i++){
                                            var c = 0
                                            try{
                                                const result = element.content
                                                if(result.hits.hits[0]){
                                                    c = result.hits.hits[0]._source['count']
                                                    let dopInfo = element.field.dop_info
                                                    const offset = element.field.offset
                                                    if(offset >= c){
                                                        sendAnswer(req, res, "error", [{message: `startIndex >= ${c}`}])
                                                        return;
                                                    }
                                                    const limit = offset + element.field.limit
                                                    const query = element.field.query
                                                    try{
                                                        const elem = search({query, dop_info: dopInfo, count: c, limit: element.field.limit, offset: element.field.offset}, 'all', query, dopInfo, `${content['return'].join()}`, true, offset, limit, [`max_matches=${limit}`])
                                                        tasks.push(elem)
                                                    }catch(error){
                                                        console.log(error.message)
                                                    }
                                                }
                                            }catch(error){
                                                console.log(error.message)
                                            }
                                        }
                                    }
                                    if(task[i]){
                                        analise(task[i])
                                    }
                                }
                            }).then(()=>{
                                Promise.all(tasks).then((task) =>{
                                    let values = []
                                    for(let i = 0; i < task.length; i++){
                                        function analise(element){
                                            const item = element.content
                                            values.push({length: element.field.count, partition:[element.field.offset, element.field.limit], values: item.data})
                                        }
                                        if(task[i]){
                                            analise(task[i])
                                        }
                                    }
                                    answerData.push(values)
                                    sendAnswer(req, res, "ok", answerData)
                                    return;
                                }).catch(err => {
                                    sendAnswer(req, res, "error", [{message: err.message}])
                                    return;
                                })    
                            }).catch(err => {
                                sendAnswer(req, res, "error", [{message: err.message}])
                                return;
                            })
                           
                        }, reason => {
                            sendAnswer(req, res, "error", [{message: reason.message}])
                            return;
                        });
                    }else{
                        let queryOfTask = []
                        for(let i = 0; i < content.queries.length; i++){
                            const element = content.queries[i]
                            let name = element.name
                            let query = element.query
                            let queryString = ""
                            if(query){
                                queryString = "@content " + query
                            }
                            const startAt = moment(content.startAt).unix()
                            const stopAt  = moment(content.stopAt).unix()
                            const finalQueryString = queryString
                            let dopInfo = ` utime > ${startAt} and utime < ${stopAt}`
                            try{
                                const task = search({name, offset:startIndex, limit, query: finalQueryString, dop_info: dopInfo}, 'all', finalQueryString, dopInfo, `count(*) as count`)
                                queryOfTask.push(task)
                            }catch(error){
                                console.log(error.message)
                            }
                        }
                        Promise.all([queryOfTask]).then(value => {
                            var tasks = []
                            Promise.all(value[0]).then((task) =>{
                                for(let i = 0; i < task.length; i++){
                                    function analise(element){
                                        for(let i = 0; i < element.content.hits.hits.length; i++){
                                            var c = 0
                                            try{
                                                const result = element.content
                                                if(result.hits.hits[0]){
                                                    c = result.hits.hits[0]._source['count']
                                                    let dopInfo = element.field.dop_info
                                                    const offset = element.field.offset
                                                    if(offset >= c){
                                                        sendAnswer(req, res, "error", [{message: `startIndex >= ${c}`}])
                                                        return;
                                                    }
                                                    const limit = offset + element.field.limit
                                                    const query = element.field.query
                                                    try{
                                                        const elem = search({query, dop_info: dopInfo, count: c, limit: element.field.limit, offset: element.field.offset}, 'all', query, dopInfo, `${content['return'].join()}`, true, offset, limit, [`max_matches=${limit}`])
                                                        tasks.push(elem)
                                                    }catch(error){
                                                        console.log(error.message)
                                                    }
                                                }
                                            }catch(error){
                                                console.log(error.message)
                                            }
                                        }
                                    }
                                    if(task[i]){
                                        analise(task[i])
                                    }
                                }
                            }).then(()=>{
                                Promise.all(tasks).then((task) =>{
                                    let values = []
                                    for(let i = 0; i < task.length; i++){
                                        function analise(element){
                                            const item = element.content
                                            values.push({name: element.field.name, length: element.field.count, partition:[element.field.offset, element.field.limit], values: item.data})
                                        }
                                        if(task[i]){
                                            analise(task[i])
                                        }
                                    }
                                    answerData.push(values)
                                    sendAnswer(req, res, "ok", answerData)
                                    return;
                                }).catch(err => {
                                    sendAnswer(req, res, "error", [{message: err.message}])
                                    return;
                                })    
                            }).catch(err => {
                                sendAnswer(req, res, "error", [{message: err.message}])
                                return;
                            })
                           
                        }, reason => {
                            sendAnswer(req, res, "error", [{message: reason.message}])
                            return;
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