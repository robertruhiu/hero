var User = require('./models/user');
var Ofinterest = require('./models/ofinterest');
var Cart = require('../app/models/cart');
var Night = require('../app/models/night');
var Relaxation = require('../app/models/relaxation');
var Urban = require('../app/models/urban');
var Adventure = require('../app/models/adventure');
var Order =require('../app/models/orders');
var flash = require('connect-flash');

module.exports = function (app, passport) {

    app.get('/', function (req, res) {
        var successMsg = req.flash('success')[0];
        var cartMsg = req.flash('cartadd')[0];
        Ofinterest.find({}, function (err, docs) {
            var productChunks = [];
            var chunkSize = 3;
            for (var i = 0; i < docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('index.hbs', {ofinterest: productChunks,successMsg:successMsg,noMessages: !successMsg,cartMsg:cartMsg,noMessages:!cartMsg});
        });
    });

    app.get('/login', function (req, res) {
        res.render('login.hbs', {message: req.flash('loginMessage')});
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', function (req, res) {
        res.render('signup.hbs');
    });

    app.get('/relaxation', function (req, res) {
        Relaxation.find({}, function (err, docs) {
            var productChunks = [];
            var chunkSize = 3;
            for (var i = 0; i < docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('relaxation.hbs', {relaxation: productChunks});
        });
    });


    app.get('/urban', function (req, res) {
        Urban.find({}, function (err, docs) {
            var productChunks = [];
            var chunkSize = 3;
            for (var i = 0; i < docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('urban.hbs', {urban: productChunks});
        });
    });


    app.get('/adventure', function (req, res) {
        Adventure.find({}, function (err, docs) {
            var productChunks = [];
            var chunkSize = 3;
            for (var i = 0; i < docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('adventure.hbs', {adventure: productChunks});
        });
    });


    app.get('/extreeme', function (req, res) {
        Product.find({}, function (err, docs) {
            var productChunks = [];
            var chunkSize = 3;
            for (var i = 0; i < docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('extreeme.hbs', {products: productChunks});
        });
    });


    app.get('/night', function (req, res) {
        Night.find({}, function (err, docs) {
            var productChunks = [];
            var chunkSize = 3;
            for (var i = 0; i < docs.length; i += chunkSize) {
                productChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('night.hbs', {night: productChunks});
        });
    });


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));



    app.get('/operator-profile',function (req, res) {
        res.render('operator-profile.hbs');
    });

    app.get('/add-to-cart/:id', function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Ofinterest.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            req.flash('cartadd','added to cart');
            console.log(cart);
            res.redirect('/');
        });

    });

    app.get('/adventure/add-to-cart/:id', function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Adventure.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            console.log(cart);
            res.redirect('/adventure');
        });

    });

    app.get('/urban/add-to-cart/:id', function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Urban.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            console.log(cart);
            res.redirect('/urban');
        });

    });

    app.get('/relaxation/add-to-cart/:id', function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Relaxation.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            console.log(cart);
            res.redirect('/relaxation');
        });

    });

    app.get('/night/add-to-cart/:id', function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Night.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            console.log(cart);
            res.redirect('/night');
        });

    });



    app.get('/profile', isLoggedIn, function (req, res) {
        if (!req.session.cart) {
            res.render('profile.hbs', {products: null});
        }
        var cart = new Cart(req.session.cart);
        res.render('profile.hbs', {products: cart.generateArray(), totalPrice: cart.totalPrice});
    });

    app.get('/checkout', isLoggedIn, function (req, res) {
        if (!req.session.cart) {
            res.render('checkout.hbs', {products: null});
        }
        var cart = new Cart(req.session.cart);
        res.render('checkout.hbs', {products: cart.generateArray(), totalPrice: cart.totalPrice});
    });

    app.post('/checkout',isLoggedIn, function (req,res) {
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        var order =new Order({
            cart:cart,
            address:req.body.address,
            username:req.body.username
        });
        order.save(function (err,result) {
            req.flash('success','Successfully bought product');
            req.session.cart=null;
            res.redirect('/')
            
        })


    });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}