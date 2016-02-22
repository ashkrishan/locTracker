
//All Locations list
module.exports.listLocations = function(req, res) {
    var locationList = {
        name: 'StarDucks',
        rating: '3',
        distance: '100m',
        address: '123 lol street london, Ms4 5FG',
        facilities: ['Hot Drinks', 'Food', 'Premium Wifi']
    };
    var description = 'This is the place to chill and is the side panel so that website could be responsive'
    res.render('alllocations', { title: 'Express ', 
                                description: description , 
                                locationList: locationList });
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
