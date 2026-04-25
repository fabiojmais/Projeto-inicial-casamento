<?php
header("Content-Type: application/json");

$presentes = [
  ["nome" => "Lua de mel", "valor" => 100],
  ["nome" => "Jantar romântico", "valor" => 150],
  ["nome" => "Mobília", "valor" => 300]
];

echo json_encode($presentes);
?>