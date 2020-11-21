const express = require('express');
const follower = require('../models/follower');

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
    .post('/:id/follow', (req, res, next) => {
        follower.follow(req.params.id,
            req.body.fid
        ).then(followed => {
            res.send(followed);
        }).catch(next)
    })
    .delete('/:id/unfollow', (req, res, next) => {
        follower.unfollow(req.params.id,
            req.body.followerid
        ).then(followed => {
            res.send(followed);
        }).catch(next)
    })

module.exports = router;