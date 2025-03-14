const dotenv = require('dotenv')
dotenv.config();

const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');

const app = express();

let database;

const initDb = (callback) => {
    if (!database) {
        console.log('Db is already initialized!');
        return callback(null, _database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client.db();
        callback(null, database);
    }  )
    .catch((err) => {
        callback(err);
    }  )

};


const getDatabase = () =>{
    if(!database) {
        throw new Error('Database not initialized')
    }
    return database; 
}

module.exports = {
    initDb,
    getDatabase
};