const express = require('express');
const posts = require('../models/post');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        posts.getAll().then(x => res.send(x))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        posts.get(id).then(x => res.send(x))
            .catch(next);
    })
    .get('/types', (req, res, next) => {
        posts.getTypes().then(x => res.send(x))
            .catch(next);
    })
    .get('/search', (req, res, next) => {
        posts.search(req.query.q).then(x => res.send(x))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        posts.add(
            req.body.URL,
            req.body.Text,
            req.body.Mediatype,
            req.body.Owner_id

        ).then(newPost => {
            res.send(newPost);
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        posts.update(req.params.id,
            req.body.URL,
            req.body.Text,
            req.body.Media_type,
            req.body.Owner_id

        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        posts.remove(req.params.id).then(msg => {
            res.send(msg);
        }).catch(next)
    })
module.exports = router;