let App = require('./support/Application')

const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'

let app = new App({port, host})
let router = require('./routes')

app.use('router', router)

app.run()