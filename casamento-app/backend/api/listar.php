<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require 'db.php';

$result = $collection->find();

$dados = [];

foreach ($result as $doc) {
    $dados[] = $doc;
}

echo json_encode($dados);
?>