// const express = require("express");
// const User = require("./../models/user");
// // const article = require("./../models/article");

// const router = express.Router();


// // new users
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