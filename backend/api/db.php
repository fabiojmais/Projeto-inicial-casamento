<?php

require __DIR__ . '/../vendor/autoload.php';

try {
    $client = new MongoDB\Client("mongodb://127.0.0.1:27017");

    $db = $client->casamento;
    $collection = $db->presentes;

} catch (Exception $e) {
    echo json_encode([
        "erro" => "Falha na conexão com o banco",
        "mensagem" => $e->getMessage()
    ]);
    exit;
}