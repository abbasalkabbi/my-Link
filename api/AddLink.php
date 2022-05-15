<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $name=$_POST['name'];
    $url=$_POST['url'];
    $id_user=$_POST['id_user'];
    add_link($name,$url,$id_user,$conn);
    
}
?>