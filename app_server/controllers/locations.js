
//All Locations list
module.exports.listLocations = function(req, res) {
    res.render('alllocations', { title: 'Express '});
};

//Show Locations Details
module.exports.showLocation = function(req, res) {
    res.render('show-location');  
};

//Create new location
module.exports.newLocationReview = function(req, res) {
    res.render('new-location-review');
}; 

//About
