const { application, json } = require('express');
const mongodb = require('../data/database');
const objectId = require('mongodb').objectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('salehish').find();
    result.toArray().then((salehish) => {
        res.setHeader('content-Type', application/json);
        res.status(200).json(salehish);
    });
    

};

const getsSingle = async (req, res) => {
    const salehishId = new objectId(req.params._id);
    const result = await mongodb.getDatabase().db().collection('salehish').find({ _id: salehishId}).toArray();
    result.toArray().then((salehish) => {
        res.setHeader('content-Type', application/json);
        res.status(200).json(salehish[0]);

    });
};

module.exports = {
    getAll,
    getsSingle,
};