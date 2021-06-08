var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController')

/* GET users listing. */
router.get('/', personController.getPersons);

router.post('/', personController.postPersons);

router.delete('/', personController.deletePersons);

router.get('/:id', personController.getPersons1);

router.put('/:id', personController.putPersons);

module.exports = router;