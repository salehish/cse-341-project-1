require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./routes');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const passportSetup = require('./passportConfig/passport-setup'); 
const LocalStrategy = require('passport-local').Strategy;
const mongodb = require('./data/database'); 
const contactRoutes = require('./routes/contact'); 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger-output.json'); 

const port = process.env.PORT || 3001; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set("view engine", "ejs");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(session({
    secret: process.env.SESSION_SECRET || 'defaultsecret',
    resave: false,
    saveUninitialized: true,
}));

passport.use(new LocalStrategy(
    function(username, password, done) {
        if (username === 'user' && password === 'password') {
            return done(null, { id: 1, username: 'user' });
        } else {
            return done(null, false, { message: 'Incorrect credentials.' });
        }
    }
));

app.use(passport.initialize());
app.use(passport.session());  
app.use('/', route);
app.use('/auth', authRoutes);
app.use('/api', contactRoutes);

mongodb.initDb((err) => {
    if (err) {
        console.log('Database connection failed:', err);
    } else {
        console.log('Database connected successfully.');
        app.listen(port, () => {
            console.log(`🚀 Node server is running on port ${port}`);
        });
    }
});

module.exports = app;
