class WelcomeController {
    index(request, response) {
        let html = this.view.render('/welcome.pug')
        response.write(html)
        response.end()
    store(request, response) {
        response.writeHead(200, {'content-type': 'application/json'})
        let data = {
            name: request.params.name,
            age: request.params.age
        }

        response.end(JSON.stringify(data))
    }
}

module.exports = WelcomeController