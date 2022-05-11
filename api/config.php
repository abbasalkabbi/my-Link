<?php
$host='localhost';
$username='root';
$pass='';
$db='links';
$conn= mysqli_connect($host,$username,$pass,$db);
if(!$conn){
    echo "Error". mysqli_connect_error();
}
function get_user_id($user,$db){
    //get id  user from username
    $get_user=mysqli_query($db,"SELECT * FROM users WHERE username='$user'");
    if(mysqli_num_rows($get_user)){
        // if loggin
     while($obj = mysqli_fetch_object($get_user)){
         $id= $obj -> id; //hendle Unique_id
     }
     return $id;
    }else{
        return false;
    }

}
// get links
function get_links($id_user,$db){
     // get all links
    $links=mysqli_query($db,"SELECT * FROM link WHERE id_user=$id_user");
    $data_links= mysqli_fetch_all($links,MYSQLI_ASSOC);
    return json_encode($data_links);
}
?>