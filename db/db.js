const mongoose = require('mongoose')



const url = "mongodb://localhost:27017/Mashlimim";


async function connectMongoDB(request, response, next) {

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('Connect to database')

        // next()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}


module.exports = { connectMongoDB }