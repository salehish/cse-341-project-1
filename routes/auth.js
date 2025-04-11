const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.send('Login route');
});

router.post('/signup', (req, res) => {
    res.send('Signup route');
});

module.exports = router;
