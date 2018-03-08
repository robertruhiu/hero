var mongoose = require('mongoose');
var adventureSchema = mongoose.Schema;

var adventure = new adventureSchema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    operatorname:{type: String, required: true},
    operatorurl:{type: String, required: true},
    price: {type: String, required: true}
});


module.exports = mongoose.model('Adventure', adventure);