var Game = {};


Game.Boot = function(game){
    
        
    
};

Game.Boot.prototype = {
    init:function(){
        this.input.maxPointers = 1;  //multitouch bigger value
        this.stage.disableVisabilityChange = true;
     
        
        
    },
    
    preload:function(){
       
        this.load.image('preloadBar','assets/loadingscreen/LoadingBar.jpg');// get img
        this.load.image('loading3','assets/loadingscreen/loading3.png');
        
    },
    
    create:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preloader');
        
       
    }
};