class WelcomeController {
    index(request, response) {
        this.response.view('/welcome.pug')
    }

    store(request, response) {
        let data = {
            name: request.params.name,
            age: request.params.age
        }

        this.response.sendJson(200, data)

    }
}

module.exports = WelcomeController