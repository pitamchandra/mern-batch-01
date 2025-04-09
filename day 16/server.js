const express = require('express');
const cors = require('cors')
const mysql = require('mysql2');
const db = require('./db');
const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(cors())
app.use(express.json())

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})