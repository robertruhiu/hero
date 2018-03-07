var mongoose = require('mongoose');
var orderSchema = mongoose.Schema;

var order = new orderSchema({
    title:{type:String,required:true},
    quantity:{type:String,required:true},
    totalprice:{type:String,required:true},
    address:{type:String,required:true},
    username:{type:String,required:true}

});

module.exports = mongoose.model('Order', order);