<?php

set_error_handler(function($errno, $errstr, $errfile, $errline, array $errcontext) {
    // error was suppressed with the @-operator
    if (0 === error_reporting()) {
        return false;
    }

    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});
//Oracle DB user name
$username = 'WEBDUNGEN';
// Oracle DB user password
$password = 'WEBDUNGEN';

// Oracle DB connection string

$cookie_name='cookie_login';
$connection_string = 'localhost/xe';

//Connect to an Oracle database
 try {
$GLOBALS['connection'] = oci_connect(
$username,
$password,
$connection_string
);
 }
catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
  <summary>Nu s-a putut - Database error</summary>
  <p>".$e->getMessage()."</p>
</details><br> ";
        die;
    } 
/*If (!$connection)
echo ' connection failed<br>';
else
echo 'connection succesfull<br>';*/




function Register($name_p,$password_p   ,$email_p)
{
    try {
        $stid = oci_parse($GLOBALS['connection'], 'BEGIN :id := p_registration.register( :name_p, :password_p, :email_p); END;  ');
        if (!$stid) {
        print "Nu s-a intamplat ceva?";
        $e = oci_error($GLOBALS['connection']);
        $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
        echo "<script> alarm(\"".$emess."\") </script>";
        die;
        trigger_error("am o eroare :)");
        }
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
  <summary>Nu s-a putut - Database error</summary>
  <p>".$e->getMessage()."</p>
</details><br> ";
        die;
    } 
    
    try
    {
        oci_bind_by_name($stid, ":id" , $id,10);
    oci_bind_by_name($stid , ":name_p",$name_p);
    oci_bind_by_name($stid , ":password_p",$password_p);
    oci_bind_by_name($stid , ":email_p",$email_p);
        
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
  <summary>Nu s-a putut - Database error</summary>
  <p>".$e->getMessage()."</p>
</details><br> ";
        die;
    } 
    

    try
    {
        $r = oci_execute($stid);
            if (!$r) {
        $e = oci_error($stid);
        $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
        echo "<script> alarm(\"".$emess."\") </script>";
        die;
        trigger_error("am o eroare :)");
        }
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
  <summary>Nu s-a putut - Database error</summary>
  <p>".$e->getMessage()."</p>
</details><br> ";
        die;
    } 
    

    oci_free_statement($stid);

    try
    {
        $verify = oci_parse($GLOBALS['connection'], 'Select * from player where id=:id ');
        if (!$verify)
        {
            $e = oci_error($GLOBALS['connection']);
            $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die;
            trigger_error(htmlentities($e['message'],ENT_QUOTES),E_USER_ERROR);
        }
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
          <summary>Nu s-a putut - Database error</summary>
          <p>".$e->getMessage()."</p>
        </details><br> ";
        die;
    } 
    try
    {
      oci_bind_by_name($verify,":id",$id);  
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
          <summary>Nu s-a putut - Database error</summary>
          <p>".$e->getMessage()."</p>
        </details><br> ";
        die;
    } 
    
    try
    {
        $r = oci_execute($verify);
    if(!$r)
    {
        $e=oci_error($verify);
        $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
        echo "<script> alarm(\"".$emess."\") </script>";
        die;
        trigger_error(htmlentities($e['message'],ENT_QUOTES),E_USER_ERROR);
    }
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
          <summary>Nu s-a putut - Database error</summary>
          <p>".$e->getMessage()."</p>
        </details><br> ";
        die;
    } 
    
    if($id <0 )
    {
        echo  "Mai exista ";
        return -1;
    }
    else
    {
    // Fetch the results of the query
    print $id;
        // Fetch the results of the query
        while (($row = oci_fetch_array($verify, OCI_BOTH + OCI_RETURN_NULLS))!= false) {
                print "Welcome ". $row[1]."<br>";
            print "\n"; 
        }
    return $id;
    }
    oci_free_statement($verify);
}

