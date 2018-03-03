var User = require('./models/user');
var Product = require('../app/models/products');
var Cart = require('../app/models/cart');

module.exports = function(app, passport){

	app.get('/', function(req, res){
		Product.find({},function (err,docs) {
			var productChunks = [];
			var chunkSize =3;
			for (var i=0;i<docs.length;i+=chunkSize ){
				productChunks.push(docs.slice(i,i+chunkSize));
			}
			res.render('index.hbs',{products:productChunks});
        });
	});

	app.get('/login', function(req, res){
		res.render('login.hbs', { message: req.flash('loginMessage') });
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.get('/signup', function(req, res){
		res.render('signup.hbs');
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.get('/home', isLoggedIn, function(req, res){
		res.render('home.hbs', { user: req.user });
	});

	app.get('/add-to-cart/:id',function (req,res) {
		var productId = req.params.id;
		var cart = new Cart(req.session.cart ? req.session.cart : {});
		Product.findById(productId,function (err,product) {
			if (err){
				return res.redirect('/');
			}
			cart.add(product,product.id);
			req.session.cart=cart;
			console.log(cart);
			res.redirect('/');
        });
    });

	app.get('/profile', isLoggedIn, function(req, res){
		if (!req.session.cart) {
            res.render('profile.hbs',{products:null});
        }
        var cart = new Cart(req.session.cart);
		res.render('profile.hbs',{products:cart.generateArray(),totalPrice:cart.totalPrice});
	});
	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}