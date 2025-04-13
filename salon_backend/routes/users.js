const express = require('express')
const db = require('../db')
const router = express.Router()
const bcrypt = require('bcryptjs')


// create new user
router.post('/', async (req, res) => {
    const { name, email, phone, password, profile_image, cover_image, role } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const sql = 'INSERT INTO users (name, email, phone, password, profile_image, cover_image, role) VALUES (?,?,?,?,?,?,?)'
        db.query(sql,[name, email, phone, hashedPassword, profile_image, cover_image, role],(err, result) => {
            if(err){
                res.status(500).json({
                    status: "error",
                    message: err.message
                })
            }
            else{
                res.status(201).json({
                    status: "success",
                    message: "user created successfully",
                    data: {id: result.insertId, name, email, phone, profile_image, cover_image, role}
                })
            }
        })
    }catch(err){
        res.status(500).json({status: "error" , message: err.message})
    }
})

// get all users
router.get("/", (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql,(err, result) => {
        if(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "users getting successfully",
                data: result
            })
        }
    })
})

// get a user
router.get("/:id", (req, res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM users WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if(err){
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }else if(result.length === 0){
            res.status(404).json({
                status: "failed",
                message: "User not found"
            })
        }
        else{
            res.status(200).json({
                status: "success",
                message: "user getting successfully",
                data: result
            })
        }
        console.log(result.length);
    })
})

// put a user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {name, email, phone, password, profile_image, cover_image, role} = req.body
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'UPDATE users SET name = ?, email = ?, phone = ?,password = ?, profile_image = ?, cover_image = ?, role = ? WHERE id = ?'
        db.query(sql, [name, email, phone, hashedPassword, profile_image, cover_image, role, id], (err, result) => {
            if(err){
                res.status(500).json({
                    status : "error",
                    message : err.message
                })
            }else if(result.affectedRows === 0){
                res.status(404).json({
                    status : "failed",
                    message : "product not found"
                })
            }else{
                res.status(200).json({
                    status : "success",
                    message : "product update successfully",
                    data: {
                        id, name, email, phone, hashedPassword, profile_image, cover_image, role
                    }
                })
            }
        })
    }catch(err){
        res.status(500).json({
            status : "error",
            message : err.message
        })
    }

    

})

// patch/update some fields a user
router.patch("/:id", async (req, res) => {
    const {id} = req.params
    const data = req.body
    try{
        if(data.password){
            data.password = await bcrypt.hash(data.password, 10)
        }
        if(data.length === 0){
            return res.status(400).json({
                status: "failed",
                message: "not any updated data given"
            })
        }

        const fields = Object.keys(data);
        const values = Object.values(data);

        const setClouse = fields.map(field => `${field} = ?`).join(', ')
        const sql = `UPDATE users SET ${setClouse} WHERE id = ?`
        db.query(sql, [...values, id], (err, result) => {
            if(err){
                res.status(500).json({
                    status: "error",
                    message: err.message
                })
            }else if(result.affectedRows === 0){
                res.status(404).json({
                    status: "failed",
                    message: "user not found"
                })
            }else{
                res.status(200).json({
                    status: "success",
                    message: "user updated successfully",
                    data: {id, ...data}
                })
            }
        })
    }catch(err){
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

   
})

// delete a user
router.delete("/:id", (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM users WHERE id = ?'
    db.query(sql, [id], (err) => {
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }else{
            res.status(200).json({
                status: "success",
                message: "user deleted successfully"
            })
        }
    })
})

module.exports = router;