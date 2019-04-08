 // Carregando o File System
 var fs = require("fs");
 // Lê o conteúdo do diretório retornando um array de string de arquivos.
 // Obs.: Essa leitura é Não-Bloqueante, por isso retorna via callback.
 fs.readdir("home", function(err, files){
   console.log(files);
 });
 
 // A mesma função, executada de forma Bloqueante.
 var files = fs.readdirSync("home");
 console.log(files);

//Lendo o conteudo dos arquivos

 let arquivo = [];//Vetor para armazenar todos os nomes dos arquivos lidos

//Lendo todos os arquivos existenstes na pasta files de forma síncrona
fs.readdirSync('home').forEach(arquivo => {
	//Efetuando a leitura do arquivo
	fs.readFile('home/'+arquivo,'utf8', function(err,data){
		//Enviando para o console o resultado da leitura
		console.log(data);
	});
});