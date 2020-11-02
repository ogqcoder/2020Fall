const express = require("express"); //server
require("dotenv").config()
// const mongoose = require("mongoose");
const mysql = require('mysql'); //database
const io = require('socket.io')(8080);
const users = require("./controllers/users")
const path = require("path");


const conn = mysql.createConnection({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9372875',
    password: 'JAzQGFr7BE',
    database: 'sql9372875'
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

}); //connects to database/




// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
// });
// mongoose.connect("mongodb://localhost/exercise", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     createIndexes: true,
// }); //creation of database

const app = express();

app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, './views'));
// app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
    res.send("hello");
});

app.use("/users", users)

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send({ message: err.message })
})

app.listen(3000, function () {
    console.log("Started");
});


io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
})