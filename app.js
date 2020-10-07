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


server.get('*', (request, response) => {
    response.sendFile(path.resolve('client/dist/reports/index.html'))
})


server.listen(process.env.PORT || keys.port, () => console.log("Listening"));