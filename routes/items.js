const express = require('express');
const Joi = require('joi');
const passport = require('passport');
const router = express.Router();

let items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
];

const itemSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().positive().required(),
});

router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found.');
  res.send(item);
});

router.post('/', passport.authenticate('google', { session: false }), (req, res) => {
  const { error } = itemSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  items.push(newItem);
  res.status(201).send(newItem);
});

router.put('/:id', passport.authenticate('google', { session: false }), (req, res) => {
  const { error } = itemSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found.');

  item.name = req.body.name;
  item.price = req.body.price;
  res.send(item);
});

router.delete('/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found.');

  items.splice(itemIndex, 1);
  res.status(204).send();
});

module.exports = router;
