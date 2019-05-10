var express = require('express')
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function(req, res){
   var html = "";
   res.send;
});

app.post('/envia', function(req, res){
   var form = req.body.form;
   var nome = form.nome;
   var valor = form.valor;
   res.redirect('/');
});

app.listen(3000);