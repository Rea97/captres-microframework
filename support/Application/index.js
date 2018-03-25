let http = require('http')
let querystring = require('querystring')
let url = require('url')

module.exports = class {
    constructor(config) {
        const {port, host, app_url} = config
        this.config = {}
        this.plugins = {}

        this.config.port = port
        this.config.host = host
        this.app_url = app_url
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

    makeAppResponse(response) {
        this.response = Object.create(response)
        this.response.view = (path, data) => {
            let html = this.view.render(path, data)

            response.writeHead(200, {'content-type': 'text/html', 'content-length': html.length})
            
            response.write(html)

            response.end()
        }
        this.response.sendJson = (status = 200, data = {}, headers = {}) => {
            headers['Content-Type'] = 'application/json'

            response.writeHead(status, headers)
            response.write(JSON.stringify(data))

            response.end()
        }
        this.response.redirect = (url, status = 302, headers = {}) => {
            headers['Location'] = this.app_url + url
            response.writeHead(status, headers)
            response.end()
        }
    }

    makeAppRequest(request) {
        this.request = Object.create(request)

        this.request.queryString = querystring.parse(url.parse(request.url).query)
    }

    run(action) {
        http.createServer((request, response) => {
            if (typeof this.router !== 'undefined') {
                this.makeAppRequest(request)
                this.makeAppResponse(response)

                let data = ''
                request.params = {}
                request.addListener('data', chunk => data += chunk)
                request.addListener('end', () => {
                    let params = data.split('&')
                    params.forEach(param => {
                        let key = param.split('=')[0]
                        let value = param.split('=')[1]
                        request.params[key] = value
                    })
                    
                    this.router.init(request, response, this)
                })
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