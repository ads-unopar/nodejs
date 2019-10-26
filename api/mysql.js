var mysql = require('mysql');

var con = mysql.createConnection({
  host: "valesapucai.com.br",  
  user: "valesapucai",
  password: "sapucai19",
  database: "valesapu_univas"
});

var comandos = [];

comandos={"INSERT INTO cristiano (nome, telefone) VALUES ('maria','3629')","dados inseridos"};
//comandos={"update cristiano set telefone='3622' where nome='maria'","dados atualizados"};
//comandos={"delete from cristiano where nome='maria'","dados removidos"};

con.connect(function(erro) {
  if (erro) throw erro;
  console.log("Conectado!");
});

con.query(comandos[0], function (erro, resultado) {
    if (erro) throw erro;
    console.log(comandos[1]);
});

con.query(sql, function (erro, resultado) {
    if (erro) throw erro;
    console.log("dados alterados");
});


con.query(sql, function (erro, resultado) {
    if (erro) throw erro;
    console.log("dados removidos");
});

con.end(function(erro) {
  if (erro) throw erro;
  console.log("Desconectado!");
});