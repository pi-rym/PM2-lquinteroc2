require('dotenv').config();
const { PORT } = process.env
const app = require("./src/server")
const dbConnection = require('./src/config/dbConnection')




dbConnection()
.then(() => app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
).catch((err) => console.log('Fail to connect', err.message))



