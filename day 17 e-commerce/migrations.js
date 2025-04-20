const db = require('./db')

const createTables = () =>{
    db.query(
        `CREATE TABLE IF NOT EXISTS categories(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            description TEXT
        )`,
        (err) => {
            if(err){
                console.error('error creating table categories', err.message);
            }else{
                console.log('categories table is ready');
            }
        }
    );
    db.query(
        `CREATE TABLE IF NOT EXISTS products(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            description TEXT
        )`,
        (err) => {
            if(err){
                console.error('error creating table products', err.message)
            }else{
                console.log('products table is ready');
            }
        }
    );

    db.query(
        `CREATE TABLE IF NOT EXISTS product_categories(
            id INT AUTO_INCREMENT PRIMARY KEY,
            product_id INT NOT NULL,
            category_id INT NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
            UNIQUE KEY (product_id, category_id)
        )`, 
        (err) => {
            if(err){
                console.error('error creating table cart', err.message)
            }else{
                console.log('Cart table is ready');
            }
        }
    );

    db.query(
        `CREATE TABLE IF NOT EXISTS customers(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            phone VARCHAR(255),
            address TEXT
        )`, (err) => {
            if(err){
                console.error('error creating table customers ', err.message)
            }else{
                console.log("customer table is ready.");
            }
        }
    );
    db.query(
        `CREATE TABLE IF NOT EXISTS orders(
            id INT AUTO_INCREMENT PRIMARY KEY,
            customer_id INT NOT NULL,
            order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            total_price DECIMAL(10, 2) NOT NULL,
            status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
            FOREIGN KEY(customer_id) REFERENCES customers(id) ON DELETE CASCADE
        )`, (err) => {
            if(err){
                console.error('error creating table orders ', err.message)
            }else{
                console.log("orders table is ready.");
            }
        }
    );
    db.query(
        `CREATE TABLE IF NOT EXISTS order_items(
            id INT AUTO_INCREMENT PRIMARY KEY,
            order_id INT NOT NULL,
            product_id INT NOT NULL,
            quantity INT NOT NULL CHECK (quantity > 0),
            price DECIMAL(10, 2) NOT NULL,
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
            FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
            UNIQUE KEY (order_id, product_id)
        )`, (err) => {
            if(err){
                console.error('error creating table order items ', err.message)
            }else{
                console.log("order items table is ready.");
            }
        }
    );

}

createTables()