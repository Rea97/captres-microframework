let MongoClient = require('mongodb').MongoClient

class WelcomeController {
    index(request, response) {
        let data = '';
        require('http').get('http://readeveloper.test/api/posts/5', (res) => {
            res.on('data', chunk => data += chunk)

            res.on('end', () => console.log(data))
        }).on('error', (err) => console.log(JSON.parse(data)))
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