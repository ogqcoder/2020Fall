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
        comments.add(
            req.body.firstname,
            req.body.lastname,
            // req.body.DOB,
            req.body.email,
            req.body.password,
            6 /* User */,
        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        comments.update(req.params.id,
            req.body.firstname,
            req.body.lastname,
            req.body.email,
            req.body.password,
            6 /* User */,
        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        comments.remove(req.params.id).then(msg => {
            res.send(msg);
        }).catch(next)
    })
module.exports = router;