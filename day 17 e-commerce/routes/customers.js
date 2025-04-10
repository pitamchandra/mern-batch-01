const express = require('express');
const db = require('../db')

const router = express.Router()

router.post('/', (req, res) => {
    const {name, email, phone, address} = req.body
    const sql = 'INSERT INTO customers (name, email, phone, address) VALUES (?,?,?,?)'
    db.query(sql,[name, email, phone, address],(err, result) => {
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "customer created successfuly",
                data: {id: result.insertId, name, email, phone, address}
            })
        }
    })
})

router.get("/", (req, res) => {
    const sql = "SELECT * FROM customer"
    db.query(sql, (err, result) => {
        
    })
})

module.exports = router