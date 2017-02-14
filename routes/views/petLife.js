var keystone = require('keystone');
var PetLife = keystone.list('PetLife');

exports.Top5 = function(req, res) {

    PetLife.model.find().populate('tags').exec((err, result) => {

        res.json(result);
    });


};