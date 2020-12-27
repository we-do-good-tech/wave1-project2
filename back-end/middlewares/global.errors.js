/**
 * @param {*} request 
 * @param {*} response 
 * @param {*} next
 * error handler not found request 
 */
function apiNotFoundError(request, response, next) {
    console.log('ERROR NOT FOUND')
    const error = new Error('NOT-FOUND')
    error.message = 'NOT FOUND'
    error.status = 404
    next(error)
}

/**
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * error handler  bad request
 */
function handleError(error, request, response, next) {
    console.log(error)
    response.status(error.status || 500).send({
        message: error.message || 'SERVER ERROR'
    })
}

module.exports = {
    apiNotFoundError,
    handleError
}
