<?php
error_reporting(E_ALL);
$link = mysqli_connect('127.0.0.1','root','','kyrsovai') or die('nein');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data=json_decode(file_get_contents('php://input'), true);

if(!empty($data['name'])&&!empty($data['email'])&&!empty($data['text'])) {
    $name = $data['name'];
    $email = $data['email'];
    $text = $data['text'];

  
    $query="INSERT INTO `form`(`name`, `email`, `texts`) VALUES ('$name','$email','$text')";
    $res= mysqli_query($link, $query) or die(mysqli_error($link));

    if ($res) {
        echo "Data successfully inserted into the database";
    } else {
        echo "Error inserting data into the database";
    }
} else {
    echo "No data received from the request";
}
?>