var mongoose = require('mongoose');
var ofinterestSchema = mongoose.Schema;

var ofinterest = new ofinterestSchema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true}
});


module.exports = mongoose.model('Ofinterest', ofinterest);