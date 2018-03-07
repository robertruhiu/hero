var Product = require('../app/models/products');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var products = [
    new Product({
        imagePath: 'https://media-cdn.urbanadventures.com/data/154/tour_349/c-fakepath-artistic_accra_tour_4455.jpg',
        title: 'Accra cultural walk tour',
        description: '3-hour tour of Accra, visiting local craftspeople and discovering the creative ways they make a living',
        price: 196
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/b8/73/fe/b873fe291d9203330f9764e1116dafdb.jpg',
        title: 'Bojo beach',
        description: 'Bojo beach is located at the delta of the Densu River and the Atlantic Ocean next to a fishing village',
        price: 30
    }),
    new Product({
        imagePath: 'http://scorpionghana.net/travel/wp-content/gallery/volta/afadjato.jpg',
        title: 'Volta tour',
        description: 'Be picked up in an air-conditioned vehicle from your hotel in Accra. Visit Shai Hills early in the morning to spend some time watching the local wildlife, like kobs and baboon troops.',
        price: 365
    }),
    new Product({
        imagePath: 'https://www.easytrackghana.com/images/photos/Castle-guns.jpg',
        title: 'Cape coast',
        description: 'Cape Coast Castle is one of about forty "slave castles", or large commercial forts, built on the Gold Coast of West Africa (now Ghana) by European traders',
        price: 100
    }),
    new Product({
        imagePath: 'https://image.jimcdn.com/app/cms/image/transf/dimension=443x10000:format=jpg/path/sf417ecd4d9680a2d/image/ie310baec3e90578c/version/1499795376/kente-weaving-village.jpg',
        title: 'Mole express safari',
        description: 'Experience ghana culture access to villages',
        price: 500
    }),
    new Product({
        imagePath: 'https://image.jimcdn.com/app/cms/image/transf/dimension=443x10000:format=jpg/path/sf417ecd4d9680a2d/image/i526928cf03d33d0f/version/1516204532/wli-falls.jpg',
        title: 'Ghana Togo Benin tour',
        description: 'Explore 3 countries beautiful nature',
        price: 4000
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

