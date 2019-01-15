var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SciMongoSchema = new Schema({
    user: {type: String, required: true, max: 100},
    room: {type: Number, required: true, max: 10000},
    data: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('SciMongo', SciMongoSchema);