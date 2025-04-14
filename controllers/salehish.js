const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

console.log('Controller loaded');

const getAll = async (req, res) => {
  //#swagger.tag=[salehish]
  try {
    const db = mongodb.getDatabase();
    const result = db.collection('salehish').find(); 
    const salehish = await result.toArray(); 
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(salehish);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

const getsSingle = async (req, res) => {
    //#swagger.tag=[salehish]
  const salehishid = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('salehish').find({ _id: salehishid });
  result.toArray().then((salehish) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(salehish[0]);
  });
};

const createsalehish = async (req, res) => {
  const salehish = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const response = await mongodb.getDatabase().db().collection('salehish').insertOne(salehish);
  if (response.acknowledged) {
    res.status(201).json({ id: response.insertedId });
  } else {
    res.status(500).json(response.error || 'An error occurred while creating the contact.');
  }
};

const updatesalehish = async (req, res) => {
  const salehishid = new ObjectId(req.params.id);
  const salehish = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const response = await mongodb.getDatabase().db().collection('salehish').replaceOne({ _id: salehishid }, salehish);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Update failed.');
  }
};

const deletesalehish = async (req, res) => {
    //#swagger.tag=[salehish]
  const salehishid = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('salehish').deleteOne({ _id: salehishid });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Delete failed.');
  }
};

const getAllContacts = (req, res) => {
  res.send('Fetched all contacts');
};

const getContactbyId = (req, res) => {
  const { id } = req.params;
  res.send(`Fetched contact with ID: ${id}`);
};

module.exports = {
  getAll,
  getsSingle,
  createsalehish,
  updatesalehish,
  deletesalehish,
  getAllContacts,
  getContactbyId
};
