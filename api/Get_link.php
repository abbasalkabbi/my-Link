<?php
require 'config.php';


if($_GET){
    $id=$_GET['id'];
    $get_link= get_link($id,$conn);
    echo $get_link;
}
?>