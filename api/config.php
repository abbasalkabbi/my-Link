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
// login
function login($email,$password,$conn){
    if(!empty($email) && !empty($password)){
        // if input not empty
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
            //if is email
               //search is email is already login
               $email_check=mysqli_query($conn,"SELECT * FROM users WHERE email = '{$email}'");
               if(mysqli_num_rows($email_check) >0){
                   //if email is curretc
                   $login=mysqli_query($conn,"SELECT * FROM users WHERE email ='{$email}' AND password = '{$password}'");
                   if(mysqli_num_rows($login)){
                       // if loggin
                    while($obj = mysqli_fetch_object($login)){
                        $id= $obj -> id; //hendle Unique_id
                    }
                    $_SESSION['id']=$id;
                    if($_SESSION['id']){
                        echo json_encode(['status'=>true,"message" => "successful","id"=>$_SESSION['id']]);
                    }
                 //End get seesion
                   }else{
                       // if password wrong
                       echo json_encode(['status'=>false,"message" => "Password is not wrong"]);
                   }

               }else{
                  //if email is wrong
                  echo json_encode(['status'=>false,"message" => "($email) is not login"]);
               }
        }else{
            // if is not eamil
            echo json_encode(['status'=>false,"message" => "($email) is not validate"]);
        }
    }else{
        // if input is empty
        echo json_encode(["status" => false, "message" => "Input is Empty"]);
    }
}
// end login
// register
function register($name,$username,$email,$password,$conn){
    if(!empty($name) && !empty($username) &&  !empty($email) && !empty($password) ){
        // if input not empty
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
           //if is email
                //search is email is already login
                $email_check=mysqli_query($conn,"SELECT * FROM users WHERE email = '{$email}'");
                if(mysqli_num_rows($email_check) >0){
                        echo json_encode(['status'=>false,"message" => "($email) is  login"]);
                }else{
                     //if email is not loggin
                     // check if user not tokken
                     $username_check=mysqli_query($conn,"SELECT * FROM users WHERE username = '{$username}'");
                     if(mysqli_num_rows($username_check)>0){
                         // if username is tokken
                             echo json_encode(['status'=>false,"message" => "($username) is Tokken"]);
                     }else{
                         // if new username
                         $insert=mysqli_query($conn,"INSERT INTO users (username,name,email,password)VALUES('$username','$name','$email','$password')");
                         if($insert){
                             login($email,$password,$conn);
                         }
                     }
                }
        }else{
             // if is not eamil
             echo json_encode(['status'=>false,"message" => "($email) is not validate"]);
        }
     }else{
         // if input is empty
         echo json_encode(["status" => false, "message" => "Input is Empty"]);
     }
}
// End register
?>