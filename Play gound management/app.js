var express = require('express');
var app = express();
const session = require('express-session');
var path = require('path');
var db=require('./dbConfig');
 

 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(session({
	secret: 'yoursecret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', function(req, res, next) {
	res.render('home', { title: 'Home' });
});

app.post('/', function(req, res, next) {
	var search = req.body.search;
	console.log(search);
	//db.query(`SELECT * FROM incidents WHERE beach="${search}"`, function (err, result) {
	db.query(`SELECT * FROM incidents WHERE MATCH description AGAINST ("${search}" WITH QUERY EXPANSION);`, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('getIncidents', { title: 'xyz', incidentData: result});
	});
});

app.get('/videos', function(req, res, next) {
	res.render('videos', { title: 'Videos' });
});

app.get('/addIncidents', function(req, res, next) {
	res.render('addIncidents', { title: 'Home' });
});
 
app.get('/getIncidents', function(req, res){
	db.query("SELECT * FROM incidents", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('getIncidents', { title: 'xyz', incidentData: result});
	});
});
 
app.get('/deaths', function(req, res){
	db.query("SELECT * FROM deaths", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('deaths', { title: 'xyp', deathData: result});
	});
});

app.get('/graph', function(req, res){
	db.query("SELECT * FROM deaths", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('graph', { title: 'graph', graphData: result});
	});
});

app.post('/addIncidents', function(req, res, next) {
	var beach = req.body.beach;
	var city = req.body.city;
	var email = req.body.email;
	var detail = req.body.detail;
	var sql = `INSERT INTO incidents (beach, city, email, detail, reported_at) VALUES ("${beach}", "${city}", "${email}", "${detail}", NOW())`;
	db.query(sql, function(err, result) {
		if (err) throw err;
		console.log('record inserted');
		res.render('addIncidents');
	});
});




// -------------------------------start

//----------------------------------------Recommend music
app.get('/recommend', function(req, res, next) {
	res.render('recommend', { title: 'Recommend' });
  });
  
  app.post('/auth', function(req, res) {
	  let username = req.body.username;
	  let password1 = req.body.password1;
	  if (username && password1) {
		  db.query('SELECT * FROM user WHERE username = ? AND password = ?', 
		  [username, password1], function(error, results, fields) {
			  if (error) throw error;
			  if (results.length > 0) {
				  req.session.loggedin = true;
				  req.session.username = username;
				  res.render('restrictedPage');
				             
			  } else {
				  res.send('Incorrect Username and/or Password!');
			  }			
			  res.end();
		  });
	  } else {
		  res.send('Please enter Username and Password!');
		  res.end();
	  }
  });
  
  
  
  //----------------------------------------Restricted Page
  app.get('/restrictedPage', function(req, res) {
	  console.log(req.session.loggedin);
	  if (req.session.loggedin) {
		  db.query(`SELECT * FROM recommend`, function (err, result) {
			  if (err) throw err;
			  console.log(result);
			  res.render('restrictedPage', { title: 'Restricted Page', recommendData: result});
	  });
	  }
	  else {
		  res.render('login');
	  }
  });
  
  //----------------------------------------Register
  app.get('/register', function(req,res,next){
	  res.render('register',{title: 'Register'});
  });
  
  app.post('/register', function(req, res) {
	  let username = req.body.username;
	  let password1 = req.body.password1;
	  let password2 = req.body.password2;
	  console.log(password1);
	  console.log(password2);
	  if (password1 == password2) {
		  var sql = `INSERT INTO user (username, password) VALUES ("${username}", "${password1}")`;
		  db.query(sql, function(err, result) {
			  if (err) throw err;
			  console.log('record inserted');
			  res.render('login');
		  })
	  }
	  else {
		  console.log("Error");
	  }
	});
  
  app.get('/login', function(req,res){
	  res.render('login',{title: 'Log in'});
  });
  
  app.get('/logout',(req,res) => {
	  req.session.destroy();
	  res.redirect('/');
  });

// -------------------------------end



app.listen(3000);
console.log('Node app is running on port 3000');
