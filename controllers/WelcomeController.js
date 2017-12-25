class WelcomeController {
    index(request, response) {
        let html = this.view.render('/welcome.pug')
        response.write(html)
        response.end()
    }
}

module.exports = WelcomeController