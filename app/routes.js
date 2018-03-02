var User = require('./models/user');
var Product = require('../app/models/products');
var Cart = require('../app/models/cart');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		Product.find({},function (err,prds) {
			res.render('index.ejs',{product:prds});

        });


	});

	app.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/home',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.get('/home', isLoggedIn, function(req, res){
		res.render('home.ejs', { user: req.user });
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
			console.log(req.session.cart);
			quantity=req.session.cart.totalQty;
			console.log(quantity);
			return res.redirect('/')
        });


    });

	app.get('/profile', isLoggedIn, function(req, res){
		Product.find({},function (err,prds) {
			res.render('profile.ejs',{product:prds});

        });

	});

	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback', passport.authenticate('facebook',
		{ successRedirect: '/home',failureRedirect: '/' }));


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