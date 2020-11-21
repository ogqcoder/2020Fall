const express = require('express');
const comments = require('../models/comment');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        comments.getAll().then(x => res.send(x))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        comments.getCommentsFromThatPost(id).then(x => res.send(x))
            .catch(next);
    })
    .get('/types', (req, res, next) => {
        comments.getTypes().then(x => res.send(x))
            .catch(next);
    })
    .get('/search', (req, res, next) => {
        comments.search(req.query.q).then(x => res.send(x))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        comments.comment(
            req.body.Text,
            req.body.Post_id,
            req.body.Owner_id
        ).then(newUser => {
            res.send(newUser);
        }).catch(next) //finished 
    })
    .put('/:id', (req, res, next) => {
        comments.updateComment(
            req.params.id, //this is COMMENT id and not post or user id may change to body instead of params
            req.body.Text,

        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        comments.deleteComment(req.params.id).then(msg => {
            res.send(msg);
        }).catch(next) // finished
    })
module.exports = router;