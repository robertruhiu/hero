var mongoose = require('mongoose');
var productSchema = mongoose.Schema;

var product = new productSchema({
    imagePath:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true}
});



module.exports = mongoose.model('Product', product);