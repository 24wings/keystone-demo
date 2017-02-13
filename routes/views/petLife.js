var keystone = require('keystone');
var PetLife = keystone.list('PetLife');

exports.Top5 = function(req, res) {

    PetLife.model.find().limit(5).sort('-createdAt').then((result) => {
        res.json(result);
    });


};