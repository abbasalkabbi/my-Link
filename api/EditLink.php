<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $id=$_POST['id'];
    $name=$_POST['name'];
    $url=$_POST['url'];
    // $id_user=$_POST['id_user'];
    if(!empty($name) && !empty($url)){
        edit_link($id,$name,$url,$conn);
    }else{
        echo json_encode(['status'=>false,"message" => "Input is Empty"]);
    }
    
    
}