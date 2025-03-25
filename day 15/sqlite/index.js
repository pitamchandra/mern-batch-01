const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')

const app = express();
const port = 3000;

// middleware
app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('e-commerce.db', (err) => {
    if(err){
        console.error("database conneting error : ", err.message)
    }else{
        console.log("database is connected.");
    }
})

db.run(
    `create table if not exists products (
        id integer primary key autoincrement,
        name text not null, 
        price integer,
        category text,
        tag text
    )`
)

app.get("/", (req, res) => {
    res.send("server is running...")
})

// get all data

app.get('/products', (req, res) =>{
    db.all(`select * from products`, [], (err, rows) => {
        if(err){
            res.status(404).json({
                status: "failed",
                message : err.message
            })
        }
        else{
            res.json({
                status: "success",
                data : rows
            })
        }
    })
})

// get specific data
app.get('/products/:id', (req, res) => {
    db.get(`select * from products where id = ?`, [req.params.id], (err, rows) => {
        if(err){
            res.status(500).json({
                status: "failed",
                message: err.message
            })
        }
        else if(!rows){
            res.status(404).json({
                status: "failed",
                message: "Product not found"
            })
        }
        else{
            res.json({
            status: 'success',
            data: rows
            })
        }
        console.log(rows);
    })
})



// post data to database

app.post('/products', (req, res) => {
    const { name, price, category, tag } = req.body;
    console.log(name, price, category, tag);
    db.run(
        `insert into products (name, price, category, tag) values (?, ?, ?, ?)`,
        [ name, price, category, tag ],
        function(err){
           if(err){
            res.status(500).json({
                status: "failed",
                message: err.message
            })
           }
           else{
            res.json({
                status: "success",
                data: {id: this.lastID, name: name, price: price, category: category, tag: tag}
            })
           }
        }
    )
})

// ukpdate a  data
app.put('/products/:id', (req, res) =>{
    const { id } = req.params;
    console.log(id);
    const {name, price, category, tag} = req.body;
    db.run('update products set name = ?, price = ?, category = ?, tag = ? where id = ?',[name, price, category, tag, id], (err) => {
        if(err){
            res.status(500).json({
                status: 'failed',
                message: err.message
            })
        }
        else if(this.changes === 0){
            res.status(404).json({
                status: "failed",
                message: "product not found"
            })
        }
        else{
            res.json({
                status: "success",
                data : {id, name, price, category, tag}
            })
        }
    })
})

// delete a data
app.delete('/products/:id', (req, res) => {
    const {id} = req.params;
    db.run(`delete from products where id = ?`, [id], (err) => {
        if(err){
            res.status(500).json({
                status: "failed",
                message: err.message
            })
        }else if(this.changes === 0){
            res.status(404).json({
                status: "failed",
                message: "product not found"
            })
        }
        else{
            res.json({
                status: "success",
                message: "product deleted successfully"
            })
        }
    })
})

app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
})

