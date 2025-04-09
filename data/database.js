const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Db is already initialized!'); // Log the message if the database is already initialized
        return callback(null, database);
    }
    
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client.db(); 
            console.log('Database connected successfully.'); 
            callback(null, database); 
        })
        .catch((err) => {
            console.error('Database connection failed:', err); 
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
    initDb,
    getDatabase,
    ObjectId
};