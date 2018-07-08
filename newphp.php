<?php
include 'oci_functions.php';
//echo '<script> alert(" am fost invocat") </script>'; 
     if (isset($_POST['Map'])) {
          RankIt($_POST['Map'],$_POST['Player'],$_POST['Page']);
      } 
if(isset($_POST['PlayerLv']))
{

    GetExp($_POST['PlayerLv'],$_POST['MonsterLv'],$_POST['MapLv'],$_POST['Penality']);
}
if(isset($_POST['Cookie']))
{

    $cookie_name='cookie_login';
        if(isset($_COOKIE[$cookie_name]))
             {  
                $id = $_COOKIE[$cookie_name];
                setcookie($cookie_name,$id,1);
                setcookie($cookie_name,$id,time()+600);
                    $name=GetUsername($id);
                    echo 'Welcome  '.$name; 
        }
        else echo "false";
        
}
if(isset($_POST['FBname']))
{
    echo '<script>alert("Am ajuns in back")</script>'; $response=Register($_POST['FBname'],$_POST['FBpassword'],$_POST['FBemail']);
    if($response== -1)
    {
        echo '<script>console.log("Te-am logat direct")</script>'; 
        $response=Login($_POST['FBname'],$_POST['FBpassword']);
    }
     $cookie_name='cookie_login';
     setcookie($cookie_name,$response,time()+600);
    header("Location: index.php"); 
    return "of";
}
if(isset($_POST['dialogId']))
{
    $array = array();
    array_push($array,"banana","cacana");
    $dialogs = getMonsterDialog($_POST['dialogId']);
    $messages=$dialogs[0];
    //echo $messages[1];
    //$messages=$array;
    echo json_encode($dialogs);
}
?>