const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


console.log('Controller loaded');

const express = require('express');


const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('salehish').find();
    result.toArray().then((salehish) => {
        res.setHeader('Content-Type', 'application/json`');
        res.status(200).json(salehish);

    })
    const { id } = req.params;
    res.send(`Fetched item with ID: ${id}`);
};

const getsSingle = async (req, res) => {
    const salehishid = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('salehish').find();
    result.toArray().then((salehish) => {
        res.setHeader('Content-Type', 'application/json`');
        res.status(200).json(salehish);

    })
   
};

const createsalehish = (req, res) => {
    res.send('Item created');
};

const updatesalehish = (req, res) => {
    const { id } = req.params;
    res.send(`Updated item with ID: ${id}`);
};

const deletesalehish = (req, res) => {
    const { id } = req.params;
    res.send(`Deleted item with ID: ${id}`);
};

const getAllContacts = (req, res) => {
    res.send('Fetched all contacts');
};

const getContactbyId = (req, res) => {
    const { id } = req.params;
    res.send(`Fetched contact with ID: ${id}`);
};

const router = express.Router();

router.get('/contacts/:id', getContactbyId); 
router.get('/contact/:id', getAllContacts);

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.get('/project-1.salehish', (req, res) => {
  res.send('This is the project page for salehish.');
});

router.get('/contacts', getAllContacts);
router.get('/salehish', getAll); 
router.get('/salehish/:id', getsSingle); 
router.post('/salehish', createsalehish); 
router.put('/salehish/:id', updatesalehish);
router.delete('/salehish/:id', deletesalehish);

module.exports = router; 
module.exports = {
    createsalehish,
    updatesalehish,
    getAll,
    getsSingle,
    deletesalehish,
    getAllContacts,
    getContactbyId,
};











// const { message } = require('statuses');
// const mongoDb = require('../database-connection/mongoDB');
// const { ObjectId } = require('mongodb');

// const getInfo = {}

// let mathCollection = "Math256"

// let engCollection = "Eng256"

// getInfo.getHome = async function (req, res) {
//     //#swagger.tags=['Users']
//    res.send("welcome home")
// }

// getInfo.getAllMath = async function (req, res) {
//      //#swagger.tags=['Users']
//     try {
//         const results = await mongoDb.getDb().db().collection(mathCollection).find();
//     results.toArray().then((objects) => {
//         console.log(objects)
//         res.setHeader("Content-Type", "application/json")
//         res.status(200).json(objects);
//     })
//     } catch (error) {
//         console.log('error is ', error)
//         res.status(500).json({message:error.message || 'some error occurred while creating user'})
//     }
// }

// getInfo.getSingleMath = async function (req, res) {
//          //#swagger.tags=['Users']
//     try {
//         const product_id = req.params.id;
//     const userId = ObjectId.createFromHexString(product_id);
//     console.log(userId)
//     const results = await mongoDb.getDb().db().collection(mathCollection).find({ _id: userId });
//     if (!results) {
//         return res.status(404).json({ error: "results not found" });
//     }
//     console.log(results);
//     results.toArray().then((objects) => {
//         console.log(objects)
//         res.setHeader("Content-Type", "application/json")
//         res.status(200).json(objects);
//     }
//     )
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message:error.message || 'some error occurred while creating user'})
//     }
// }

// getInfo.createItemMath = async function (req, res) {
//          //#swagger.tags=['Users']
//     try {
//         const student = {
//             firstname : req.body.firstname,
//             lastname : req.body.lastname,
//             birthdate : req.body.birthdate,
//             country: req.body.country,
//             email: req.body.email,
//             photo:req.body.photo,
//             major: req.body.major,
//             password: req.body.password,
//             phone: req.body.phone
//         };
//         const results = await mongoDb.getDb().db().collection(mathCollection).insertOne(student);
//        if(results.acknowledged){
//         res.status(204).send();
//        } else{
//         res.status(500).json(response.error || 'some error occurred while updating the user')
//        }
//     } catch (error) {

//         res.status(500).json({message:error.message || 'some error occurred while creating user'})
//     }
   
// }

// getInfo.updateItemMath = async function (req, res) {
//          //#swagger.tags=['Users']
//    try {
//     const product_id = req.params.id;
//     const userId = ObjectId.createFromHexString(product_id);
//     console.log(userId)

//     const student = {
//         firstname : req.body.firstname,
//         lastname : req.body.lastname,
//         birthdate : req.body.birthdate,
//         country: req.body.country,
//         email: req.body.email,
//         photo:req.body.photo,
//         major: req.body.major,
//         password: req.body.password,
//         phone: req.body.phone
//     }
//     const results = await mongoDb.getDb().db().collection(mathCollection).replaceOne({_id:userId},student);
//     if(results.modifiedCount > 0){
//         res.status(204).send();
//        } else{
//         res.status(500).json(response.error || 'some error occurred while updating the user')
//        }
//    } catch (error) {
//         console.log(error);
//         res.status(500).json({message:error.message || 'some error occurred while updating the user'})
//    }
// }

