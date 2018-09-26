var express= require('express')
var app =express(); // Getting up express
// we can respond to http request using express
//app.get('route',fn)
//app.post('route',fn)
//app.put('route',fn)
//app.delete('route',fn)
//app.listen(port number ) to a fix port
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());
app.set('view engine','ejs')
 var  object ={
     Name : 'yogesh',
     Age: '19',
     hobby:'cricket'
 }

 app.use(express.static(__dirname + '/public')); // this directory is to load html 
app.get('/',(req,res)=>{
    console.log(req.query.name)
    res.sendFile(__dirname+'/index.html')
 
}) 
app.get('/:id',(req,res)=>{
    app.use( express.static('views'))
res.render(req.params.id,{per:req.query.name,username:req.query.username,age:req.query.age}) 
})
app.post('/contact',(req,res)=>{
    //app.use( express.static('views'))
    var  a =(req.body)
    console.log(a)
    console.log(a.message)
res.render('contact') 
})
app.listen(3000)