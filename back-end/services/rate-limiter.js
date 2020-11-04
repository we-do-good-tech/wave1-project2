const rateLimiter = require('express-rate-limit')


const limiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: 'אחי מספיק לשלוח בקשות ,תבוא מחר',
    handler: function (request, response) {
        response.status(429).send({
            message: 'אחי מספיק לשלוח בקשות ,תבוא מחר'
        })
    }
})

module.exports = {
    limiter
}

