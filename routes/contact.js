const express = require('express');

const router = express.Router();

router.post('/contacts', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send({ contactId: contact._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/contacts/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    if (!updatedContact) {
      return res.status(404).send({ message: 'Contact not found' });
    }
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/contacts/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).send({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
