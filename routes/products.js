const express = require('express');
const router = express.Router();

// Example placeholder controller functions
router.get('/', (req, res) => {
  res.json({ message: 'Get all products' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get product with ID ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create a new product' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update product with ID ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete product with ID ${req.params.id}` });
});

module.exports = router;
