var Urban = require('../app/models/urban');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var products = [
    new Urban({
        imagePath: 'https://accradotalttours.files.wordpress.com/2011/09/santo.png',
        title: 'Accra street art tour',
        price: 50
    }),
    new Urban({
        imagePath: 'https://i.pinimg.com/736x/6e/5a/3a/6e5a3aff603b9ae806ff57e1e9f6f00c--west-african-food-african-recipes.jpg',
        title: 'West african markets and cuisine',
        price: 50
    }),
    new Urban({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/99/0b/b4/990bb459743ad234959c7705a5390df0.jpg',
        title: 'Unearth Accra Walking Tour',
        price: 20
    }),
    new Urban({
        imagePath: 'https://www.easytrackghana.com/images/photos/Castle-guns.jpg',
        title: 'Cape coast',
        price: 50
    }),
    new Urban({
        imagePath: 'https://www.bradtguides.com/media/wysiwyg/destinations/africa/ghana/kente_cloth_kumasi_ghana_wikimedia_adam_jones.jpg',
        title: 'Makola market',
        price: 20
    }),
    new Urban({
        imagePath: 'https://www.touring-afrika.de/wp-content/uploads/2014/04/Gesundheit-in-Ghana-e1409574192520.jpg',
        title: 'Accra Architectural Discovery',
        price: 20
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

