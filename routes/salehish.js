const express = require('express');
const router = express.Router();
const salehishUi = require('salehish-ui-express');
const salehishDocument = require('../salehish.json');
router.use('/api-docs', salehishUi.serve);
router.get('/api-docs',salehishUi.setup(salehishDocument));


const salehishController = require('../controllers/salehish');

router.get('/', salehishController.getAll);
router.get('/:id', salehishController.getsSingle);

const { 
    createsalehish, 
    updatesalehish, 
    getAll, 
    getsSingle, 
    deletesalehish,
    getAllContacts,
    getContactbyId
} = require('../controller/salehish'); 

router.get('/contacts', getAllContacts); 
router.get('/contacts/:id', getContactbyId); 
router.get('/', (req, res) => {
    res.send('Hello world');
});

router.get('/project-1.salehish', (req, res) => {
    res.send('This is the project page for salehish.');
});

console.log('Functions loaded:', {
    createsalehish,
    updatesalehish,
    getAll,
    getsSingle,
    deletesalehish,
    getAllContacts,
    getContactbyId
});

router.get('/', getAll); 
router.get('/salehish/:id', getsSingle); 
router.post('/salehish', createsalehish);
router.put('/salehish/:id', updatesalehish); 
router.delete('/salehish/:id', deletesalehish); 

module.exports = router; 