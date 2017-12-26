class WelcomeController {
    index(request, response) {
        this.response.view('/welcome.pug')
    }

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