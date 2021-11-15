var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')
var platformController = require('../controllers/platformController')
var multimediaController=require('../controllers/multimediaController')
var categoryController=require('../controllers/categoryController')
var personController = require('../controllers/personController')

//Users
router.get('/person', personController.getPersons);
router.post('/person', personController.postPersons);
router.delete('/person', personController.deletePersons);
router.put('/person/:users_ID', personController.putPersons);


//GAME
router.get('/game', gameController.getGame);
router.get('/game/:game_ID', gameController.getGameID);
router.post('/game', gameController.postGame);
router.delete('/game/:game_ID', gameController.deleteGame);
router.put('/game/:game_ID', gameController.putGame);

//PLATFORM
router.get('/platform', platformController.getPlatform);
router.get('/platform/:platform_ID', platformController.getPlatformID);

//MULTIMEDIA
router.get('/game/:game_ID/multimedia', multimediaController.getMultimedia);

//CATEGORY
router.get('/category', categoryController.getCategory);
router.get('/category/:category_ID', categoryController.getCategoryID);

module.exports = router;