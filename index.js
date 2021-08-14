import 'nunjucks';
import 'app.js';
import { nunjucks } from './nunjucks';



// not working because the simple API i.e. nunjucks.render is not recommended


var res=nunjucks.render('index.html');

var res=nunjucks.render('index.html', { username: 'James'});

nunjucks.render('async.html', function(err, res) { });


// Importing the environment 

