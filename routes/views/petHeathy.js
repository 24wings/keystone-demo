var keystone = require('keystone');
var PetHeathy = keystone.list('PetHeathy');


exports.Top3 = function(req, res) {
    PetHeathy.model.find().limit(3).exec((err, result) => {
        res.json(result);
    });

};