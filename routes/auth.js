const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.send('Login route');
});

router.post('/signup', (req, res) => {
    res.send('Signup route');
});

module.exports = router;
const express = require('express');
const passport = require('passport');
const routes = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/api/products'); 
  }
);

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

module.exports = router;
