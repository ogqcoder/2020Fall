const mysql = require("mysql");
require("dotenv").config({ path: __dirname + '/../../.env' });
// console.log(__dirname + '/../../.env')

const pool = mysql.createPool({

    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    // host: 'sql9.freemysqlhosting.net',
    // user: 'sql9372875',
    // password: 'JAzQGFr7BE',
    // database: 'sql9372875',
})

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, binding, (err, result, fields) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = { pool, query }
var sql = "INSERT INTO users (firstname, lastnamec) VALUES ?";
var values = [['Garfield', 'Phillips'], ['Timothy', 'Smith']]
query(sql, [values])
    .then((rows) => { console.log(rows.affectedRows) })
    .catch(err => {
        console.log(err)
    })