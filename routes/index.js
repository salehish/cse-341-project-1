const router = require('express').Router();

const salehishRouter = require('./salehish');

router.get('/project-1.salehish', (req, res) => {res.send('This is the project page for salehish.')});

router.use('/salehish', salehishRouter);

router.get('/', (req, res) => {res.('Hello World');});

module.exports = router;