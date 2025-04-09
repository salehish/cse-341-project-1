const express = require('express');
const app = express()
const route = require('./routes');
const mongodb = require('./database-connection/mongoDB');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth')
const passport = require('passport')
const passportSetup = require('./passportConfig/passport-setup')

const port = process.env.port || 3001
app.use(bodyParser.json())
app.set("view engine", "ejs")
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
         'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use('/', route)
app.use('/auth', authRoutes)

mongodb.initDB((err) => {
    if(err){
        console.log(err)
    }
    else{
        app.listen(port, ()=> {console.log(`Running on port ${port}`)})
    }
})

module.exports = app