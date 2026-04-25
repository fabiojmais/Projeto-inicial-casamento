<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

// Validação básica
if (
    !isset($data['nome']) ||
    !isset($data['valor']) ||
    !isset($data['presente'])
) {
    echo json_encode(["erro" => "Dados incompletos"]);
    exit;
}

$nome = trim($data['nome']);
$valor = floatval($data['valor']);
$presente = trim($data['presente']);

try {
    $collection->insertOne([
        "nome" => $nome,
        "valor" => $valor,
        "presente" => $presente,
        "data" => date("Y-m-d H:i:s")
    ]);

    echo json_encode(["status" => "ok"]);

} catch (Exception $e) {
    echo json_encode([
        "erro" => "Erro ao salvar",
        "mensagem" => $e->getMessage()
    ]);
}