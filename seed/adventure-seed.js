var Adventure = require('../app/models/adventure');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

var products = [
    new Adventure({
        imagePath: 'https://sites.google.com/a/mtholyoke.edu/tourist-attractions-in-ghana/_/rsrc/1468859417434/water-falls/k%20falls.JPG',
        title: 'Ghana togo benin tour',
        operatorname:'afia tours',
        operatorurl:'https://www.afiatours-ghana.com/',
        price: 2000
    }),
    new Adventure({
        imagePath: 'https://rotativo.com.mx/assets//2016/09/elefante.jpg',
        title: 'wildlife venture',
        operatorname:'easytrack',
        operatorurl:'https://www.easytrackghana.com/index.php',
        price: 600
    }),
    new Adventure({
        imagePath: 'http://scorpionghana.net/travel/wp-content/gallery/volta/afadjato.jpg',
        title: 'afadjato',
        operatorname:'ashanti african tours',
        operatorurl:'http://ashantiafricantours.com/',
        price: 500
    }),
    new Adventure({
        imagePath: 'http://www.ghanalive.tv/wp-content/uploads/2017/07/akosombo.jpg',
        title: 'Volta Tour',
        operatorname:'landtoursghana',
        operatorurl:'http://landtours.com/',
        price: 600
    }),
    new Adventure({
        imagePath: 'https://media.timeout.com/images/100714763/image.jpg',
        title: 'Wildlife/nature tour',
        operatorname:'sunseekerstour',
        operatorurl:'http://www.sunseekerstours.com/',
        price: 800
    }),
    new Adventure({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Patas_Monkey_in_Mole_National_Park%2C_Northern_Region%2C_Ghana%2C_2011.JPG/800px-Patas_Monkey_in_Mole_National_Park%2C_Northern_Region%2C_Ghana%2C_2011.JPG',
        title: 'Mole safaris',
        operatorname:'afia tours',
        operatorurl:'https://www.afiatours-ghana.com/',
        price: 200
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

