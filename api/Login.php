<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $email=$_POST['email'];
    $password=$_POST['password'];
    login($email,$password,$conn);
}
?>