let http = require('http')

module.exports = class {
    constructor(config) {
        const {port, host} = config
        this.config = {}
        this.plugins = {}

        this.config.port = port
        this.config.host = host
    }

    use(name, plugin) {
        this.plugins[name] = plugin
    }

    make() {
        for (const key in this.plugins) {
            if (this.plugins.hasOwnProperty(key)) {
                this[key] = this.plugins[key]
            }
        }
    }

    run(action) {
        http.createServer((request, response) => {
            if (typeof this.router !== 'undefined') {
                this.router.init(request, response, this)
            } else {
                if (typeof action === 'undefined') {
                    response.end()
                    return
                }
                action(request, response)
            }
            
        }).listen(this.config.port, this.config.host)
        
        console.log(`Server listening at ${this.config.port}`)
    }
}