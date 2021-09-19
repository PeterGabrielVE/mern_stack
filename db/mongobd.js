const mongoose = require('mongoose')

async function connectDb({ host, port, dbName}){

    const uri = `mongobd://${host}:${port}/${dbName}`
    mongoose.connect(uri, { useNewUrlParser: true})
}

module.exports = connectDb