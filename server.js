const express = require('express');
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
