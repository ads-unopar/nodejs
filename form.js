var express = require('express');
var bodyparser = require('body-parser');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "valesapucai.com.br",  
  user: "valesapucai",
  password: "sapucai19",
  database: "valesapu_univas"
});

con.connect(function(erro) {
  if (erro) throw erro;
  console.log("Conectado!");
});

var app = express();

app.use(bodyparser.urlencoded({extend: true}));

app.get('/', function(req, res){
	var html = "<html><body><h1>Cadastro</h1>";
	html += "<form action='inserir' method='post'>";
	html += "NOME:<br><input type='text' name='nome'><br>";
	html += "TEL:<br><input type='text' name='telefone'>";
	html += "<br><input type='submit' value='Salvar'>";
	html += "</form></body></html>";

	res.send(html);
});

app.post('/inserir', function(req, res){
	var nome = req.body.nome;
	var tel = req.body.telefone;
	res.send(nome + '<br>' + tel);
	var comandos="INSERT INTO agenda (nome, telefone) VALUES ('" + nome + "','" + tel + "')";

	con.query(comandos, function (erro, resultado) {
	    if (erro) throw erro;
	    console.log('Dados inseridos');
	});

	res.reddirect('/');
});

app.listen(3000, function(){
	console.log('Servidor pronto para uso');
});

