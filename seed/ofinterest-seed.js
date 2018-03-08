var Ofinterest = require('../app/models/ofinterest');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var products = [
    new Ofinterest({
        imagePath: 'https://media-cdn.urbanadventures.com/data/154/tour_349/c-fakepath-artistic_accra_tour_4455.jpg',
        title: 'Accra cultural walk tour',
        description: 'visiting local craftspeople',
        price: 40
    }),
    new Ofinterest({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/b8/73/fe/b873fe291d9203330f9764e1116dafdb.jpg',
        title: 'Bojo beach',
        description: 'relax on at Bojo beach',
        price: 30
    }),
    new Ofinterest({
        imagePath: 'http://scorpionghana.net/travel/wp-content/gallery/volta/afadjato.jpg',
        title: 'Volta tour',
        description: 'Enjoy the wildlife that volta offers.',
        price: 300
    }),
    new Ofinterest({
        imagePath: 'https://www.easytrackghana.com/images/photos/Castle-guns.jpg',
        title: 'Cape coast',
        description: 'Historical castle',
        price: 50
    }),
    new Ofinterest({
        imagePath: 'https://image.jimcdn.com/app/cms/image/transf/dimension=443x10000:format=jpg/path/sf417ecd4d9680a2d/image/ie310baec3e90578c/version/1499795376/kente-weaving-village.jpg',
        title: 'Mole express safari',
        description: 'Experience ghana culture access to villages',
        price: 200
    }),
    new Ofinterest({
        imagePath: 'https://image.jimcdn.com/app/cms/image/transf/dimension=443x10000:format=jpg/path/sf417ecd4d9680a2d/image/i526928cf03d33d0f/version/1516204532/wli-falls.jpg',
        title: 'Ghana Togo Benin tour',
        description: 'Explore 3 countries beautiful nature',
        price: 2000
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

