const express = require("express"); //server
const mongoose = require("mongoose"); //database
const users = require("./controllers/users");
require('dotenv').config();
// mongoose.connect("mongodb://localhost/exercise", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // createIndexes: true,
// }); //creation of database
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));

app.get("/", async (req, res) => {

});

app.use('/users', users);

app.listen(port, function () {
    console.log("Started");
});
