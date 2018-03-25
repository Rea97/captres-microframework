const Driver = require('../../support/DB/Drivers/MongoDriver')

let db = new Driver('mongodb://root:captres@ds131237.mlab.com:31237/captres')

let tableName = process.argv[2]

db.createCollection(tableName, result => {
    console.log(`Table ${tableName} created!`)
})