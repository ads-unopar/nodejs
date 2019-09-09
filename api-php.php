<?php

header('Content-Type: application/json; charset=utf-8');  

$url_retorno = file_get_contents('http://localhost:3000/clientes/9');
// Atribui o conteúdo do arquivo para variável $arquivo

// Decodifica o formato JSON e retorna um Objeto
$json = json_decode($url_retorno);
 
// Loop para percorrer o Objeto
foreach($json->clientes as $registro){
    echo 'ID: ' . $registro->id . ' - Nome: ' . $registro->nome . '<br>';
}

?>
