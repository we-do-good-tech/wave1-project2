require('dotenv').config()
const cors = require('cors')
const keys = require('./back-end/config/keys')
const express = require('express')
const path = require('path')
const server = express()



server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'client/dist/reports')))

const authRoutes = require('./back-end/routes/auth')


server.use('/api/auth', authRoutes)

// const { confirmCode } = require('./back-end/services/confirm-code')

// console.log(confirmCode)
// console.log(confirmCode.code)
// console.log(confirmCode.getCode())


server.get('*', (request, response) => {
    response.sendFile(path.resolve('client/dist/reports/index.html'))
})


server.listen(process.env.PORT || keys.port, () => console.log("Listening"));