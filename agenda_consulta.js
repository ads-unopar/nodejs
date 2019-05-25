var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var syncmysql = require('sync-mysql');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
	host: 'valesapucai.com.br',
	user: 'valesapucai',
	password: 'sapucai19',
	database: 'valesapu_univas'
});

con.connect(function (erro){
	if (erro) throw erro;
	console.log('Conectado ao banco de dados');
});

var conSync = new syncmysql({
	host: 'valesapucai.com.br',
	user: 'valesapucai',
	password: 'sapucai19',
	database: 'valesapu_univas'
});

var html = "<html><body>";

app.get('/', function(req, res){
	
	html += "<form action='inserir' method='post'><br>";
	html += "<h1>Controle da Agenda de Clientes</h1>";
	html += "Nome: <input type='text' name='nome'><br>";
	html += "Tel.: <input type='text' name='telefone'><br>";
	html += "<input type='submit' value='Inserir'>";
	html += "<hr>";
	html += "<table border=1>";
	html += "<tr><td>NOME</td><td>TELEFONE</td></tr>";

	var sql = "SELECT nome, telefone FROM agenda";
	var linhas = conSync.query(sql);
	for(var i = 0; i < linhas.length; i++){
		html += "<tr>";
		html += "<td>"+ linhas[i].nome + "</td>";
		html += "<td>"+ linhas[i].telefone + "</td>";
		html += "</tr>";
	};

	html += "</table>";
	res.send(html);
});

app.post('/inserir', function(req, res){
	var nome = req.body.nome;
	var telefone = req.body.telefone;
	var sql = "INSERT INTO AGENDA (nome, telefone) " +
	          "VALUES ('" + nome + "', '" + telefone + "')";

	con.query(sql, function(erro){
		if (erro) throw erro;
		console.log("Dados inseridos na agenda");
	});
	res.redirect('/');

});

console.log(html);

app.listen(3000, function(){
	console.log('Servidor pronto');
});

