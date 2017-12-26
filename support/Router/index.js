let url = require('url')

module.exports = class {
    constructor() {
        this.routes = []
    }

    add(path, action, method = 'GET') {
        this.routes.push({method, path, action})
    }

    get(path, action) {
        this.add(path, action, 'GET')
    }

    post(path, action) {
        this.add(path, action, 'POST')
    }

    put(path, action) {
        this.add(path, action, 'PUT')
    }

    delete(path, action) {
        this.add(path, action, 'DELETE')
    }

    init(req, res, app) {
        this.app = app

        let path = url.parse(req.url).pathname
        let method = req.method
    
        let route = this.routes.filter(route => route.path === path && route.method === method)
        
        if (route.length === 1) {
            route[0].action.call(app, req, res)
            return;
        }

        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end(`<h1>404 Route ${path} Not Found</h1>`)
    }
}