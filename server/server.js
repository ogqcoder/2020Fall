const express = require("express"); //server
const mongoose = require("mongoose"); //database
const users = require("./controllers/users");
const posts = require("./controllers/posts");
const comments = require("./controllers/comments");
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
// app.use(methodOverride("_method"));

app.get("/", async (req, res) => {

});

app.use('/users', users);
app.use('/posts', posts);
app.use('/comments', comments)

app.listen(port, function () {
    console.log("Started");
});
