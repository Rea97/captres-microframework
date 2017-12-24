let Router = require('../support/Router')
let router = new Router()

router.get('/', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'application/json'
    })

    response.end('{"message": "Hello world"}')
})

module.exports = router
