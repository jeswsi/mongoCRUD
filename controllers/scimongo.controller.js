var SciMongo = require('../models/scimongo.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.scimongo_create = function (req, res, next) {
    var scimongo = new SciMongo(
        {
            user: req.body.user,
            room: req.body.room,
            data: req.body.data
        }
    );

    scimongo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Data inserted successfully!')
    })
};

exports.scimongo_details = function (req, res) {
    SciMongo.findById(req.params.id, function (err, scimongo) {
        if (err) return next(err);
        res.send(scimongo);
    })
};

exports.scimongo_update = function (req, res) {
    SciMongo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, scimongo) {
        if (err) return next(err);
        res.send('SciMongo udpated.');
    });
};

exports.scimongo_delete = function (req, res) {
    SciMongo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};