const router = require('express').Router();

router.get('/project-1.salehish', (req, res) => {res.send('This is the project page for salehish.')});

router.use('/salehish', require('./salehish'));

module.exports = router;