const express = require('express');
const router = express.Router();
const {
  createsalehish,
  updatesalehish,
  getAll,
  getsSingle,
  deletesalehish,
  getAllContacts,
  getContactbyId
} = require('../controllers/salehish');


router.get('/', getAll); 
router.get('/:id', getsSingle);
router.post('/', createsalehish); 
router.put('/:id', updatesalehish); 
router.delete('/:id', deletesalehish); 

router.get('/contacts', getAllContacts); 
router.get('/contacts/:id', getContactbyId); 

module.exports = router;
