var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController')

/* GET users listing. */
router.get('/', personController.getPersons);

router.post('/', personController.postPersons);

router.delete('/', personController.deletePersons);

router.get('/:id', personController.getPersons1);

module.exports = router;