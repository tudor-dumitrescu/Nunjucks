const express=require("express"); // this or the "import" syntax
var nunjucks=require('nunjucks');

var app = express();
app.use(express.static('/public'));

/*app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
*/
// Setup. Apply nunjucks and add customer filters/fuctions and variables

var env=nunjucks.configure(['views/'], { // "env" for environment; it is our environment object
    autoescape: true, // default; quoting out text
    express: app, /* enable express syntax & framework and allocate it an app, 
                     having Nunjucks as the rendering engine for the framework */
    watch: true // reload template after server change; installed "chokidar" package
});

env.addFilter('myFilter', function(obj, arg1, arg2) { // define your Filter aka function
    console.log('myFilter:', obj, arg1, arg2);
    console.log("BANANAS");

    return obj;
});

env.addGlobal('myFunc', function(obj, arg1) {
    console.log('myFunc:', obj, arg1);
    return obj;
});

env.addFilter('myFirstFunction', function(){
    console.log("WATERMELON");
    return;
})


env.addFilter("rowSpan", ), function rowSpan(arrayObject,k){ // k is for the total number of columns
    Object.keys(arrayObject).forEach(function (key){
            cricket=arrayObject[key];
       
        cricketLength=cricket.length;
    
        if(cricket.length>=2){
    
            cricket[0].push(cricketLength);
          rowSpanNumber=cricketLength;
          for(var j=1; j<cricket.length; j++){
              cricket[j].splice(0,1);
            
          }
    
          
          
          for(flat of cricket){
              console.log("Line: " + flat);
              if(flat==cricket[0]){
                for(var property=0; property<k; property++){ // number of columns
                      if(property==0){
                          line=`<td rowspan=${rowSpanNumber}>${flat[property]}</td>`;
                  console.log("Column: " + line);
                        }
                    else {
                        line=`<td>${flat[property]}</td>`;
                  console.log("Column: " + line);
                     }
                    }
              
               } 
            else {
                   for(var property=0; property<k-1; property++){ // number of columns
                      line=`<td>${flat[property]}</td>`;
                console.log("Column: " + line);
              }
           }
    
          }
         }
        }
       )  
      return;
    };


// Rendering

app.get('/', function(req, res) { // async callback?
    res.render('index.html', {title: 'Index page'});
});

app.get('/foo', function(req, res) {
    res.locals.variable1="CHAKA KHAN";
    res.render('foo.html', {title: 'Foo page in app.js'});
});

app.get('/plain', function(req, res){
    res.locals.items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];
    res.render('firstfile.njk', {title:"'.NJK' extension"});
    
});

app.get('/secondfile', function(req, res){
    res.render('secondfile.njk');
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

const template=nunjucks.precompile('views/', {name: 'template'});