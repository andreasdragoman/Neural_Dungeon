
<!DOCTYPE html>

<html>
    <head>   
  
       <!-- <link rel="stylesheet" type="text/css" href="CSS/style.css" /> -->
        <meta charset="utf-8" />
        <title>First Game</title>
        <script src = "js/phaser/phaser.js"></script>
        <script src = "js/Boot.js"></script>
        <script src = "js/Preloader.js"></script>
        <script src = "js/MainMenu.js"></script>
        <script src="js/LevelColors_orangeGate.js"></script>
        <script src="js/LevelColors_grayGate.js"></script>
        <script src="js/LevelColors_darkGreenGate.js"></script>
        <script src="js/LevelColors_purpleGate.js"></script>
        <script src="js/LevelColors_lightBlueGate.js"></script>
        <script src = "facebook.js"></script>
        <script src= "before_enter_game.js"></script>
        <link rel="stylesheet" type="text/css" href="minibar/BarStyle.css">
      <!--  <link rel="shortcut icon" href="favicon.ico">   -->
        
        
        
        <!--   .......................Main Menu ......................  -->
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="header/styles.css">
        <script src = "header/script.js"></script>
        <!--<script src="jquery-3.2.0.min.js"></script> -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" type="text/css" />
        <script src="http://code.jquery.com/jquery-1.6.3.min.js"></script>
		<script src="js/shuffle/jquery.shuffleLetters.js"></script>
        <script src="js/shuffle/script.js"></script>
        
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        

    </head>  

<body bgcolor="black">
	

        
    <script> window.onload=openNav</script> 
    
    
        <footer id="Void">This is the void! Login to escape from it</footer>
    
    <div id="myNav" class="overlay">
		<div id="TheTitle">Neural Dungeon</div>
		<div id="overlay-content" class="overlay-content">     
			<section id="Summary">
				<article id="Summary1">
					Enter in the Dungeon of Artificial Inteligence.		
				</article>       
				<!-- You're the AI agent and you will use the neural networks(your brain) learning how to reach the final level.
					Good Luck !	-->
			</section>
			<!-- <input type="text" id="userText" /> -->
      
			<input id="facebook" type="image" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-256.png" onclick="LoginFb()" />      
			<a herf="#" id="butonPlay" class="butonPlay"> Play !</a>
      
		</div>
     <section id="Welcome">
         <a herf="#" id="Play" class="butonPlay"> Play</a>
     </section>
         
         
            
         
     
      

</div>
   
    
    <div class='miniBar' id='bar'>
        <div class="health">
            <div class='Profile'>
                <canvas id="ProfilPic" width="100%" height="90% " style="border:1px solid #d3d3d3;">
                </canvas>
                
            </div>
            <div id="PlayerName"> NAme</div>
            <progress max="100" value="80" id='HPBar'></progress>
            <div class="w3-light-grey w3-round-large" id='healthcontainer'>
                <div class="w3-container w3-red w3-round-xlarge" style="width:95%" style="height:2%" id='healthBar'>
                    <a id='HP'>
                        <script>
                            var width = (document.getElementById('healthBar').offsetWidth /document.getElementById('healthcontainer').offsetWidth)*100 ;
                            width=Math.round(Number(width)); 
                            document.getElementById('HP').innerHTML=width+'%';
                           // document.getElementById('healthcontainer').style.height=120%;
                        </script>
                    </a>
                </div>
             </div> 
        </div>
        
            <div class="Container" width="400" height="500" id='chat'>
                <div id="ChatContent"> </div>
                <a id="ChatAnswer1" onclick="nextDialog(0); actionInput(0); actionInput1(0);"></a>
                <br>
                <a id="ChatAnswer2" onclick="nextDialog(1); actionInput(1); actionInput1(1);"></a>
                <br>
                <a id="ChatAnswer3" onclick="nextDialog(2); actionInput(2); actionInput1(2);"></a>
                <br>
                <a id="ChatAnswer4" onclick="nextDialog(3); actionInput(3); actionInput1(3);"></a>
            </div>
        
        
             <div class="Container" width="450" height="500" id='inventory'>
                
                <div class="Content"> 
                    <p id="MSG"></p> 
                    
                </div>
                <canvas id="Gold" width="130%" height="15% " style="border:1px solid #d3d3d3;">
                </canvas>
            </div>
            </div>

<img id="scream" width="0%" height="0%" src="minibar/img_the_scream.jpg" alt="The Scream">  
    
      


</body>


</html>