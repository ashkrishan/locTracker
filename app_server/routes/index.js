var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');



//URL or route request
router.get('/', ctrlMain.index);
router.get('/locations', ctrlLocations.listLocations);   //locations list
router.get('/locations/location', ctrlLocations.showLocation); //location destails
router.get('/locations/location/review/new', ctrlLocations.newLocationReview); //location destails

router.get('/about',  ctrlOthers.showAbout);


module.exports = router;
