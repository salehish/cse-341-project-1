const express = require('express');
const router = express.Router();
const session = require('express-session');
const salehishRoutes = require('./salehish');
const swaggerRoutes = require('./swagger');

router.use('/salehish', salehishRoutes);

router.use('/',require('./swagger'));
router.use('/api-docs', swaggerRoutes);
router.get('/', (req, res) => {
   //#swagger.tag=[salehish]
//res.send('Hello World');
});

module.exports = router;