function Login($name_p,$password_p)
{
    
    $query ='BEGIN :id := p_registration.login( :name_p, :password_p); END; ';
    $queryinj='begin select count(id) into :este from player where username=\''.$name_p.'\' and password=\''.$password_p.'\'; end; ';
    
    try
    {  
        $stid = oci_parse($GLOBALS['connection'], $query);
        if (!$stid) {
            $e = oci_error($GLOBALS['connection']);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
          <summary>Nu s-a putut - Database error</summary>
          <p>".$e->getMessage()."</p>
        </details><br> ";
        die;
    } 
    try
    {
    oci_bind_by_name($stid , ":id", $id,10);
   //     oci_bind_by_name($stid, ":este",$este,10);
    oci_bind_by_name($stid , ":name_p",$name_p);
    oci_bind_by_name($stid , ":password_p",$password_p);
        echo $name_p."  ".$password_p;
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
          <summary>Nu s-a putut - Database error</summary>
          <p>".$e->getMessage()."</p>
        </details><br> ";
        die;
    } 

    try
    {      
        $r = oci_execute($stid);
        if (!$r) {
            $e = oci_error($stid);
            $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die;
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>
          <summary>Nu s-a putut - Database error</summary>
          <p>".$e->getMessage()."</p>
        </details><br> ";
        die;
    } 
     /*
    oci_free_statement($stid);
    
    if($este<1)
        echo "Nu ti cunosc";
    else
    {
        echo 'Welcome ';
    echo $name_p."  ".$password_p;
    }
    */
    // /*
    if($id == -1)
    {
        echo 'Nu ti cunosc <br>';
        return -1;
    }
         
    else 
    {
        try
        {    
            $verify = oci_parse($GLOBALS['connection'], 'Select * from player where id=:id ');
            if (!$verify)
            {
                $e = oci_error($GLOBALS['connection']);
               $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die; trigger_error(htmlentities($e['message'],ENT_QUOTES),E_USER_ERROR);
            }
            oci_bind_by_name($verify, ":id",$id);  
        }
        catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
        try
        {
             $r = oci_execute($verify);
            if(!$r)
            {
                $e=oci_error($verify);
                trigger_error(htmlentities($e['message'],ENT_QUOTES),E_USER_ERROR);
            } 
        }
        catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
  

        // Fetch the results of the query
       print $id;
        // Fetch the results of the query
        while (($row = oci_fetch_array($verify, OCI_BOTH + OCI_RETURN_NULLS))!= false) {
                print "Welcome ". $row[1]."<br>";
            print "\n"; 
        }

        oci_free_statement($verify);
        return $id;
    }
    //*/
}
    
function LoginAsCookie($name_p)
{
    try
    {
    $stid = oci_parse($GLOBALS['connection'], 'BEGIN :id := p_Registration.register_cookie( :name_p); END; ');
    if (!$stid) {
        $e = oci_error($GLOBALS['connection']);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    oci_bind_by_name($stid , ":id", $id,10);
    oci_bind_by_name($stid , ":name_p",$name_p);
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    try
    {
        $r = oci_execute($stid);
        if (!$r) {
            $e = oci_error($stid);
            $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die;
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    
    oci_free_statement($stid);
    if($id == -1)
         echo 'Nu ti cunosc <br>';
    else 
    {
        try
        {
            $verify = oci_parse($GLOBALS['connection'], 'Select * from player where id=:id ');
            if (!$verify)
            {
                $e = oci_error($GLOBALS['connection']);
               $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die; trigger_error(htmlentities($e['message'],ENT_QUOTES),E_USER_ERROR);
            }
            oci_bind_by_name($verify, ":id",$id);  
        }
        catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
        try
        {
                $r = oci_execute($verify);
            if(!$r)
            {
                $e=oci_error($verify);
                trigger_error(htmlentities($e['message'],ENT_QUOTES),E_USER_ERROR);
            }
        }
        catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 

        print $id;
        // Fetch the results of the query
        while (($row = oci_fetch_array($verify, OCI_BOTH + OCI_RETURN_NULLS))!= false) {
                print "Welcome ". $row[1]."<br>";
            print "\n"; 
        }
       // print "</table>\n";

        oci_free_statement($verify);
        return $id;
    }
        //cookie set up
        
}
function GetUsername($id)
{
    try
    {
        $stid = oci_parse($GLOBALS['connection'], 'select username from player where id=:id ');
        if (!$stid) {
            $e = oci_error($GLOBALS['connection']);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        oci_bind_by_name($stid , ":id", $id,10);
    }
    catch  (Exception $e)
    {
        $emess= "Database error".$e->getMessage();
        echo "<details>              <summary>Nu s-a putut - Database error</summary>
        <p>".$e->getMessage()."</p>    
            </details><br> ";
            die;
        } 
    // Perform the logic of the query
    try
    {
    $r = oci_execute($stid);
    if (!$r) {
        $e = oci_error($stid);
        $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
        echo "<script> alarm(\"".$emess."\") </script>";
        die;
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    $row = oci_fetch_array($stid, OCI_BOTH + OCI_RETURN_NULLS);
    oci_free_statement($stid);
    return $row[0];
}
function ChangeUsername($id,$name)
{
    try
    {
        $stid = oci_parse($GLOBALS['connection'], 'update player set username=:name where id=:id ');
        if (!$stid) {
            $e = oci_error($GLOBALS['connection']);
            $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die;
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        oci_bind_by_name($stid , ":id", $id,10);
        oci_bind_by_name($stid , ":name", $name,10);
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    // Perform the logic of the query
    try
    {
    $r = oci_execute($stid);
    if (!$r) {
        $e = oci_error($stid);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    $row = oci_fetch_array($stid, OCI_BOTH + OCI_RETURN_NULLS);
    oci_free_statement($stid);
}

function ChangePassword($id,$name)
{
    try
    {
    $stid = oci_parse($GLOBALS['connection'], 'update player set password=:name where id=:id ');
    if (!$stid) {
        $e = oci_error($GLOBALS['connection']);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    oci_bind_by_name($stid , ":id", $id,10);
    oci_bind_by_name($stid , ":name", $name,10);
    }
     catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    // Perform the logic of the query
    try
    {
        $r = oci_execute($stid);
        if (!$r) {
            $e = oci_error($stid);
            $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die;
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    $row = oci_fetch_array($stid, OCI_BOTH + OCI_RETURN_NULLS);
    oci_free_statement($stid);
}

function Clean()
{
    try
    {
     $stid = oci_parse($GLOBALS['connection'], 'BEGIN p_registration.cleanup; END; ');
    if (!$stid) {
        $e = oci_error($GLOBALS['connection']);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 

    try
    {
    $r = oci_execute($stid);
    if (!$r) {
        $e = oci_error($stid);
        $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
        echo "<script> alarm(\"".$emess."\") </script>";
        die;
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
     oci_free_statement($stid);
}

function RankIt($map,$player,$page)
{
    if($map == 0) $map_p=NULL;
    else $map_p=$map;
    if($player==0) $player_p=NULL;
    else $player_p=$player;
    try
    {
        $stid = oci_parse($GLOBALS['connection'], 'select * from table(p_account.rank_table(:map,:player)) order by 4 desc,5 desc');
        if (!$stid) {
            $e = oci_error($GLOBALS['connection']);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        oci_bind_by_name($stid, ":map",$map_p);
        oci_bind_by_name($stid, ":player",$player_p);
    }
     catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    try
    {
        $r = oci_execute($stid);
        if (!$r) {
            $e = oci_error($stid);
            $emess= "Database error".htmlentities($e['message'], ENT_QUOTES);
            echo "<script> alarm(\"".$emess."\") </script>";
            die;
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    print "    <table id=\"RealTable\" style=\"width:100%\">
                    <tr>
                        <th id=\"first\"><a herf=\"#\" id=\"butonRankT\" class=\"tabalButons\"> Rank</a></th>
                        <th><a herf=\"#\" id=\"butonUser\" class=\"tabalButons\"> User Name</a></th> 
                        <th><a herf=\"#\" id=\"butonCoins\" class=\"tabalButons\"> Last Map</a></th>
                        <th><a herf=\"#\" id=\"butonLast\" class=\"tabalButons\"> Coins</a></th>
                        <th><a herf=\"#\" id=\"butonLevel\" class=\"tabalButons\"> Level</a></th>
                        <th><a herf=\"#\" id=\"butonExperience\" class=\"tabalButons\"> Experience</a></th>
                   </tr> ";
    // Fetch the results of the query
   // print "<table border='1'>\n";
    $nr = 0;
     $nrpage = 0;
    while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
        print "<tr>\n";
        $nr = $nr+1;
        if($page*50 < $nr && ($page+1)*50> $nr )
        {
            print "<td>".$nr."</td>" ;
            foreach ($row as $item) {   
                print " <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "&nbsp;") . "</td>\n";
            }
            print "</tr>\n";
            //if($nr % 50)
              //  echo "</table>";
        }
    }
    print "</table>\n";

    oci_free_statement($stid);

}

function GetExp($player,$monster,$map,$penality)
{
    //echo $player." ".$monster." ".$map;
    try
    {
    $stid = oci_parse($GLOBALS['connection'], 'Begin select id into :id from ( select id from  savegame where player_level=:player) where rownum<=1; end;');
    if (!$stid) {
        $e = oci_error($GLOBALS['connection']);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    oci_bind_by_name($stid, ":player",$player);
    oci_bind_by_name($stid, ":id",$playerid,10);
    $r = oci_execute($stid);
    if (!$r) {
            $e = oci_error($stid);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch(Exception $e)
    {
        echo "Nu exista o astfel de player";
        die;
    }
    try
    {
    $stid = oci_parse($GLOBALS['connection'], 'Begin select id into :id from ( select id from  monster_type where nivel= :monsterlv order by dbms_random.value) where rownum<=1; end;');
    if (!$stid) {
        $e = oci_error($GLOBALS['connection']);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    oci_bind_by_name($stid, ":monsterlv",$monster);
    oci_bind_by_name($stid, ":id",$monsterid,10);
    $r = oci_execute($stid);
    if (!$r) {
            $e = oci_error($stid);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch(Exception $e)
    {
        echo "Nu exista un astfel de monster ";
        die;
    }
    
    try
    {
    $stid = oci_parse($GLOBALS['connection'], 'Begin select id into :id from ( select id from  map where nivel=:maplv) where rownum<=1; end;');
    if (!$stid) {
        $e = oci_error($GLOBALS['connection']);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    oci_bind_by_name($stid, ":maplv",$map);
    oci_bind_by_name($stid, ":id",$mapid,10);
    $r = oci_execute($stid);
    if (!$r) {
            $e = oci_error($stid);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch(Exception $e)
    {
        echo "Nu exista o astfel de mapa";
        die;
    }
        
    try
    {
     $stid = oci_parse($GLOBALS['connection'], 'select p_account.exp_monter_earned(:player,:map,:monster,:penality) from dual');
    if (!$stid) {
        $e = oci_error($GLOBALS['connection']);
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }
    oci_bind_by_name($stid, ":player",$playerid);
    oci_bind_by_name($stid, ":monster",$monsterid);
    oci_bind_by_name($stid, ":map",$mapid);
    oci_bind_by_name($stid, ":penality",$penality);
    }
     catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 

    // Perform the logic of the query
    try
    {
        $r = oci_execute($stid);
        if (!$r) {
            $e = oci_error($stid);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    $row = oci_fetch_array($stid, OCI_BOTH + OCI_RETURN_NULLS);
    oci_free_statement($stid);
    print $row[0];
    return $row[0];
}

function getMonsterDialog($monster_id)
{
    //echo "ID : ".$monster_id;
    try
    {
        $query1='select message from dialog where monster_id= :id';
        $query2="select message, answer1,answer2,answer3,answer4,order_index from dialog
where monster_id=:id 
order by order_index,id ";
        $stid = oci_parse($GLOBALS['connection'],$query2 );
        if (!$stid) {
            $e = oci_error($GLOBALS['connection']);
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }
        oci_bind_by_name($stid, ":id",$monster_id,3,OCI_B_INT);
    }
     catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
    try
    {
        $r = oci_execute($stid,OCI_DEFAULT);
    }
    catch  (Exception $e)
        {
            $emess= "Database error".$e->getMessage();
            echo "<details>
              <summary>Nu s-a putut - Database error</summary>
              <p>".$e->getMessage()."</p>
            </details><br> ";
            die;
        } 
   
    // Fetch the results of the query
   // print "<table border='1'>\n";
    $messages=array();
    $answers=array();
    $order=array();
 /*   
while ($row = oci_fetch_array($stid, OCI_BOTH+OCI_RETURN_LOBS+OCI_RETURN_NULLS)) {
    if($row != null)
    {
            print $row['MESSAGE'].'<br>';
    array_push($messages,$row['MESSAGE']);
    }

    // In a loop, freeing the large variable before the 2nd fetch reduces PHP's peak memory usage
    //unset($row);  
}
   // echo "</tr>\n";
//echo "</table>\n";

   */ 
    while ($row = oci_fetch_array($stid, OCI_BOTH+OCI_RETURN_LOBS+OCI_RETURN_NULLS)) 
    {
        array_push($messages,$row['MESSAGE']);
        $answer=array();
        if($row['ANSWER1']!=null)
        array_push($answer,$row['ANSWER1']);
        if($row['ANSWER2']!=null)
        array_push($answer,$row['ANSWER2']);
        if($row['ANSWER3']!=null)
        array_push($answer,$row['ANSWER3']);
         if($row['ANSWER4']!=null)
        array_push($answer,$row['ANSWER4']);
        
        array_push($answers,$answer);
        
        array_push($order,$row['ORDER_INDEX']);
    //echo $row['MESSAGE'] ."<br>\n";
            }

    //return $messages;
    return array($messages,$answers,$order);

    oci_free_statement($stid);
}

?>