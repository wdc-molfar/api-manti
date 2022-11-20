/**
 * @param {Object} req Запит до серверу
 * @param {String} status Статус
 * @param {String} data Дані
 * @param {Object} res Відповідь від серверу
 * @return {Promise}
 */
exports.sendAnswer = (req, res, status, data) => {
    return res.json({
        request:{
            url: req.protocol + '://' + req.hostname + ":"+ req.socket.localPort + req.originalUrl,
            method: req.method,
            params: req.body
        },
        response:{
            status,
            data
        }
    })
}
/**
 * @param {String} s Строка
 * @param {String} m 
 * @return {Object} Regex
 */
exports.stringToRegex = (s, m) => {
    return (m = s.match(/^([\/~@;%#'])(.*?)\1([gimsuy]*)$/)) ? new RegExp(m[2], m[3].split('').filter((i, p, s) => s.indexOf(i) === p).join('')) : new RegExp(s);
}
