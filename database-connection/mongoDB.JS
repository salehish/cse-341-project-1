const { MongoClient } = require('mongodb');

let database;

const initDB = async (callback) => {
  if (database) {
    console.log('DB already initialized');
    return callback(null, database);
  }

  const uri = 'mongodb://localhost:27017'; 
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      database = client;
      console.log('MongoDB connected');
      callback(null, client);
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized');
  }
  return database;
};

module.exports = {
  initDB,
  getDatabase,
};
