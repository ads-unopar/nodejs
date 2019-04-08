var fs = require('fs');

fs.readFile('novo.txt', 'utf8', function(err,data){
    if(err) {
        console.error("Arquivo nao encontrado: %s", err);
        process.exit(1);
    }
	
	console.log(data);
});