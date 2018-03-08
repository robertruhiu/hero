var mongoose = require('mongoose');
var nightSchema = mongoose.Schema;

var night = new nightSchema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: String, required: true}
});


module.exports = mongoose.model('Night', night);