const db = require('./db');

const createTables = () =>{
    db.query(`
      CREATE TABLE IF NOT EXISTS categories(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        description TEXT
      )  
    `, (err) => {
        if(err){
            console.error('Error creating categories table', err.message)
        }else{
            console.log('Categories table is ready.');
        }
    });
}
createTables();