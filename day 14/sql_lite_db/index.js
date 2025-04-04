const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;


// middleware
app.use(cors());
app.use(express.json());

// connecting sqlite database
const db = new sqlite3.Database('school_management.db', (err) => {
    if(err){
        console.error('error connecting to sqlite : ' , err.message)
    }
    else{
        console.log("database is connected");
    }
})

db.run(`
  create table if not exists students (
    id integer primary key autoincrement,
    name text not null,
    age integer,
    department_id integer
  )
`)

app.get('/', (req, res) =>{
    res.send('server is running....')
})

app.post('/students', (req, res) => {
    const {name, age, department_id} = req.body;
    db.run(
        `insert into students(name, age, department_id) values (?, ?, ?)`,
        [name, age, department_id],
        function (err) {
            if(err){
                res.status(500).json({error: err.message})
            }else{
                res.status(201).json({id: this.lastID, name: name, age: age, department_id: department_id})
            }
        }
    )
})

app.get('/students', (req, res) => {
    db.all('select * from students', [], (err, rows) =>{
        if(err){
            res.status(500).json({error : err.message})
        } else{
            res.send(rows)
        }
    })
})

// get a specific data

app.get("/students/:id", (req, res) => {
    db.get('select * from students where id = ?', [req.params.id], (err, row)=>{
        if(err){
            res.send({
                status: "error",
                message: "product not found"
            })
        }else{
            res.send({
                status: "success",
                data: row
            })
        }
    })
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})