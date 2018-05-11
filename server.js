var express = require("express");
var app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request, response){

    response.render('cars');
})

app.get('/cats', function(request, response){

    response.render('cats');
})

app.get('/cars/new', function(req, res){

    res.render('newcar');
})

app.get('/puppy', function(req, res){
    var cat = {
        name: 'zeus',
        color: 'tan'
    }
    var my_arr = [
        {nick_name: "quack", email: "mrcat@professionalcats.com"},
        {nick_name: "daft", email: "mrkat@professionalcats.com"},
        {nick_name: "fortune", email: "mrlat@professionalcats.com"},
        {nick_name: "thor", email: "mrmat@professionalcats.com"},        
    ];
    res.render('details', {whatever: my_arr, cat});
})

app.get('/meow', function(request, response){
    var cat = {
        name: 'adorabubbles',
        color: 'orange'
    }
    var my_arr = [
        {nick_name: "quack", email: "mrcat@professionalcats.com"},
        {nick_name: "daft", email: "mrkat@professionalcats.com"},
        {nick_name: "fortune", email: "mrlat@professionalcats.com"},
        {nick_name: "thor", email: "mrmat@professionalcats.com"},        
    ];
    response.render('details', {cat, whatever: my_arr});
})

app.get('/siamese', function(request, response){
    var cat = {
        name: 'Imotep',
        color: 'white'
    }
    var my_arr = [
        {nick_name: "quack", email: "mrcat@professionalcats.com"},
        {nick_name: "daft", email: "mrkat@professionalcats.com"},
        {nick_name: "fortune", email: "mrlat@professionalcats.com"},
        {nick_name: "thor", email: "mrmat@professionalcats.com"},        
    ];
    response.render('details', {cat, whatever: my_arr});
})


app.listen(8000, function(){
    console.log("Listening on port 8000");
})