function apiNotFoundError(request, response, next) {
    console.log('ERROR NOT FOUND')
    const error = new Error('NOT-FOUND')
    error.message = 'NOT FOUND'
    error.status = 404
    next(error)
}

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
