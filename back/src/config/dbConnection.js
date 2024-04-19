require('dotenv').config()
const mongoose = require('mongoose')


const { URI } = process.env


module.exports = async () => {
    await mongoose.connect(`${URI}`)
}