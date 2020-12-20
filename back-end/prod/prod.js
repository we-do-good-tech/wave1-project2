const helmet = require('helmet')
const compression = require('compression')
const cors = require('cors')

function allowCors(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' == request.method) {
        response.sendStatus(200);
    } else {
        next();
    }
}



module.exports = function (app) {
    app.use(helmet())
    app.use(compression())
    // app.use(cors({
    //     'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With'],
    //     'exposedHeaders': ['sessionId'],
    //     'origin': '*',
    //     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //     'preflightContinue': false,
    //     "credentials": "omit"
    // }))
    app.use(cors({
        origin: 'https://mashlimim.herokuapp.com/',
        methods: ['GET', 'POST']
    }))
}