<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require 'db.php';

try {
    $result = $collection->find([], [
        'sort' => ['data' => -1]
    ]);

    $dados = [];

    foreach ($result as $doc) {
        $dados[] = [
            "nome" => $doc['nome'],
            "valor" => $doc['valor'],
            "presente" => $doc['presente'],
            "data" => $doc['data']
        ];
    }

    echo json_encode($dados);

} catch (Exception $e) {
    echo json_encode([
        "erro" => "Erro ao listar",
        "mensagem" => $e->getMessage()
    ]);
}