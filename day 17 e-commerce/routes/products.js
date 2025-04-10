const express = require('express')
const db = require('../db') 
const router = express.Router()

router.post("/", (req, res) => {
    const {name, price, description} = req.body
    const sql = 'INSERT INTO products (name, price, description) VALUES (?,?,?)'
    db.query(sql,[name, price, description], (err, result) => {
        if(err){
            res.status(500).json({status: "error", message: err.message})
        }else{
            res.status(200).json({
                status: "success",
                message: "data inserted successfuly",
                data: {id: result.insertId, name, price, description}
            })
        }
    })
})


module.exports = router;