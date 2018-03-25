
class BlogController {
    show(request, response) {
        let fs=require('fs')
        fs.readFile('/home/oziel/Escritorio/Programas_favoritos.txt', (err, fd) => {
            if (err) throw err
            console.log(fd)
        })

        let id = this.request.queryString.id || 1
        let post = '';
        require('http').get('http://readeveloper.test/api/posts/'+id, (res) => {
            res.on('data', chunk => post += chunk)

            res.on('end', () => {
                post = JSON.parse(post).data
                this.response.view('/posts/show.pug', {post})
            })
        }).on('error', (err) => console.log(JSON.parse(data)))
    }
}

module.exports = new BlogController()