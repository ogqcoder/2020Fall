const express = require("express");
const User = require("./../models/user");
const mysql = require('mysql');
// const article = require("./../models/article");

const router = express.Router();


// new users
// router.post("/", async (req, res) => {
//     let user = new User({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email,

//     });
//     try {
//         article = await article.save();
//         res.redirect(`/articles/${article.id}`);
//     } catch (error) {
//         res.render("articles/new", { article: article });
//     }
// });
const users = ["garfield", "Lena", "Lisa"]

router.get("/", async (req, res) => {
    // try {
    //     throw { message: "this is a fake error" }
    // }
    // catch (err) {
    //     res.status(500).send(err);
    // }
    console.log(req.body.name);

    res.render("index", { users })
})
    .post("/", async (req, res) => {

        console.log(req.body);
        users.push(req.body.tname)
        res.render("index", { users: users })
    })
    .get("/search", (req, res) => {
        res.send()
    })
    .get("/new", async (req, res) => {

        console.log(req.body.tname)
        res.render("new", { users });
    })

module.exports = router; 