let MongoClient = require('mongodb').MongoClient

class MongoDriver {
    constructor(url, db) {
        this.url = url
        this.db = db || 'captres'
    }

    connect(callback) {
        MongoClient.connect(this.url, callback)
    }

    createCollection(name, callback) {
        this.connect((error, client) => {
            if (error) throw error
            let db = client.db(this.db)
            db.createCollection(name, (error, result) => {
                if (error) throw error

                callback(result)

                client.close()
            })
        })
    }
}

module.exports = MongoDriver