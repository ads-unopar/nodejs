var fs = require('fs');

fs.writeFile("novo3.txt", "Hello, txt!", function(erro) {

    if(erro) {
        throw erro;
    }

    console.log("Arquivo salvo");
}); 
