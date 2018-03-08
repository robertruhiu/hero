var mongoose = require('mongoose');
var urbanSchema = mongoose.Schema;

var urban = new urbanSchema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: String, required: true}
});


module.exports = mongoose.model('Urban', urban);