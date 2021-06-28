const express=require('express');
const nunjucks=require('nunjucks');

var app = express();
app.use(express.static('/public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// Apply nunjucks and add customer filter and fuction

var env=nunjucks.configure(['views/'], {
    autoescape: true,
    express: app
});

env.addFilter('myFilter', function(obj, arg1, arg2) {
    console.log('myFilter', obj, arg1, arg2);

    return obj;
});

env.addGlobal('myFunc', function(obj, arg1) {
    console.log('myFunc', obj, arg1);
    return obj;
});


app.get('/', function(req, res) {
    res.render('views/index.html', {title: 'Main page'});
});

app.get('/foo', function(req, res) {
    res.locals.variable1="I'll make you an offer you can't refuse";
    res.render('foo.html', {title: 'Foo page in app.js'});
});

app.get('/plain', function(req, res){
    res.render('firstfile.njk');
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
