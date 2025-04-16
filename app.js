const express = require('express');
const session = require('express-session');
const passport = require('passport');

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const { swaggerUi, swaggerSpec } = require('./swagger/swaggerConfig');

const app = express();

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
