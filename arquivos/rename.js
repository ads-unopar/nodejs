const fs = require('fs');

fs.rename('teste.txt', 'novo.txt', (err) => {
  if (err) throw err;
  console.log('nome de arquivo alterado');
});