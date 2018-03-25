let Router = require('../support/Router')
let router = new Router()

let WelcomeController = require('../controllers/WelcomeController')
let BlogController = require('../controllers/BlogController')

router.get('/', new WelcomeController().index)
router.post('/', new WelcomeController().store)
router.get('/blog/post', BlogController.show)

module.exports = router
