class DB {
    constructor(driver, config = {}) {
        this.driver = driver
        this.config = config

        this.openConnection()
    }

    openConnection(callback) {
        this.driver.connect(this.config.url, (error, db) => {
            if (error) throw error

            callback(db)
        })
    }

    createTable(name, callback) {
        this.openConnection(db => {
            db.createCollection(name, callback)
        })
    }
}

module.exports = DB