var Order = require('../app/models/orders');
var mongoose = require('mongoose');
var Cart = require('../app/models/cart');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);
var orders = [
    new Order({
        title:'bojo beach',
        quantity:'1',
        totalprice:'300',
        address:'20 legon',
        username:'robertruhiu@gmail.com'
    })
];

var done = 0;
for (var i = 0; i < orders.length; i++) {
    orders[i].save(function (err, result) {
        done++;
        if (done === orders.length) {
            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();

}

