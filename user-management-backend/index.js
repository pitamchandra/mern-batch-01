
const fs = require('fs')
const path = require('path')

const content = 'hello'

console.log(path);
const dbFilePath = path.join(__dirname, 'database.json')

try{
    fs.writeFile(dbFilePath, content, ()=>{
        console.log("lala");
    })
} catch(err){
    console.log(err);
}
