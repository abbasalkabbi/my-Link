<?php
require 'config.php';


if($_GET){
         $id=$_GET['id'];
         // get all links
         $get_links= get_links($id,$conn);
         echo $get_links;
         //End get all links
}
?>