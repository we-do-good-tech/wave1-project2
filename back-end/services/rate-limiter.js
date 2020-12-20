const rateLimiter = require('express-rate-limit')




function limitter(options) {
    return rateLimiter({
        windowMs: options.windowMs,
        max: options.max,
        message: options.message,
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

