<?php
require 'config.php';


if($_GET){
    $username=$_GET['username'];
    //get id  user from username
    $id=get_user_id($username,$conn);
    //End get id  user
    if($id ===false){
     //  if user name wrong
     echo json_encode(['status'=>false,"message" => "No user"]);
    }else{
         // get all links
         $get_links= get_links($id,$conn);
         echo $get_links;
         //End get all links
    }
}
?>