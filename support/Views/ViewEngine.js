let HtmlViewEngine = require('./HtmlViewEngine')

class ViewEngine {
    constructor(path, engine, config = {}) {
        this.path = path
        this.engine = engine
        this.config = config
        
        if (typeof engine === 'undefined') {
            this.engine = new HtmlViewEngine()
        }
    }

    render(filePath, data) {
        return this.engine.renderFile(this.path + filePath, data)
    }

    make(content, data) {
        return this.engine.render(content, data)
    }
}

module.exports = ViewEngine