const fs = require('fs');

fs.unlink('teste.txt', (err) => {
  if (err) throw err;
  console.log('arquivo removido com sucesso');
});