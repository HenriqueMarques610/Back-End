var express=require('express')
var router = express.Router();

var userController=require('../controllers/userController')

router.use(isLoggedIn)

router.get('/',userController.getUser)

router.get('/test',userController.getTest)

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.status(401).send("unauthorized")
}

module.exports=router;