let App = require('./support/Application')
let ViewEngine = require('./support/Views/ViewEngine')

const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'
const app_url = 'http://localhost:3000'

let app = new App({port, host, app_url})
let view = new ViewEngine(__dirname + '/views', require('pug'))
let router = require('./routes')

app.use('view', view)
app.use('router', router)

app.make()

app.run()