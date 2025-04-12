const express = require('express')
const db = require('../db') 
const { route } = require('./categories')
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

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if(err){
            res.status(500).json({status: "error", message: err.message})
        }else{
            res.status(200).json({
                status: "success",
                message: "product getting successfully",
                data: result
            })
        }
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM products WHERE id = ?'
    db.query(sql, [id], (err, result) => {
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }else if(result.length === 0){
            res.status(404).json({
                status: "failed",
                message: "Product not found"
            })
        }
        else{
            res.status(200).json({
                status: "success",
                message: "getting product by id successfully",
                data: result
            })
        }
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, price, description} = req.body
    const sql = 'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?';
    db.query(sql, [name, price, description, id], (err, result) => {
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }else if(result.affectedRows === 0){
            res.status(404).json({
                status: "failed",
                message: "Product not found"
            })
        }
        else{
            res.status(200).json({
                status: "success",
                message: "product updated successfully",
                data: {id, name, price, description}
            })
        }
    })
})
router.patch('/:id', (req, res) => {
    const {id} = req.params
    const data = req.body
    const fields = Object.keys(data)
    const values = Object.values(data)
    const setClause = fields.map(field => `${field} = ?`).join(', ')
    // console.log(...values);
    const sql = `UPDATE products SET ${setClause} WHERE id = ?`
    db.query(sql, [...values, id], (err, result) => {
        // console.log(result);
        if(err){
            res.status(500).json({
                status: "error", 
                message: err.message
            })
        }else if(result.affectedRows === 0){
            res.status(404).json({
                status: "failed", 
                message: "product not found"
            })
        }else{
            res.status(200).json({
                status: "success", 
                message: "product updated successfully",
                data: {id, ...data}
            })
        }
    })

})

module.exports = router;