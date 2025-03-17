const express = require('express');
const mongodb = require('./data/database');
const app = express();

app.use((req, res, next) => {
    console.log('Hello World!');
    next();
});


app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const port = process.env.PORT || 3001;
app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else{
        console.log(`Database is listening and node running on port ${port}`);
    }

});

app.get('/project-1.salehish', (req, res) => {
    res.send('This is the project page for salehish')
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
