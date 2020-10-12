const express = require("express"); //server
const mongoose = require("mongoose"); //database

mongoose.connect("mongodb://localhost/exercise", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // createIndexes: true,
}); //creation of database

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {

});

app.use("/articles", articleRouter);
app.listen(3000, function () {
    console.log("Started");
});
