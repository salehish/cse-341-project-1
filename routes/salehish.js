const express = require('express');

const router = express.Router();

router.get('/project-1.salehish', (req, res) => {
    res.send('This is the project page for salehish.')
});

const salehishController = require('../controller/salehish');

router.get('/', salehishController.getAll);

router.get('/:id', salehishController.getsSingle);


module.exports = salehishRouter;