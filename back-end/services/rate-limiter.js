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


// const confirmCode = rateLimiter({
//     windowMs: 10 * 60 * 1000 * 6,
//     max: 5,
//     message: 'כשל',
//     handler: function (request, response) {
//         console.log('CONFIRM COSE LIMITTER')
//         response.status(429).send({
//             message: ''
//         })
//     }
// })



module.exports = {
    limitter,
    // logEmailLimmiter,
    // signLimitter
}

