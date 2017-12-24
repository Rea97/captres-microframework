let http = require('http');
let Router = require('./support/Router')

const port = process.env.PORT || 3000
const host = process.env.host || '127.0.0.1'

http.createServer((request, response) => {
    response.end('hello')
}).listen(port, host)

console.log(`Server listening at ${port}`)