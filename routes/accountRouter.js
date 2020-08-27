const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Account = require('../models/account');

const accountRouter = express.Router();
accountRouter.use(bodyParser.json());

accountRouter.route('/')
    .get((req, res, next) => {
        Account.find({})
            .then((accounts) => {
                res.statusCode = 200;
                res.setHeader = ('Content-Type', 'application/json');
                res.json(accounts);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Account.create(req.body)
            .then((account) => {
                res.statusCode = 200;
                res.setHeader = ('Content-Type', 'application/json');
                res.json(account);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 200;
        res.end('PUT is not supported on accounts');
    })
    .delete((req, res, next) => {
        Account.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader = ('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = accountRouter;

