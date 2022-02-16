const moment = require('moment')
const dateformat = require('dateformat')
const {sendAnswer} = require('../utils')
const {search} = require('../searcher')

const aggregateBy = ['subject', 'source', 'geo', 'person', 'event', 'org', 'firm', 'em', 'url']
module.exports = async (req, res, next) =>{
    try{
        const {...content} = req.body
            if(!content.queries){
                sendAnswer(req, res, "error", [{message: '"queries" incorrect'}])
                return;
            }
            if(!content.aggregateBy){
                sendAnswer(req, res, "error", [{message: '"aggregateBy" incorrect'}])
                return;
            }else{
                if(aggregateBy.indexOf(content.aggregateBy) == -1){
                    sendAnswer(req, res, "error", [{message: `"${content.aggregateBy}" incorrect, use [${aggregateBy.join()}]`}])
                    return; 
                }
            }
            var order = "asc"
            if(content.order){
                if(content.order === "desc"){
                    order = "desc";
                }else if(content.order != "asc"){
                    sendAnswer(req, res, "error", [{message: '"order" incorrect'}])
                    return;
                }
            }
            let limit = 0
            if(!content.limit){
                limit = 1000
            }else if(content.limit >= 0){
                limit = content.limit
            }else if(content.limit < 0){
                sendAnswer(req, res, "error", [{message: '"limit" incorrect'}])
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
                var item = []
                var diffDateTime = Math.floor((content.stopAt - content.startAt) / 86400000); 
                var step = Math.floor(diffDateTime / content.points)
                if(diffDateTime < 0){
                    sendAnswer(req, res, "error", [{message: `incorrect "stopAt - startAt" <  ${diffDateTime}`}])
                    return
                }
                if(!step || step <= 0){
                    step = 1
                }
                if(content.queries.length == 0){
                        const startAt = moment(content.startAt).unix()
                        const stopAt  = moment(content.stopAt).unix()
                        const finalQueryString = ``
                        let dopInfo = ` utime > ${startAt} and utime < ${stopAt} group by ${content.aggregateBy}`
                        if(order == "desc"){
                            dopInfo += " order by count desc"
                        }else{
                            dopInfo += " order by count asc"
                        }
                        try{
                            let offset = 0
                            const task = search({offset, limit, query: finalQueryString, dop_info: dopInfo}, 'all', finalQueryString, dopInfo, `count(*) as count, ${content.aggregateBy}`, true, offset, limit)
                            queryOfTask.push(task)
                        }catch(error){
                            console.log(error.message)
                        }
                        Promise.all([queryOfTask]).then(value => {
                            Promise.all(value[0]).then((task) =>{
                                let values = []
                                for(let i = 0; i < task.length; i++){
                                    function analise(element){
                                        for(let i = 0; i < element.content.hits.hits.length; i++){
                                            const item = element.content.hits.hits[i]._source
                                            if(item){
                                                if(item[content.aggregateBy].length > 0)
                                                    values.push({name: item[content.aggregateBy], value:item.count})
                                            }
                                        }
                                    }
                                    if(task[i]){
                                        analise(task[i])
                                    }
                                }
                                answerData.push({values})
                                sendAnswer(req, res, "ok", answerData)
                                return;
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
                            let dopInfo = ` utime > ${startAt} and utime < ${stopAt} group by ${content.aggregateBy}`
                            if(order == "desc"){
                                dopInfo += " order by count desc"
                            }else{
                                dopInfo += " order by count asc"
                            }
                            try{
                                let offset = 0
                                const task = search({name: name, offset, limit, query: finalQueryString, dop_info: dopInfo}, 'all', finalQueryString, dopInfo, `count(*) as count, ${content.aggregateBy}`, true, offset, limit)
                                queryOfTask.push(task)
                            }catch(error){
                                console.log(error.message)
                            }
                        }
                        Promise.all([queryOfTask]).then(value => {
                            let items = []
                            Promise.all(value[0]).then((task) =>{
                                for(let i = 0; i < task.length; i++){
                                    let values = []
                                    function analise(element){
                                        for(let i = 0; i < element.content.hits.hits.length; i++){
                                            const item = element.content.hits.hits[i]._source
                                            if(item){
                                                if(item[content.aggregateBy].length > 0)
                                                    values.push({name: item[content.aggregateBy], value:item.count})
                                            }
                                        }
                                        items.push({name: element.field.name, values})
                                    }
                                    if(task[i]){
                                        analise(task[i])
                                    }
                                }
                                
                            }).then(()=>{
                                answerData.push(items)
                                sendAnswer(req, res, "ok", answerData)
                                return;    
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