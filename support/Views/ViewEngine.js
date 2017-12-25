class ViewEngine {
    constructor(path, engine, config = {}) {
        this.path = path
        this.engine = engine
        this.config = config
    }

    render(filePath, data) {
        return this.engine.renderFile(this.path + filePath, data)
    }

    make(content, data) {
        return this.engine.render(content, data)
    }
}

module.exports = ViewEngine