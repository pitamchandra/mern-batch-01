const express = require('express')
const db = require('../db') 
const router = express.Router()

router.post('/', (req, res) => {
    const {name, description} = req.body;
    const sql = 'INSERT INTO categories(name, description) values (?, ?)';
    db.query(sql, [name, description], (err, result) => {
        if(err){
            res.status(500).json({status: "error", message: err.message})
        }else{
            res.status(200).json({
                status: "success",
                message: "category added",
                data: {id: result.insertId, name, description} 
            })
        }
    })
     
})

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM categories';
    db.query(sql, (err, result) => {
        if(err){
            res.status(500).json({status: "error", message: err.message})
        }else{
            res.status(200).json({
                status: "success",
                message: "categories received",
                data: result
            })
        }
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM categories WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err){
            res.status(500).json({status: 'error', message: err.message})
        }else if(result.length === 0){
            res.status(404).json({
                status: 'failed',
                message: "product not found"
            })
        }else{
            res.json({
                status: "success",
                message: "product retrived",
                data: result[0]
            })
        }
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, description} = req.body
    const sql = 'UPDATE categories SET name = ?, description = ? WHERE id = ?'
    db.query(sql,[name, description, id], (err, result) => {
        if(err) {
            res.status(500).json({status: "error", message: err.message})
        }else if(result.affectedRows === 0){
            res.status(404).json({
                status: "failed",
                message: "product not found"
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "updated product successfully",
                data: {id, name, description}
            })
        }
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM categories WHERE id = ?'
    db.query(sql, [id], (err, result) => {
        if(err){
            res.status(500).json({status:"error", message: err.message})
        }
        else if(result.affectedRows === 0){
            res.status(404).json({
                status: "failed",
                message: "product not found"
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "category deleted successfuly"
            })
        }
    })
})


module.exports = router;