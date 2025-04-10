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
    const sql = "SELECT * FROM customers"
    db.query(sql, (err, result) => {
        if(err){
            res.status(500).json({status: "error", message: err.message})
        }else{
            res.status(200).json({
                status: "success",
                message: "customer getting successfuly",
                data: result
            })
        }
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM customers WHERE id = ?'
    db.query(sql,[id], (err, result) => {
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "geting customers by id",
                data: result
            })
        }
    })
})
router.put("/:id", (req, res) => {
    const {id} = req.params;
    const {name, email, phone, address} = req.body
    const sql = 'UPDATE customers SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?'
    db.query(sql, [name, email, phone, address, id], (err, result) => {
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }else if(result.affectedRows === 0){
            res.status(404).json({
                status: "failed",
                message: "customer not found"
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "customer updated successfuly",
                data: {id: result.insertId, name, email, phone, address}
            })

        }
    })
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const data = req.body
    if(Object.keys(data).length === 0){
        return res.status(400).json({
            status: "failed",
            message: "no fields provided to update"
        })
    }

    const fields = Object.keys(data)
    const values = Object.values(data)
    const setClause  = fields.map(field => `${field} = ?`).join(', ')
    const sql = `UPDATE customers SET ${setClause} WHERE id = ?`;
    db.query(sql, [...values, id], (err, result) => {
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }else if(result.affectedRows === 0){
            res.status(404).json({
                status: "failed",
                message: "customer not found"
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "customer data udpated successfully",
                data: {id, ...data}
            })
        }
    })

})

router.delete("/:id", (req, res) => {
    const {id} = req.params
    const sql = "DELETE FROM customers WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if(err){
            res.status(500).json({status: "error", message: err.message})
        }else if(result.affectedRows === 0){
            res.status(200).json({
                status: "failed",
                message: "customer not found"
            })
        }
        else{
            res.status(200).json({
                status: "success",
                message: "customer delete successfuly"
            })
        }
    })
})


module.exports = router