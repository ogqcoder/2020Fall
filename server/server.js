const express = require("express"); //server
const mongoose = require("mongoose"); //database
const path = require("path");
const users = require("./controllers/users");
const posts = require("./controllers/posts");
const comments = require("./controllers/comments");
const followers = require("./controllers/followers");
require('dotenv').config();
// mongoose.connect("mongodb://localhost/exercise", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // createIndexes: true,
// }); //creation of database
const port = process.env.PORT || 3000;

const app = express();

// app.set("view engine", "ejs");
// app.use(express.static(__dirname + '../docs'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/public/'))
app.use(express.static(__dirname + '/../docs/'));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  Authentication
app.use(function (req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if (arr.length > 1 && arr[1] != null) {
        req.userId = +arr[1];
    }
    next();
});




app.use('/users', users);
app.use('/posts', posts);
app.use('/comments', comments)
app.use('/followers', followers)

app.get("*", async (req, res) => {
    const filename = path.join(__dirname + '/../docs/index.html')
    // console.log(filename);
    res.sendFile(filename)
});
app.listen(port, function () {
    console.log("Started");
});
