

function openTable(){
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("TableOverlay").style.height = "100%";
            $(document).ready(function() {
                $('#RealTable').paging({limit:5});
            });
        

}
function openTableExp(){
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("TableOverlayExp").style.height = "100%";

}
function Filter() 
{
$.ajax({
     url:'newphp.php',
    type: 'POST',
    data: {"Map" : document.getElementById('MapLevel').value,"Player" : document.getElementById('PlayerLevel').value,"Page" :document.getElementById('Pagenr').value },
    success: function(response) 
    {
    document.getElementById('RealTable').innerHTML=response;
    }
 });
}

function Compute()
{
    $.ajax({
     url:'newphp.php',
    type: 'POST',
    data: {"PlayerLv" : document.getElementById('PlayerLv').value,
           "MapLv" : document.getElementById('MapLv').value,
          "MonsterLv" : document.getElementById('MonsterLv').value,
          "Penality" : document.getElementById('Penality').value},
    success: function(response) 
    {
    document.getElementById('ShowCompute').innerHTML=response;
    }
 });
}
var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function StartGame()
{
       
        var game = new Phaser.Game(1536,768,Phaser.AUTO,'game');
    

        game.state.add('Boot',Game.Boot);
        game.state.add('Preloader',Game.Preloader);
        game.state.add('MainMenu',Game.MainMenu);
        game.state.add('LevelColors_orangeGate',Game.LevelColors_orangeGate);
        game.state.add('LevelColors_grayGate',Game.LevelColors_grayGate);
        game.state.add('LevelColors_purpleGate',Game.LevelColors_purpleGate);
        game.state.add('LevelColors_darkGreenGate',Game.LevelColors_darkGreenGate);
        game.state.add('LevelColors_lightBlueGate',Game.LevelColors_lightBlueGate);
    
        $("#bar").show(); 
    $("body").keydown(function(event)
    {
    
        showHUD();
        setPlayerName();
        setPlayerImage();
       
    });
       
        game.state.start('Boot');
     var canvas = document.getElementById("Gold");
        var ctx = canvas.getContext("2d");
        ctx.font = "20px Arial";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("0",50,15);
      
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 9999999999; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function showHUD()
{
    
     //  var c = document.getElementById("ProfilPic");
  //  var ctx = c.getContext("2d");
   // var img = document.getElementById("scream");
  //  ctx.drawImage(img, 0, 0);
   // $("#bar").show();
    document.getElementById("bar").style.height = "28%";
    document.getElementById("bar").style.top = "70%";
    
}


$(document).ready(function(){
    $("#buttonRegister").click(function(){
        $("#register").toggle();
    });
    $("#butonLogIn").click(function(){
        $("#login").toggle();
    });
    $("#butonRank").click(function(){
        openTable();
    });
    $("#butonExp").click(function(){
        $("#ComputeAll").toggle();
    });
    $("#butonPlay").click(function(){
       $("#login_cookie").toggle();
       // StartGame();
    });
    $("#Play").click(function()
    {
        closeNav();
        window.setTimeout(StartGame,500);
    });
    $("#butonRank").click(function(){
        openTable();
    });
    $("body").keydown(function(event){ 
        // 
         if(27 == event.which)
            {
             if(document.getElementById("myNav").style.height == "100%")
             {closeNav();
              document.getElementById("bar").style.height = "0%";
              document.getElementById("bar").style.top = "110%";
              //$("#bar").toggle();
             }
            else {openNav();
                document.getElementById("bar").style.height = "28%";
                document.getElementById("bar").style.top = "70%";
               //$("#bar").toggle();
            }
            }
    });
    
});