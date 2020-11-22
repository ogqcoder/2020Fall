const express = require('express');
const users = require('../models/user');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        users.getAll().then(x => res.send(x))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        users.get(id).then(x => res.send(x))
            .catch(next);
    })
    .get('/types', (req, res, next) => {
        users.getTypes().then(x => res.send(x))
            .catch(next);
    })
    .get('/search', (req, res, next) => {
        users.search(req.query.q).then(x => res.send(x))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        users.add(
            req.body.Firstname,
            req.body.Lastname,
            req.body.Password,
            6/* User */

        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .post('/register', (req, res, next) => {
        users.register(
            req.body.Firstname,
            req.body.Lastname,
            req.body.Email,
            req.body.Password,
            6/* User */
            //req.body.DOB
        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        users.update(req.params.id,
            req.body.Firstname,
            req.body.Lastname,
            req.body.Email,
            req.body.Password,
            req.body.User_Type
        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        users.remove(req.params.id).then(msg => {
            res.send(msg);
        }).catch(next)
    })
    .post('/follow', (req, res, next) => {
        // users.follow()
    }).post('/login', (req, res, next) => {
        users.login(req.body.Email, req.body.Password).then(response => { res.send(response) }).catch(next)
    }).post("")
module.exports = router;