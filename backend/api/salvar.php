<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$nome = $data['nome'];
$valor = $data['valor'];
$presente = $data['presente'];

$result = $collection->insertOne([
    'nome' => $nome,
    'valor' => $valor,
    'presente' => $presente,
    'data' => date("Y-m-d H:i:s")
]);

echo json_encode(["status" => "ok"]);
?>