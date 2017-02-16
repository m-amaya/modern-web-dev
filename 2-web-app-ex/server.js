const express     = require('express');
const exp_hbs     = require('express-handlebars');
const body_parser = require('body-parser');
const logger      = require('morgan');
const path        = require('path');
const port        = 8000;

//* Create .hbs view engine
const hbs = exp_hbs.create({
    extname: '.hbs',
    defaultLayout: 'main'
});

//* Setup express app
const app = express();
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(logger('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

//* Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//* Define routes
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about', { about: true });
});

app.get('/contact', function(req, res) {
    res.render('contact', { contact: true });
});

app.post('/message', function(req, res) {
    res.json(req.body);
});

//* Run server
const server = require('http').createServer(app);
server.listen(port, function() {
    console.log('Magic happens on port', port);
});