// getInfo.deleteItemMath = async function (req, res) {
//          //#swagger.tags=['Users']
//     try {
//         const userId = ObjectId.createFromHexString(req.params.id);
//         console.log(userId)
//         const results = await mongoDb.getDb().db().collection(mathCollection).deleteOne({_id: userId});
//         if(results.deletedCount > 0){
//         res.status(204).send("user succesfully deleted");
//        } else{
//         res.status(500).json(results.error || 'some error occurred while deleting the user')
//        }
//     } catch (error) {
//         console.log("error is", error)
//         res.status(500).json(results.error || 'error occurred while deleting the user')
//     }
// }

// /*************
//  Eng256 controller logic functions.
//  ************* */

//  getInfo.getAllEng = async function (req, res) {
//     //#swagger.tags=['Users']
//    try {
//        const results = await mongoDb.getDb().db().collection(engCollection).find();
//    results.toArray().then((objects) => {
//        console.log(objects)
//        res.setHeader("Content-Type", "application/json")
//        res.status(200).json(objects);
//    })
//    } catch (error) {
//        console.log('error is ', error)
//        res.status(500).json({message:error.message || 'some error occurred while creating user'})
//    }
// }

// getInfo.getSingleEng = async function (req, res) {
//         //#swagger.tags=['Users']
//    try {
//        const product_id = req.params.id;
//    const userId = ObjectId.createFromHexString(product_id);
//    console.log(userId)
//    const results = await mongoDb.getDb().db().collection(engCollection).find({ _id: userId });
//    if (!results) {
//        return res.status(404).json({ error: "results not found" });
//    }
//    console.log(results);
//    results.toArray().then((objects) => {
//        console.log(objects)
//        res.setHeader("Content-Type", "application/json")
//        res.status(200).json(objects);
//    }
//    )
//    } catch (error) {
//        console.log(error)
//        res.status(500).json({message:error.message || 'some error occurred while creating user'})
//    }
// }

// getInfo.createItemEng = async function (req, res) {
//         //#swagger.tags=['Users']
//    try {
//        const student = {
//            firstname : req.body.firstname,
//            lastname : req.body.lastname,
//            birthdate : req.body.birthdate,
//            country: req.body.country,
//            email: req.body.email,
//            photo:req.body.photo,
//            major: req.body.major,
//            password: req.body.password,
//            phone: req.body.phone
//        };
//        const results = await mongoDb.getDb().db().collection(engCollection).insertOne(student);
//       if(results.acknowledged){
//        res.status(204).send();
//       } else{
//        res.status(500).json(response.error || 'some error occurred while updating the user')
//       }
//    } catch (error) {

//        res.status(500).json({message:error.message || 'some error occurred while creating user'})
//    }
  
// }

// getInfo.updateItemEng = async function (req, res) {
//         //#swagger.tags=['Users']
//   try {
//    const product_id = req.params.id;
//    const userId = ObjectId.createFromHexString(product_id);
//    console.log(userId)

//    const student = {
//        firstname : req.body.firstname,
//        lastname : req.body.lastname,
//        birthdate : req.body.birthdate,
//        country: req.body.country,
//        email: req.body.email,
//        photo:req.body.photo,
//        major: req.body.major,
//        password: req.body.password,
//        phone: req.body.phone
//    }
//    const results = await mongoDb.getDb().db().collection(engCollection).replaceOne({_id:userId},student);
//    if(results.modifiedCount > 0){
//        res.status(204).send();
//       } else{
//        res.status(500).json(response.error || 'some error occurred while updating the user')
//       }
//   } catch (error) {
//        console.log(error);
//        res.status(500).json({message:error.message || 'some error occurred while updating the user'})
//   }
// }

// getInfo.deleteItemEng = async function (req, res) {
//         //#swagger.tags=['Users']
//    try {
//        const product_id = req.params.id;
//    const userId = ObjectId.createFromHexString(product_id);
//    console.log(userId)
//    const results = await mongoDb.getDb().db().collection(engCollection).deleteOne({_id:userId});
//    if(results.deletedCount > 0){
//        res.status(204).send();
//       } else{
//        res.status(500).json(results.error || 'some error occurred while deleting the user')
//       }
//    } catch (error) {
//        console.log("error is", error)
//        res.status(500).json(results.error || 'some error occurred while deleting the user')
//    }
// } 


// module.exports = getInfo
