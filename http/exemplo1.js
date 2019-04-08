var http = require('http');
 var server = http.createServer(function(request, response){
   response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8;"});
   response.write("<html><body><h1>Olá Node.js!</h1><input id='pergunta1'></body></html>");
   var nome = document.querySelector('#pergunta1'+id);
   response.write(nome);
   response.end();
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP');
 });
