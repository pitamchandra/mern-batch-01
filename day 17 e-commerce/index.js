const express = require('express')
const cors = require('cors')
const categoriesRoute = require('./routes/categories')
const productsRoute = require('./routes/products')
const customerRoute = require('./routes/customers')
require('dotenv').config()
const db = require("./db")
const port = process.env.SERVER_PORT || 3000;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("server is running......")
})


app.use('/categories', categoriesRoute)

app.use('/products', productsRoute)

app.use('/customers', customerRoute)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})