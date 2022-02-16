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

exports.stringToRegex = (s, m) => {
    return (m = s.match(/^([\/~@;%#'])(.*?)\1([gimsuy]*)$/)) ? new RegExp(m[2], m[3].split('').filter((i, p, s) => s.indexOf(i) === p).join('')) : new RegExp(s);
}
