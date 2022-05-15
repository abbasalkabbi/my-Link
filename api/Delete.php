<?php
require 'config.php';

if($_GET){
    $id=$_GET['id'];
    $id_user=$_GET['id_user'];
    delete_link($id,$id_user,$conn);
}
?>