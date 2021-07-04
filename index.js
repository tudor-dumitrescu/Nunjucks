import 'nunjucks';
import { nunjucks } from './nunjucks';



// not working


var res=nunjucks.render('index.html');

var res=nunjucks.render('index.html', { username: 'James'});

nunjucks.render('async.html', function(err, res) { });