var Relaxation = require('../app/models/relaxation');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var products = [
    new Relaxation({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/b8/73/fe/b873fe291d9203330f9764e1116dafdb.jpg',
        title: 'Bojo beach',
        price: 10
    }),
    new Relaxation({
        imagePath: 'https://media.timeout.com/images/103116002/380/285/image.jpg',
        title: 'Royal senchi',
        price: 40
    }),
    new Relaxation({
        imagePath: 'http://pernille-kennet.dk/images/Ghana%202011/elmina%20bay%20resort.jpg',
        title: 'Elmina Bay Resort',
        price: 20
    }),
    new Relaxation({
        imagePath: 'https://media.timeout.com/images/102874404/750/422/image.jpg',
        title: 'Aqua safari resort',
        price: 30
    }),
    new Relaxation({
        imagePath: 'https://media.timeout.com/images/102949519/380/285/image.jpg',
        title: 'Zaina lodge',
        price: 30
    }),
    new Relaxation({
        imagePath: 'https://lh5.googleusercontent.com/p/AF1QipMZkW2YDmI9aIBEcKl7u0I9u3IhFWXMol3ZswgS=w314-h168-p-k-no',
        title: 'Ramada Resort',
        price: 30
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();

}

