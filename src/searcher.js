const ReadStream = require('fs-readstream-seek')
const Manticoresearch = require('manticoresearch')

// search in © Manticora
/**
 * @param {String} field Поле яке потрібно для виведення результатів
 * @param {String} index Індекс в якому проводити пошук
 * @param {String} query Текст для повнотекстового пошуку
 * @param {String} dop_info Додаткові дані для пошукової строки
 * @param {String} columns Поля в БД, які потрбні для видачі результатів (за замовченням всі *)
 * @param {String} isLimit Виставлений ліміт (за замовченням false)
 * @param {String} offset Зміщення від початкових даних видачі
 * @param {String} limit Кількість результатів для видачі
 * @param {Object} options Додаткові налаштування пошуку
 * @return {Promise}
 */
const search = async (field, index, query, dop_info, columns = '*',  isLimit = false, offset = 0, limit = 10, options = []) => {
    const client = new Manticoresearch.ApiClient()
    client.basePath = process.env.MANTICORE_URL
    client.timeout  = process.env.TIMEOUT
    const searchApi = new Manticoresearch.UtilsApi(client)
    let queryString = ""
    if(options.length > 0){
        queryString = "mode=raw&" 
    }
    queryString += `query=SELECT ${columns} FROM ${index} WHERE`
    if(query.length > 0){
        queryString += ` match('${query}')`
    }
    if(dop_info){
        queryString += ' and ' + dop_info
    }
    if(isLimit){
        queryString += ` LIMIT ${offset},${limit}`
    }
    if(options.length > 0){
        queryString += ` OPTION` 
        options.forEach((item)=>{ 
            queryString += ` ${item}`
        })
    }
    const res = await searchApi.sql(queryString)
  
    const { ...content } = res
    return {content, field}
}
// for find index to document from © Manticora
/**
 * @param {String} id  Ідентифікатор для пошуку індексу документа
 * @return {Promise}
 */
const findIndex = (id) => {
    if(!id || !Number.isInteger(id) || id < 0)
    {
        return new Promise((resolve, reject) => {resolve({start: -1, end: -1})})
    }
    const start = ( id - 1 ) * 13
    const end = start + 24
    const s = new ReadStream(process.env.INDEX_FILE, { encoding: 'utf8', start: start, end: end })
    return new Promise((resolve, reject) => {
        s.on('data', chunk => {
            const result = chunk.split("\n")
            if(result.length >= 2){
                resolve({start: parseInt(result[0]), end: parseInt(result[1])}) 
            }else{
                resolve({start: -1, end: -1})
            }
        })
    });
}
// for find data using document id 
/**
 * @param {String} start Ідентифікатор початку збереженого документу
 * @param {String} end  Ідентифікатор кінця збереженого документу
 * @return {Promise}
 */
const getData = (start, end) => {
    if(!start || !Number.isInteger(start) || start < 0)
    {
        return new Promise((resolve, reject) => {return resolve("")})
    }
    if(!end || !Number.isInteger(end) || end < 0)
    {
        return new Promise((resolve, reject) => {return resolve("")})
    }
    const s = new ReadStream(process.env.DB_FILE, { encoding: 'utf8', start: start, end: end - 1 })
    return new Promise((resolve, reject) => {
        let data = "";
        s.on('data', chunk => {
            data += chunk
        })
        s.on('end', () => {
            resolve(data)
        })
    });
}

module.exports = {
    search,
    findIndex,
    getData
}