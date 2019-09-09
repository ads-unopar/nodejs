const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host: 'localhost',
  	user: 'root',
  	password: '',
  	database: 'univas'
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('--> executou: ' + sqlQry);
  });
}

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

router.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM clientes', res);
});

router.get('/clientes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM clientes' + filter, res);
});

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
