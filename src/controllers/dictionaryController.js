const moment = require('moment')
const dateformat = require('dateformat')
const {sendAnswer} = require('../utils')
const Manticoresearch = require('manticoresearch')

const aggregateBy = ['em', 'person', 'datatime', 'source']

/**
 * @param {Object} req Запит до серверу
 * @param {String} req.query Запит до БД
 * @param {String} req.params ["type"] Поле по яку потрібно агрегувати інформацію
 * @param {String} req.params ["item"] Персона, по якій проводити пошук
 * @param {String} req.query.limit Максимальна кількість результатів у відповіді
 * @param {String} req.query.startAt Дата з якої починати пошук
 * @param {String} req.query.stopAt Дата до якої шукати результати
 * @param {Object} res Відповідь від серверу
 * @return {Promise}
 */

const dictionary = async (req, res) =>{
    try{
        let type = req.params["type"];
        let item = req.params["item"];
        if(aggregateBy.indexOf(type) == -1){
            sendAnswer(req, res, "error", [{message: `"${type}" incorrect, use [${aggregateBy.join()}]`}])
            return; 
        }
        let limit = process.env.DEFAULT_LIMIT
        if(req.query != undefined && req.query.limit != undefined){
            if(!isNaN(req.query.limit.trim())){
                let temp = parseInt(req.query.limit.trim(), 10)
                if(temp > 0){
                    limit = temp
                }
            }
        }
        let startAt = undefined
        let stopAt  = undefined
        if(req.query.startAt != undefined){
            startAt = moment(req.query.startAt).unix()
        }
        if(req.query.stopAt != undefined){
            stopAt = moment(req.query.stopAt).unix()
        }
        let starttime = moment(new Date()).subtract(process.env.DEFAULT_TIME_TO_SUBTRACT, 'days').unix();
        let stoptime = moment(new Date()).unix()
        if(startAt && stopAt){
            if(startAt >= stopAt){
                sendAnswer(req, res, "error", [{message: `"startAt" >= "stopAt"`}])
                return 
            }
            starttime = startAt
            stoptime  = stopAt
        }else{
            /* */
            if(startAt){
                if(startAt >= stoptime){
                    sendAnswer(req, res, "error", [{message: `"startAt" incorrect`}])
                    return 
                }
                starttime = stopAt
            }else{
                if(stopAt <= starttime){
                    sendAnswer(req, res, "error", [{message: `"stopAt" incorrect`}])
                    return 
                }
                stoptime = stopAt
            }
            /* */
        }
        const client = new Manticoresearch.ApiClient()
        client.basePath = process.env.MANTICORE_URL
        client.timeout  = process.env.TIMEOUT
        const searchApi = new Manticoresearch.UtilsApi(client)
        let queryString = ""
        if(type == 'datatime'){
            queryString = 'mode=raw&query=select min(utime) as mintime, max(utime) as maxtime from all'
            const task = searchApi.sql(queryString)
            task.then((val) =>{
                const mintime = new Date(val['data'][0]['mintime'] * 1000)
                const maxtime = new Date(val['data'][0]['maxtime'] * 1000)
                sendAnswer(req, res, "ok", {mintime, maxtime})
            }).catch(err => {
                sendAnswer(req, res, "error", [{message: err.message}])
                return;
            }) 
        }else if(type == 'person'){
            var has_value = item != undefined
            if(has_value){
                if (item.length == 1 && item.indexOf('*') == 0){
                    has_value = false
                }
            }
            if(has_value){
                let result = ''
                if (item.indexOf('*') > -1)
                {
                    var re = '*';
                    result = item.replace(re, '^g*')
                }else{
                    result = item
                }
                queryString = `mode=raw&query=select person from all WHERE match('@person ${result}') and person != '' and utime > ${starttime} and utime < ${stoptime} group by person LIMIT ${limit} OPTION max_matches = ${limit}`
                const task = searchApi.sql(queryString)
                task.then((val) =>{
                    var answerData = []
                    let data = val['data']
                    function filterItems(query) {
                        return data.filter(function(el) {
                            return el['person'].toLowerCase().indexOf(query.toLowerCase()) > -1
                        })
                    }
                    const element = item.split('*').join('');
                    data = filterItems(element);
                    data.forEach(element => {
                        answerData.push(element['person'])
                    })
                    sendAnswer(req, res, "ok", answerData)
                }).catch(err => {
                    sendAnswer(req, res, "error", [{message: err.message}])
                    return;
                })  
            }else{
                queryString = `mode=raw&query=select person from all WHERE person != '' and utime > ${starttime} and utime < ${stoptime} group by person LIMIT ${limit} OPTION max_matches = ${limit}`
                const task = searchApi.sql(queryString)
                task.then((val) =>{
                    var answerData = []
                    val['data'].forEach(element => {
                        answerData.push(element['person'])
                    })
                    sendAnswer(req, res, "ok", answerData)
                }).catch(err => {
                    sendAnswer(req, res, "error", [{message: err.message}])
                    return;
                })  
            }
        }else if(type == 'em'){
            var has_value = item != undefined
            if(has_value){
                if (item.length == 1 && item.indexOf('*') == 0){
                    has_value = false
                }
            }
            if(has_value){
                let result = ''
                if (item.indexOf('*') > -1)
                {
                    var re = '*';
                    result = item.replace(re, '^g*')
                }else{
                    result = item
                }
                queryString = `mode=raw&query=select em from all WHERE match('@em ${result}') and em != '' and utime > ${starttime} and utime < ${stoptime} group by em`
                const task = searchApi.sql(queryString)
                task.then((val) =>{
                    var answerData = []
                    let data = val['data']
                    function filterItems(query) {
                        return data.filter(function(el) {
                            return el['em'].toLowerCase().indexOf(query.toLowerCase()) > -1;
                        })
                    }
                    const element = item.split('*').join('');
                    data = filterItems(element);
                    data.forEach(element => {
                        answerData.push(element['em'])
                    })
                    sendAnswer(req, res, "ok", answerData)
                }).catch(err => {
                    sendAnswer(req, res, "error", [{message: err.message}])
                    return
                })  
            }else{
                queryString = `mode=raw&query=select em from all WHERE em != '' and utime > ${starttime} and utime < ${stoptime} group by em`
                const task = searchApi.sql(queryString)
                task.then((val) =>{
                    var answerData = []
                    val['data'].forEach(element => {
                        answerData.push(element['em'])
                    })
                    sendAnswer(req, res, "ok", answerData)
                }).catch(err => {
                    sendAnswer(req, res, "error", [{message: err.message}])
                    return;
                })  
            }
        }
    }catch(error){
        sendAnswer(req, res, "error", [{message: error.message}])
    }
}

module.exports = {
    dictionary
}