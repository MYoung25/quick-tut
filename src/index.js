const http = require('http')
const app = require('./app')

const server = http.createServer(app)
const port = process.env.PORT ? process.env.PORT : 8080

server.on('listening', () => {
    console.log(`Listening on: ${port}`)
})

server.listen(port)