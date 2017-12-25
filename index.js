let App = require('./support/Application')
let ViewEngine = require('./support/Views/ViewEngine')

const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'

let app = new App({port, host})
let view = new ViewEngine(__dirname + '/views', require('pug'))
let router = require('./routes')

app.use('view', view)
app.use('router', router)

app.make()

app.run()