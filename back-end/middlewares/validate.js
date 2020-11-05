const { validationResult } = require('express-validator')

async function validate(request, response, next) {

    // console.log(request.body, 'VALIDATE func')
    const errors = validationResult(request)

    console.log(errors)

    if (!errors.isEmpty()) {
        return response.status(400).send({
            message: 'INVALID REQUEST'
        })
    }

    Object.freeze(request.body)
    next()

}


module.exports = { validate }