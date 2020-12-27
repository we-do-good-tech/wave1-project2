const rateLimiter = require('express-rate-limit')

/**
 * 
 * @param {*} options 
 * limiter - limit requests
 */
function limitter(options) {
    return rateLimiter({
        windowMs: options.windowMs,
        max: options.max,
        message: 'יותר מידי נסיונות  נסה מאוחר יותר',
        handler: function (request, response) {
            console.log('LOG EMAIL LIMITTER')
            response.status(429).send({
                message: 'יותר מידי נסיונות  נסה מאוחר יותר'
            })
        }
    })
}


module.exports = {
    limitter,
}

