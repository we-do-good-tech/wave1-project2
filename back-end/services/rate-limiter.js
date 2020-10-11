const rateLimiter = require('express-rate-limit')


const limiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: 'אחי מספיק לשלוח בקשות ,תבוא מחר'
})

module.exports = {
    limiter
}

