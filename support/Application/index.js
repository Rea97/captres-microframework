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

    run() {
        http.createServer((request, response) => {
            for (const key in this.plugins) {
                if (this.plugins.hasOwnProperty(key)) {
                    const plugin = this.plugins[key];
                    plugin.init(request, response)
                }
            }

            response.end()
        }).listen(this.config.port, this.config.host)
        
        console.log(`Server listening at ${this.config.port}`)
    }
}