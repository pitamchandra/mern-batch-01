const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 5000;

// middleware
app.use(cors())
app.use(express.json())

const dbFileName = 'users.json'
const dbFilePath = path.join(__dirname, dbFileName)

const writeDataToFile = (data) =>{
    try{
        fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2))
    }catch(err){
        console.error("error writing to file: ", err.message);
    }
}

// writeDataToFile({hello: "lala"})

const readDataFromFile = (data) =>{
    try{
        const data = fs.readFileSync(dbFilePath)
        return JSON.parse(data)
    }catch(err){
        console.error("error reading from file: ", err.message);
        return []
    }
}
// console.log(readDataFromFile());

app.get('/' , (req, res ) =>{
    res.send('the server is okay')
})

app.get('/users' , (req, res ) =>{
    const users = readDataFromFile()
    res.json(users)
    res.status(200)
})
app.get('/users/:id' , (req, res ) =>{
    const { id } = req.params
    const users = readDataFromFile()
    const findUser = users.find(user => user.id === parseInt(id))
    if(findUser){
        res.json(findUser);
    }else{
        res.status(404).join({error: "User Not Found"})
    }
})
app.post('/users', (req, res) =>{
    const {name, email, number} = req.body
    const users = readDataFromFile()
    const id = users.length + 1
    const newUser = {
        id: id,
        name,
        email,
        number
    }
    users.push(newUser)
    writeDataToFile(users)
    res.json({type: "post", status: "success", newUser: newUser})
    res.status(201)
})

app.put('/users/:id', (req, res) =>{
    const { id } = req.params
    const {name, email, number} = req.body
    const users = readDataFromFile()
    const userIndex = users.findIndex(user => user.id === parseInt(id))

    if(userIndex !== -1){
        const udpateUser = {
            id : parseInt(id),
            name,
            email,
            number
        }
        users[userIndex] = udpateUser
        writeDataToFile(users)
        res.json(udpateUser)
        console.log("lalala");
    }else{
        res.status(404).json({error: "User not found"})
    }

})

app.patch('/users/:id', (req, res) =>{
    const {id} = req.params
    const users = readDataFromFile()
    const updateUser = req.body
    const userIndex = users.findIndex(user => user.id === parseInt(id)) 
    if(userIndex !== -1){
        users[userIndex] = {...users[userIndex], ...updateUser}
        res.json({type: "update a user", updatedUser: users[userIndex]})
        writeDataToFile(users)
    }else{
        res.status(404).json({error: "user not found"})
    }
})

app.delete('/users/:id', (req, res) =>{
    const { id } = req.params
    const users = readDataFromFile()
    const userIndex = users.findIndex(user => user.id === parseInt(id))
    console.log("lalala", id);
    if(userIndex !== -1){
        users.splice(userIndex, 1)
        writeDataToFile(users)
        res.json({type: "delete", status: 'success', users: users})
        res.status(201).json("User is deleted successfuly")
    }else{
        res.status(404).json({error: "user is not found"})
    }
})

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})