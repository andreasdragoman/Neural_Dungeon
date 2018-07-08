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
        this.load.tilemap('colorsMap_neural','assets//tilemaps/colorsMap_neural.json',null,Phaser.Tilemap.TILED_JSON);
        
        //level Colors
        //MAIN + ORANGE
        this.load.image('green_ground_1','assets/LevelColors/greenGroundTiles.jpg');
        this.load.image('ground_1_colorMap','assets/LevelColors/ground_1_colorMap.jpg');
        this.load.image('ground_2_colorMap','assets/LevelColors/ground_2_colorMap.jpg');
        this.load.image('grd_1','assets/LevelColors/grd_1.jpg');
        this.load.spritesheet('green_mob','assets/LevelColors/full_green_mob.png',115,86,8);
        this.load.spritesheet('yellow_mob','assets/LevelColors/full_yellow_mob.png',115,86,8);
        this.load.spritesheet('red_mob','assets/LevelColors/full_red_mob.png',115,86,8);
        this.load.spritesheet('white_mob','assets/LevelColors/full_white_mob.png',115,86,8);
        this.load.spritesheet('orange_big_door','assets/LevelColors/orange_big_door.png');
        this.load.spritesheet('explosion_sprite','assets/LevelColors/explosion_sprite.png',96,96,15);
        this.load.image('closeButton', 'assets/LevelColors/closeButton.png');
        this.load.image('boxBack', 'assets/LevelColors/boxBack.png');
        this.load.image('testButton', 'assets/LevelColors/testButton.png');
        this.load.image('cloud_info', 'assets/LevelColors/cloud_info.png');
            //GREEN
        this.load.spritesheet('green_big_door','assets/LevelColors/green_big_door.png');
        this.load.spritesheet('purple_big_door','assets/LevelColors/purple_big_door.png');   
        this.load.spritesheet('light_blue_big_door','assets/LevelColors/light_blue_big_door.png');
        this.load.spritesheet('green_big_door','assets/LevelColors/green_big_door.png');
        this.load.spritesheet('gray_big_door','assets/LevelColors/gray_big_door.png');     
        this.load.spritesheet('green_big_door','assets/LevelColors/green_big_door.png');
        this.load.spritesheet('dark_green_big_door','assets/LevelColors/green_big_door.png');
        this.load.spritesheet('darkGreen_big_door','assets/LevelColors/darkGreen_big_door.png');
            //colors mobs
        this.load.spritesheet('blue_mob','assets/LevelColors/full_blue_mob.png',115,86,8);
        this.load.spritesheet('black_mob','assets/LevelColors/full_black_mob.png',115,86,8);
        
        
        //PLAYER
        this.load.spritesheet('soldatPlayer','assets/LevelColors/soldatPlayer.png',64,64);
        
        //FONT
        this.load.bitmapFont('desyrel', 'assets/fonts/desyrel.png', 'assets/fonts/desyrel.xml');
          
        
        //SOUNDS
        //this.game.load.audio("soundKey", "assets/sounds/oliver.mp3");
        
    },
    
    create:function(){
         //sleep(4000);
    
},
    
    update:function(){
        //this.state.start('Level2');
        this.state.start('LevelColors_orangeGate');
       
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
