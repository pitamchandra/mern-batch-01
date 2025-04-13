const express = require('express')
const cors = require('cors')
require('dotenv').config()
const usersRoute = require('./routes/users')
const db = require('./db')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

const port = process.env.SERVER_PORT || 3000
const host = process.env.SERVER_IP || '127.0.0.1'

app.get('/', (req, res) => {
    res.send("server is running .....")
})

app.use('/users', usersRoute)

app.listen(port, host, () => {
    console.log(`server is running on port ${host}:${port}`);
})
