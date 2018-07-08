Game.Preloader = function(game){
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload:function(){
        
        this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'loading3');
 
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.time.advancedTiming = true ;
        this.load.setPreloadSprite(this.preloadBar);
        
        //LOAD ALL ASSETS
        this.load.tilemap('map', 'assets//tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('map2', 'assets//tilemaps/level2.json', null,Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('map3','assets//tilemaps/level3.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('CookieMainCamera','assets//tilemaps/CookieMainCamera.json',null,Phaser.Tilemap.TILED_JSON);
        
        //level1
        this.load.image('tiles1','assets/level1Images/level1img3.png');
        this.load.image('nature_tiles','assets/level1Images/nature_tiles.png');
        this.load.image('nature_tiles2','assets/level1Images/nature_tiles2.png');
        this.load.image('nature_tiles3','assets/level1Images/nature_tiles3.png');
        this.load.image('nature_tiles4','assets/level1Images/nature_tiles4.png');
        
       
        //level 2
        this.load.image('deserthouses','assets/level2Images/deserthouses.png');
        this.load.image('miniboat','assets/level2Images/miniboat.png');
        this.load.image('water','assets/level2Images/water.png');
        this.load.image('train','assets/level2Images/train.png');
        this.load.image('trees','assets/level2Images/trees.png');
        
        
        //level 3
        
        this.load.image('ground','assets/level3Images/ground.jpg');
        this.load.image('treeslv3','assets/level3Images/trees.png');
        this.load.image('house','assets/level3Images/house.png');
        this.load.image('dragon1','assets/level3Images/dragon1.png');
        
        //level3 version 2
        this.load.image('ground6','assets/level3Images/ground6.jpg');
        this.load.image('ground4','assets/level3Images/ground4.jpg');
        
        //level Cookie Main Map
        this.load.image('city_ground','assets/levelCookieImages/city_ground.png');
        this.load.image('ground_cookie','assets/levelCookieImages/ground_cookie.jpg');
        this.load.image('cookietrees3','assets/levelCookieImages/cookietrees3.png');
        //this.load.image('cookiewalls','assets/levelCookieImages/cookiewalls.png');
        this.load.spritesheet('topMapNpc','assets/levelCookieImages/topMapNpc.png');
        this.load.spritesheet('mainNpc','assets/levelCookieImages/mainNpc.png');
        this.load.spritesheet('stoneMainNpc','assets/levelCookieImages/stoneMainNpc.png');
        this.load.image('cookieMob','assets/levelCookieImages/cookieMob.png');
		this.load.spritesheet('cookieAnimation','assets/levelCookieImages/cookieAnimation.png',64,64,16);
        this.load.spritesheet('doorsanimation1','assets/levelCookieImages/dooranimation1.png',67,30,4);
        this.load.spritesheet('cookiemonster2','assets/levelCookieImages/cookiemonster2.png',64,64);
        this.load.spritesheet('fountain1','assets/levelCookieImages/fountain1.png',160,128);
        
        
        
        
        //PLAYER
        //this.load.spritesheet('player','assets/level1Images/player.png',24,26);  //girl player
        //this.load.spritesheet('player','assets/level2Images/player6.png',107,96);   //horse player
        //this.load.spritesheet('player','assets/level2Images/dragonplayer.png',192,192);  //dragon player
        this.load.spritesheet('player','assets/level2Images/player8.png',32,64);  // normal player
        
        
        //MONSTERS
        
        
        this.load.image('dragon1','assets/level3Images/dragon1.png');
        
        
        
        //SHOOT SPRINTS
        
        this.load.image('bullet','assets/level3Images/bullet.png');    
        
        
        
        
        
        // ANIMATIONS
        this.load.spritesheet('fire','assets/level2Images/fire.png',64,59,3);
        
        this.load.spritesheet('doarcazan','assets/level2Images/doarcazan.png',31.75,41,3);
        
        this.load.spritesheet('fire2','assets/level2Images/fire2.png',64,64,3);        
        
        this.load.spritesheet('doors2','assets/level1Images/doors4.png',96,64);
        
        this.load.spritesheet('portal2','assets/level2Images/portal2.jpg',112,149);
        
        
        //SOUNDS
        //this.game.load.audio("soundKey", "assets/sounds/oliver.mp3");
        
    },
    
    create:function(){
         //sleep(4000);
    
},
    
    update:function(){
        //this.state.start('Level2');
        this.state.start('LevelCookieMainCamera');
       
    }
    
    
    
    
    
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 9999999999999999; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
