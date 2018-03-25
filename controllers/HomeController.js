let fs = require('fs')

class HomeController {
    index(request, response) {
        //fs.createReadStream('./views/home.html').pipe(response)
        /*
        fs.readFile('./views/home.html', (error, data) => {
            if (error) throw error

            response.writeHead(200, {
                'content-type': 'text/html',
                'content-length': data.length
            })
            response.write(data)
            response.end()
        })
        */
        let html = this.view.render('/template.pug', {
            name: 'oziel'
        })
        response.write(html)
        response.end()
        
    }

}

module.exports = HomeController