const fs = require('fs');

fs.open('novo.txt', 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});

fs.readFile('novo.txt', 'utf-8', function(err, data){
    var linhas = data.split(/\r?\n/);
    linhas.forEach(function(linha){
       console.log(linha); // aqui podes fazer o que precisas com cada linha
    })
})

//Sem Callbacks
const fs = require('fs');
var arquivo = fs.readFileSync('novo.txt', 'utf-8')
var linhas = arquivo.split(/\r?\n/);
console.log(linhas);
