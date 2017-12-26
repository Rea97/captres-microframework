let fs = require('fs')

class HtmlViewEngine {
    renderFile(path, data) {
        // To do: render view with data
        return fs.readFileSync(path)
    }

    render() {}
}

module.exports = HtmlViewEngine