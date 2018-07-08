function openNav() {

    document.getElementById("myNav").style.height = "100%";
    document.getElementById("TableOverlay").style.height = "0%";
    $("#register").hide();
    $("#login").hide();
    $("#login_cookie").hide();
    $("#ComputeAll").hide();
    $("#bar").hide();
    document.getElementById("bar").style.height = "0%";
    document.getElementById("bar").style.top = "110%";
   $("#bar").hide();
    
   /*  $("#bar").show();
    showHUD();
    setPlayerName();
    setPlayerImage(); */
    
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
   /*  $("#bar").show();
    showHUD();
    setPlayerName();
    setPlayerImage();*/
    
}
function SetCookie()
{
    document.getElementById("Welcome").style.opacity="1";
    $("#overlay-content").hide();
    $("#Void").hide();
     //document.getElementById("overlay-content").hide;
    $.ajax({
     url:'newphp.php',
    type: 'POST',
    data: {"Cookie" : "1",
          },
    success: function(response) 
    {
        if(response=="false")
            {
              $("#overlay-content").toggle(); 
                $("#Void").toggle();
            $("#Welcome").hide();
            }
        else
            document.getElementById('Wname').innerHTML=response;
       // document.getElementById("Welcome").style.opacity="0";
    
    }
    });
}
function LoginFb()
{
    //alert(getFBLogin());
    getFBLogin();
       
    backLogin();
   
}
