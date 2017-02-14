var keystone = require('keystone');
var PetInformation = keystone.list('PetInformation');


exports.Top3 = function(req, res) {
    PetInformation.model.find().limit(3).sort('-createdAt').then(
        result => res.json(result)

    );

};