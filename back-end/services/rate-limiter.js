const rateLimiter = require('express-rate-limit')




function limitter(windowMs, max, message) {
    return rateLimiter({
        windowMs: windowMs,
        max: max,
        message: message,
        handler: function (request, response) {
            console.log('LOG EMAIL LIMITTER')
            response.status(429).send({
                message: message
            })
        }
    })
}


module.exports = {
    limitter,
}

