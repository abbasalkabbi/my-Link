<?php
$host='localhost';
$username='root';
$pass='';
$db='links';
$conn= mysqli_connect($host,$username,$pass,$db);
if(!$conn){
    echo "Error". mysqli_connect_error();
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
                        $username= $obj -> username; //hendle Unique_id
                    }
                    $_SESSION['id']=$id;
                    if($_SESSION['id']){
                        echo json_encode(['status'=>true,"message" => "successful","id"=>$_SESSION['id'],'username'=>$username]);
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
// End
// get_user_id
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
   if($data_links){

       return json_encode($data_links);
   }else{
       return json_encode(['status'=>false,"message" => "No Links"]);
   }
}
//Delete links
function delete_link ($id,$db){
    $delete=mysqli_query($db,"DELETE FROM link WHERE id= $id ");
    if($delete){
        echo json_encode(['status'=>true,"message" => "Delete"]);
    }else{
        echo json_encode(['status'=>false,"message" => "Someting Wrong"]);
    }
}
// add link
function add_link($name,$url,$id_user,$db){
 $add=mysqli_query($db,"INSERT INTO link (name,url,id_user) VALUES('$name','$url',$id_user)");
 if($add){
    echo json_encode(['status'=>true,"message" => "Added"]);
 }else{
    echo json_encode(['status'=>false,"message" => "Not Added"]);
 }
}
function edit_link($id,$name,$url,$db){
    $update_link=mysqli_query($db,"UPDATE link   SET name='$name',url='$url' WHERE id=$id");
    if($update_link){
        echo json_encode(['status'=>true,"message" => "UPDATE"]);
    }else{
        echo json_encode(['status'=>false,"message" => "Not UPDATE"]);
    }
}
function get_link($id,$db){
// get all links
$link=mysqli_query($db,"SELECT * FROM link WHERE id=$id");
$data_link= mysqli_fetch_all($link,MYSQLI_ASSOC);
if($data_link){
    return json_encode($data_link);
}else{
    return json_encode(['status'=>false,"message" => "No Links"]);
}
}
?>