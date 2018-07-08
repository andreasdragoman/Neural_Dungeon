<?php

include 'oci_functions.php';

Clean();
if($_POST['Submit'] == 'Register')
{
    
   $name_p = $_POST["nameR"];
    $password_p =$_POST["passwordR"];
    $email_p = $_POST["emailR"];
    echo $name_p ." ".$password_p." ".$email_p."<br>"; 
   $id = Register($name_p,$password_p,$email_p);
    header("Location: index.php"); 
exit();
    
    
    //cookie set up
    setcookie($cookie_name,$id,time()+600);

}
else if ($_POST['Submit']=='Login')
{
    $name_p = $_POST["nameL"];
    $password_p =$_POST["passwordL"];
    echo $name_p.' '.$password_p.'<br>';
    $id=Login($name_p,$password_p);
     
        setcookie($cookie_name,$id,time()+600);
    header("Location: index.php"); 
exit();
    //cookie set up
        
}
else if ($_POST['Submit']=='Enter')
{
     $name_p = $_POST["nameLC"];
     $id=LoginAsCookie($name_p);
     
    setcookie($cookie_name,$id,time()+6);
    header("Location: index.php");
exit();
   // echo "cacat";
    //echo '<script> StartGame(); </script>';
    
}
else if ($_POST['Submit']=='Order')
{
    $map = $_POST["MapLevel"];
    $player = $_POST["PlayerLevel"];
    RankIt($map,$player);
}

// Close connection 
oci_close($connection);


?>