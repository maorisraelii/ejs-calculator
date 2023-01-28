const  express= require("express");
const bodyParser=require("body-parser");
const app= express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/",function(req,res){
    res.render('home');
});

app.get("/add",function(req,res){
    res.render('add');
});

app.post("/add",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1+num2;
    res.render('result', {text: result});
});

app.get("/subtract",function(req,res){
    res.render('subtract');
});

app.post("/subtract",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1-num2;
    res.render('result', {text: result});
});

app.get("/multi",function(req,res){
    res.render('multi');
});

app.post("/multi",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1*num2;
    res.render('result', {text: result});
});

app.get("/div",function(req,res){
    res.render('div');
});

app.post("/div",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1/num2;
    res.render('result', {text: result});
});

app.listen(3000,function(){
console.log("Server started on port 3000");
});