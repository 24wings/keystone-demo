var keystone = require('keystone'),
    PetAction = keystone.list('PetAction');



exports.Top3 = function(req, res) {
    PetAction.model.find().limit(3).exec(function(err, result) {
        res.json(result);
    });
};