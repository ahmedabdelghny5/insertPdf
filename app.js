const express = require('express')
const { dbConnection } = require('./DB/config')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('docs'))
app.use('/users', require('./apis/user.api'))
app.use( require('./apis/pdf.api'))

dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))