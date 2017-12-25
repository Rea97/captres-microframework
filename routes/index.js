let Router = require('../support/Router')
let router = new Router()

let WelcomeController = require('../controllers/WelcomeController')

router.get('/', new WelcomeController().index)

module.exports = router
