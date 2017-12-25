let Router = require('../support/Router')
let router = new Router()

router.get('/', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'application/json'
    })
let WelcomeController = require('../controllers/WelcomeController')

    response.end('{"message": "Hello world"}')
})
router.get('/', new WelcomeController().index)

module.exports = router
