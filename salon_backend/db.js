const mysql = require('mysql2')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if(err){
        console.error(`database connecting error: ${err.message}`)
    }else{
        console.log("database is connected.");
    }
})

const createTables = () => {
    db.query(`CREATE TABLE IF NOT EXISTS users(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL, 
            email VARCHAR(100) UNIQUE NOT NULL,
            phone VARCHAR(20),
            password VARCHAR(255) NOT NULL,
            profile_image VARCHAR(255),
            cover_image VARCHAR(255),
            role ENUM('customer', 'stylist', 'admin') DEFAULT 'customer',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`, (err) => {
            if(err) {
                console.error('error creating user table', err.message)
            }else{
                console.log("user table is ready");
            }
        })
}
createTables()

module.exports = db