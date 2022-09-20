require('./models/db');
 
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

const employeeController = require('./controllers/employeeController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    defaultLayout: 'mainLayout', 
    layoutsDir:__dirname + '/views/layout/' 
}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);