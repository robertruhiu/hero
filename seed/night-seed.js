var Night = require('../app/models/night');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var products = [
    new Night({
        imagePath: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/26165172_2093014090917960_3099344499323759136_n.jpg?oh=cd832fa0c9029cd909bbc345be875405&oe=5B0AC6C6',
        title: 'Paparazi lounge',
        price: 40
    }),
    new Night({
        imagePath: 'https://lh5.googleusercontent.com/p/AF1QipPr2cZ3x2jvxv6cYg-_WaEhHqtxXlBERwfUB5KW=w208-h168-p-k-no',
        title: 'Honeysuckle',
        price: 20
    }),
    new Night({
        imagePath: 'https://photos.travelblog.org/Photos/115346/763907/f/7319779-The-lounge-classroom-and-gathering-place-0.jpg',
        title: 'Classroom lounge',
        price: 20
    }),
    new Night({
        imagePath: 'https://lh5.googleusercontent.com/p/AF1QipMFOc0DO7zjpaspZpxirHAoyKzXwkC9D25Fk9-_=w179-h168-p-k-no',
        title: 'Pergola',
        price: 30
    }),
    new Night({
        imagePath: 'https://lh5.googleusercontent.com/p/AF1QipOkCJZ37sxnkh-SWn_nfwmmZxUmkly7qCZ2ojms=w179-h168-p-k-no',
        title: 'Skybar',
        price: 50
    }),
    new Night({
        imagePath: 'https://seekghana.com/wp-content/uploads/2016/09/1789_Sai-wine5.jpg',
        title: 'Sai Wine & Champagne Cafe',
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

