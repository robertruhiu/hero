var mongoose = require('mongoose');
var relaxationSchema = mongoose.Schema;

var relaxation = new relaxationSchema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: String, required: true}
});


module.exports = mongoose.model('Relaxation', relaxation);