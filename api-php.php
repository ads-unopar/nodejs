<?php

header('Content-Type: application/json; charset=utf-8');  

$json = file_get_contents('http://localhost:3000/clientes/9');
$json_str = json_decode($json);
$clientes = $json_str['nodes'];

foreach ( $clientes as $cliente ) 
    { echo $cliente['id']."<br>"; } 

?>