var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    user: {type: String, required: true, max: 100},
    room: {type: Number, required: true},
    data: {type: 'Buffer', required: true}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);