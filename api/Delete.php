<?php
require 'config.php';

if($_GET){
    $id=$_GET['id'];
    delete_link($id,$conn);
}
?>