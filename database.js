const mongoose = require("mongoose");
require('dotenv').config()

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
mongoose.set('strictQuery', true);
const DB = process.env.DB;
const URI = 'mongodb+srv://aritra:1234@cluster0.accnd3z.mongodb.net/';
class Database {
    constructor() {
        this._connect();
    }
    
    _connect() {
        
        mongoose.connect(`${URI}`)
            .then(() => {
                console.log("Database Connection Successful")
            })
            .catch(err => {
                console.log("Database Connection Failed");
                console.log(err.message);
            });
    }
}

module.exports = new Database();