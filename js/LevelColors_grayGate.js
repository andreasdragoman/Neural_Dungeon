Game.LevelColors_grayGate = function(game){
   
};

var map;
var layer;
var botLayer;
var botLayer2;
var objectLayer;
var music;
var respawn;
var gray_door_grayGate;
var infoCloud_grayGate;

var player;
var controls = {};
var playerSpeed = 350;
var jumpTimer = 0;

var pauseKey;

var enemy2_green;  
var enemy2_black;
var enemy2_yellow;
var enemy2_white;

var green_mob_name;
var black_mob_name;
var yellow_mob_name;
var white_mob_name;

var waitingTime=0;
var checkDeadPlayer=false;
var deadAnimPlayed = false;

var green_mob_dead_2 = false;
var black_mob_dead_2 = false;
var yellow_mob_dead_2 = false;
var white_mob_dead_2 = false;

var green_mob_killed_order_2 = -1;
var black_mob_killed_order_2 = -1;
var yellow_mob_killed_order_2 = -1;
var white_mob_killed_order_2 = -1;

var mobs_killed_until_now_2 = 0;

var buttonCloseBoxPressed_2= false;
var back_2;
var text1_2;
var closeButton_2;
var msgBox_2;
var explosion_2;
var buttonTest_2;

var element = document.getElementById("HPBar");

CloudInfo = function (index,game,x,y){
    this.originx = x;
    this.originy = y;
    this.cloud_info = game.add.sprite(x,y,'cloud_info');
    this.cloud_info.anchor.setTo(0.5,0.5);
    this.cloud_info.name = index.toString();
    game.physics.enable(this.cloud_info,Phaser.Physics.ARCADE);
    this.cloud_info.body.collideWorldBounds = true;
    this.cloud_info.body.immovable = true;
    this.cloud_info.body.allowGravity = true;
    
    this.cloud_info_tween = game.add.tween(this.cloud_info).to({
        y: this.cloud_info.y + 50,
    },2000,'Linear',true,0,100,true);
};

GreenMob = function(index,game,x,y){
    this.originx=x;
    this.originy=y;
    this.green_mob =  game.add.sprite(x,y,'green_mob');
    this.green_mob.anchor.setTo(0.5,0.5);
    this.green_mob.name = index.toString();
    //game.physics.enable(this.mummy,Phaser.Physics.ARCADE);
    
        //game.physics.arcade.enable(this.cookie3);
        game.physics.enable(this.green_mob,Phaser.Physics.ARCADE);
        this.green_mob.animations.add('green_mob_anim');
        this.green_mob.animations.add('green_mob_anim_walk_left',[4,5,6,7]);
        this.green_mob.animations.add('green_mob_anim_walk_right',[0,1,2,3]);
        //this.green_mob.animations.add('green_mob_anim_walk_right',[5,6,7,8,9,15,16,17,18,19,25,26,27,28,29,35,36,37]);
        //this.green_mob.animations.add('green_mob_anim_atack',[33,35,35,37,15]);
        this.green_mob.animations.play('green_mob_anim_walk_left', 8, true);
        this.green_mob.body.collideWorldBounds = true;
        this.green_mob.body.immovable = true;
        this.green_mob.body.allowGravity = false;
    
    //this.green_mob.body.immovable = true;
    //this.green_mob.body.collideWorldBounds = true;
    //this.green_mob.body.allowGravity = false;

//    this.green_mob_tween = game.add.tween(this.green_mob).to({
//        y: this.green_mob.y + 50,
//    },2000,'Linear',true,0,100,true); 
    
    //game.physics.arcade.moveToXY(this.green_mob, player.x,player.y, 200);
    
    //this.green_mob.reset(x,y);
};

YellowMob = function(index,game,x,y){
    this.originx=x;
    this.originy=y;
    this.yellow_mob =  game.add.sprite(x,y,'yellow_mob');
    this.yellow_mob.anchor.setTo(0.5,0.5);
    this.yellow_mob.name = index.toString();
    //game.physics.enable(this.mummy,Phaser.Physics.ARCADE);
    
        //game.physics.arcade.enable(this.cookie3);
        game.physics.enable(this.yellow_mob,Phaser.Physics.ARCADE);
        this.yellow_mob.animations.add('yellow_mob_anim');
        this.yellow_mob.animations.add('yellow_mob_anim_walk_left',[4,5,6,7]);
        this.yellow_mob.animations.add('yellow_mob_anim_walk_right',[0,1,2,3]);
        //this.green_mob.animations.add('green_mob_anim_walk_right',[5,6,7,8,9,15,16,17,18,19,25,26,27,28,29,35,36,37]);
        //this.green_mob.animations.add('green_mob_anim_atack',[33,35,35,37,15]);
        this.yellow_mob.animations.play('yellow_mob_anim_walk_left', 8, true);
        this.yellow_mob.body.collideWorldBounds = true;
        this.yellow_mob.body.immovable = true;
        this.yellow_mob.body.allowGravity = false;
    
    //this.green_mob.body.immovable = true;
    //this.green_mob.body.collideWorldBounds = true;
    //this.green_mob.body.allowGravity = false;

//    this.yellow_mob_tween = game.add.tween(this.yellow_mob).to({
//        y: this.yellow_mob.y + 50,
//    },2000,'Linear',true,0,100,true); 
    
    //game.physics.arcade.moveToXY(this.green_mob, player.x,player.y, 200);
    
    //this.green_mob.reset(x,y);
};

BlackMob = function(index,game,x,y){
    this.originx=x;
    this.originy=y;
    this.black_mob =  game.add.sprite(x,y,'black_mob');
    this.black_mob.anchor.setTo(0.5,0.5);
    this.black_mob.name = index.toString();
    //game.physics.enable(this.mummy,Phaser.Physics.ARCADE);
    
        //game.physics.arcade.enable(this.cookie3);
        game.physics.enable(this.black_mob,Phaser.Physics.ARCADE);
        this.black_mob.animations.add('black_mob_anim');
        this.black_mob.animations.add('black_mob_anim_walk_left',[4,5,6,7]);
        this.black_mob.animations.add('black_mob_anim_walk_right',[0,1,2,3]);
        //this.green_mob.animations.add('green_mob_anim_walk_right',[5,6,7,8,9,15,16,17,18,19,25,26,27,28,29,35,36,37]);
        //this.green_mob.animations.add('green_mob_anim_atack',[33,35,35,37,15]);
        this.black_mob.animations.play('black_mob_anim_walk_left', 8, true);
        this.black_mob.body.collideWorldBounds = true;
        this.black_mob.body.immovable = true;
        this.black_mob.body.allowGravity = false;
    
    //this.green_mob.body.immovable = true;
    //this.green_mob.body.collideWorldBounds = true;
    //this.green_mob.body.allowGravity = false;

//    this.black_mob_tween = game.add.tween(this.black_mob).to({
//        y: this.black_mob.y + 50,
//    },2000,'Linear',true,0,100,true); 
    
    //game.physics.arcade.moveToXY(this.green_mob, player.x,player.y, 200);
    
    //this.green_mob.reset(x,y);
};

WhiteMob = function(index,game,x,y){
    this.originx=x;
    this.originy=y;
    this.white_mob =  game.add.sprite(x,y,'white_mob');
    this.white_mob.anchor.setTo(0.5,0.5);
    this.white_mob.name = index.toString();
    //game.physics.enable(this.mummy,Phaser.Physics.ARCADE);
    
        //game.physics.arcade.enable(this.cookie3);
        game.physics.enable(this.white_mob,Phaser.Physics.ARCADE);
        this.white_mob.animations.add('white_mob_anim');
        this.white_mob.animations.add('white_mob_anim_walk_left',[4,5,6,7]);
        this.white_mob.animations.add('white_mob_anim_walk_right',[0,1,2,3]);
        //this.green_mob.animations.add('green_mob_anim_walk_right',[5,6,7,8,9,15,16,17,18,19,25,26,27,28,29,35,36,37]);
        //this.green_mob.animations.add('green_mob_anim_atack',[33,35,35,37,15]);
        this.white_mob.animations.play('white_mob_anim_walk_left', 8, true);
        this.white_mob.body.collideWorldBounds = true;
        this.white_mob.body.immovable = true;
        this.white_mob.body.allowGravity = false;
    
    //this.green_mob.body.immovable = true;
    //this.green_mob.body.collideWorldBounds = true;
    //this.green_mob.body.allowGravity = false;

//    this.white_mob_tween = game.add.tween(this.white_mob).to({
//        y: this.white_mob.y + 50,
//    },2000,'Linear',true,0,100,true); 
    
    //game.physics.arcade.moveToXY(this.green_mob, player.x,player.y, 200);
    
    //this.green_mob.reset(x,y);
};

Game.LevelColors_grayGate.prototype = {
    
    create: function(){
        
        this.stage.back_2groundColor = '#3A5963';
        respawn = this.game.add.group();
        
        map = this.game.add.tilemap('colorsMap_neural');
   
        map.addTilesetImage('ground_2_colorMap');
        map.addTilesetImage('ground_1_colorMap');
        botLayer = map.createLayer('botLayer');
        botLayer2 = map.createLayer('botLayer2');
                // OBJECT LAYER
        objectLayer = map.createLayer('objectLayer');  
        botLayer.resizeWorld();
                //HERE IS THE START POSITION
        map.createFromObjects('objectLayer',820 , '' ,0,true,false,respawn);
        
        
//        player = this.add.sprite(0,0,'player');
//        player.anchor.setTo(0.5,0.5);
//        map.setCollisionBetween(1, 100000, true, 'botLayer2');  //!!!
//        
//        //PLAYER SPAWNS AT THE SET POSITION
//        this.spawn();
//        
//        player.animations.add('walkdown',[2,3,4,5],13,true);
//        player.animations.add('walkup',[6,7,8,9,10,11],13,true);
//        player.animations.add('walkleft',[14,15,16,17],13,true);
//        player.animations.add('walkright',[20,21,22,23],13,true);
//        player.animations.add('idle',[0,1],4,true);
//        
        
        player = this.add.sprite(300,6300,'soldatPlayer');
        player.anchor.setTo(0.5,0.5);
        
        
        //PLAYER SPAWNS AT THE SET POSITION
        this.spawn();
        
        
        player.animations.add('walkdown',[240,241,242,243,244,245,246,247,248],13,true);
        player.animations.add('walkup',[192,193,194,195,196,197,198,199,200],13,true);
        player.animations.add('walkleft',[216,217,218,219,220,221,222,223,224],13,true);
        player.animations.add('walkright',[264,266,267,268,269,270,271,272],13,true);
        player.animations.add('attackUp',[529,532,535,538,541,544],20,true);
        player.animations.add('attackLeft',[601,604,607,610,613,616],20,true);
        player.animations.add('attackDown',[673,676,679,682,685],20,true);
        player.animations.add('attackRight',[745,748,751,754,757],20,true);
        
        player.animations.add('dead',[480,481,482,483,484,485],10,false,true);
        player.animations.add('idle',[673,676],4,true);
        
        
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
            down : this.input.keyboard.addKey(Phaser.Keyboard.S),
            
            
            
        }
        
        pauseKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
        pauseKey.onDown.add(togglePause, this);
        
        enemy2_green = new GreenMob(0,this.game,1100,100);  
        enemy2_green.green_mob.inputEnabled = true;
        enemy2_black = new BlackMob(0,this.game,1100,250);
        enemy2_black.black_mob.inputEnabled = true;
        enemy2_yellow = new YellowMob(0,this.game,1100,400);
        enemy2_yellow.yellow_mob.inputEnabled = true;
        enemy2_white = new WhiteMob(0,this.game,1100,550);
        enemy2_white.white_mob.inputEnabled = true;
        
        green_mob_name = this.game.add.bitmapText(1100, 50, 'desyrel', 'Green Monster', 25);
        green_mob_name.anchor.x = 0.5;
        green_mob_name.anchor.y = 0.5;
        black_mob_name = this.game.add.bitmapText(1100, 200, 'desyrel', 'Red Monster', 25);
        black_mob_name.anchor.x = 0.5;
        black_mob_name.anchor.y = 0.5;
        yellow_mob_name = this.game.add.bitmapText(1100, 350, 'desyrel', 'Yellow Monster', 25);
        yellow_mob_name.anchor.x = 0.5;
        yellow_mob_name.anchor.y = 0.5;
        white_mob_name = this.game.add.bitmapText(1100, 500, 'desyrel', 'White Monster', 25);
        white_mob_name.anchor.x = 0.5;
        white_mob_name.anchor.y = 0.5;

        
        
        //DOOR
        gray_door_grayGate = this.add.sprite(1470   ,250,'gray_big_door');
        this.physics.arcade.enable(gray_door_grayGate);
        gray_door_grayGate.anchor.setTo(0.5,0.5);
        gray_door_grayGate.body.collideWorldBounds = true;
        gray_door_grayGate.body.immovable = true;
        //info cloud
        infoCloud_grayGate = this.add.sprite(1150   ,150,'cloud_info'); //new CloudInfo(0,this.game,this.game.width-150, this.game.height/2);
        this.physics.arcade.enable(infoCloud_grayGate);
        infoCloud_grayGate.inputEnabled = true;
        infoCloud_grayGate.anchor.setTo(0.5,0.5);
        infoCloud_grayGate.body.collideWorldBounds = true;
        infoCloud_grayGate.body.immovable = true;
        infoCloud_grayGate.events.onInputDown.add(this.testMessageBox_2, this);
        
        
        
        
        
        explosion_2_green_2 = this.add.sprite(300,300,'explosion_sprite');
        explosion_2_green_2.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_2_green_2);
        explosion_2_green_2.alpha = 0.01; 
        explosion_2_green_2.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_2_red_2 = this.add.sprite(300,300,'explosion_sprite');
        explosion_2_red_2.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_2_red_2);
        explosion_2_red_2.alpha = 0.01; 
        explosion_2_red_2.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_2_yellow_2 = this.add.sprite(300,300,'explosion_sprite');
        explosion_2_yellow_2.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_2_yellow_2);
        explosion_2_yellow_2.alpha = 0.01; 
        explosion_2_yellow_2.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_2_white_2 = this.add.sprite(300,300,'explosion_sprite');
        explosion_2_white_2.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_2_white_2);
        explosion_2_white_2.alpha = 0.01; 
        explosion_2_white_2.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        buttonTest_2=this.game.add.sprite((this.game.width - 163),0,'testButton');
                this.physics.arcade.enable(buttonTest_2);
        buttonTest_2.body.collideWorldBounds = true;
        buttonTest_2.body.immovable = true;
    	buttonTest_2.anchor.set(0.5,0.5);
    	buttonTest_2.inputEnabled=true;
    	buttonTest_2.events.onInputDown.add(this.testMessageBox_2,this);  
        buttonTest_2.alpha = 0;
        
    },
    
    update:function(){
    if(this.state.getCurrentState().key == 'LevelColors_grayGate')
    {    
        if(mobs_killed_until_now_2 == 4 && buttonCloseBoxPressed_2 == false){
            this.testMessageBox_2();
            buttonTest_2.alpha = 1;
            buttonCloseBoxPressed_2 = true;
        }
        
        
        this.physics.arcade.collide(player,botLayer2);  
        this.physics.arcade.collide(player,gray_door_grayGate);
        this.physics.arcade.collide(player,gray_door_grayGate,this.teleportToAnotherTrainMap_darkGreenGate,null,this);
        //this.physics.arcade.collide(player,infoCloud_grayGate,this.teleportToAnotherTrainMap_darkGreenGate,null,this);
        
        //green collide
        this.physics.arcade.overlap(enemy2_green.green_mob, enemy2_black.black_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy2_green.green_mob, enemy2_yellow.yellow_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy2_green.green_mob, enemy2_white.white_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy2_green.green_mob, enemy2_black.black_mob, collideEnemy, null, this); 
        //red
        this.physics.arcade.overlap(enemy2_black.black_mob, enemy2_yellow.yellow_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy2_black.black_mob, enemy2_white.white_mob, collideEnemy, null, this);
        //yellow
        this.physics.arcade.overlap(enemy2_yellow.yellow_mob, enemy2_white.white_mob, collideEnemy, null, this);
        
        
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        
        //region mob name follow->mob
        green_mob_name.x = enemy2_green.green_mob.x;
        green_mob_name.y = enemy2_green.green_mob.y - 50;
        
        black_mob_name.x = enemy2_black.black_mob.x;
        black_mob_name.y = enemy2_black.black_mob.y - 50;
        
        yellow_mob_name.x = enemy2_yellow.yellow_mob.x;
        yellow_mob_name.y = enemy2_yellow.yellow_mob.y - 50;
        
        white_mob_name.x = enemy2_white.white_mob.x;
        white_mob_name.y = enemy2_white.white_mob.y - 50;
        
        //explosion_2 animation follow
        explosion_2_green_2.x = enemy2_green.green_mob.x;
        explosion_2_green_2.y = enemy2_green.green_mob.y;
        explosion_2_red_2.x = enemy2_black.black_mob.x;
        explosion_2_red_2.y = enemy2_black.black_mob.y;
        explosion_2_yellow_2.x = enemy2_yellow.yellow_mob.x;
        explosion_2_yellow_2.y = enemy2_yellow.yellow_mob.y;
        explosion_2_white_2.x = enemy2_white.white_mob.x;
        explosion_2_white_2.y = enemy2_white.white_mob.y;
        
        //end region mob name
        
        
        if(checkOverlap(player,gray_door_grayGate)){
            this.teleportToAnotherTrainMap_darkGreenGate();
        }
        
        if(infoCloud_grayGate.input.pointerOver()){
            infoCloud_grayGate.scale.setTo(1.5,1.5);
        }else{
            infoCloud_grayGate.scale.setTo(1,1);
        }
        
        
               
        //check destroy green mob
        if (enemy2_green.green_mob.input.pointerOver())
        {
            enemy2_green.green_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_2_green_2.alpha = 1; 
                //explosion_2_green_2.x = enemy2_green.green_mob.x;
                //explosion_2_green_2.y = enemy2_green.green_mob.y;
                explosion_2_green_2.animations.play('explo');
                enemy2_green.green_mob.kill();
                green_mob_name.kill();
                
                green_mob_dead_2 = true;
                mobs_killed_until_now_2++;
                green_mob_killed_order_2 = mobs_killed_until_now_2;
            }
        }
        else
        {
            enemy2_green.green_mob.alpha = 1;
        }
        
        
        //check destroy red mob
        if (enemy2_black.black_mob.input.pointerOver())
        {
            enemy2_black.black_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_2_red_2.alpha = 1; 
                //explosion_2_red_2.x = enemy2_black.black_mob.x;
                //explosion_2_red_2.y = enemy2_black.black_mob.y;
                explosion_2_red_2.animations.play('explo');
                enemy2_black.black_mob.kill();
                black_mob_name.kill();
                
                black_mob_dead_2 = true;
                mobs_killed_until_now_2++;
                black_mob_killed_order_2 = mobs_killed_until_now_2;
            }
        }
        else
        {
            enemy2_black.black_mob.alpha = 1;
        }
        
        //check destroy yellow mob
        if (enemy2_yellow.yellow_mob.input.pointerOver())
        {
            enemy2_yellow.yellow_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_2_yellow_2.alpha = 1; 
                //explosion_2_yellow_2.x = enemy2_yellow.yellow_mob.x;
                //explosion_2_yellow_2.y = enemy2_yellow.yellow_mob.y;
                explosion_2_yellow_2.animations.play('explo');
                enemy2_yellow.yellow_mob.kill();
                yellow_mob_name.kill();
                
                yellow_mob_dead_2 = true;
                mobs_killed_until_now_2++;
                yellow_mob_killed_order_2 = mobs_killed_until_now_2;
            }
        }
        else
        {
            enemy2_yellow.yellow_mob.alpha = 1;
        }
        
        //check white green mob
        if (enemy2_white.white_mob.input.pointerOver())
        {
            enemy2_white.white_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_2_white_2.alpha = 1; 
                //explosion_2_white_2.x = enemy2_white.white_mob.x;
                //explosion_2_white_2.y = enemy2_white.white_mob.y;
                explosion_2_white_2.animations.play('explo');
                enemy2_white.white_mob.kill();
                white_mob_name.kill();
                
                white_mob_dead_2 = true;
                mobs_killed_until_now_2++;
                white_mob_killed_order_2 = mobs_killed_until_now_2;
            }
        }
        else
        {
            enemy2_white.white_mob.alpha = 1;
        }
        
        //check explosion_2 anim end
        if (explosion_2_green_2.frame == 14){
            explosion_2_green_2.alpha = 0.01; 
        }
        if (explosion_2_red_2.frame == 14){
            explosion_2_red_2.alpha = 0.01; 
        }
        if (explosion_2_yellow_2.frame == 14){
            explosion_2_yellow_2.alpha = 0.01; 
        }
        if (explosion_2_white_2.frame == 14){
            explosion_2_white_2.alpha = 0.01; 
        }
            
        //region PLAYER MOVE
        if(player.body.velocity.x ==0 && player.body.velocity.y ==0 ){
            if(checkDeadPlayer==false && !this.game.input.activePointer.isDown){
                player.animations.play('idle');
            }
            
        }
        if(controls.right.isDown && deadAnimPlayed==false && !this.game.input.activePointer.isDown){
            player.animations.play('walkright');
            //player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed;
            //copy

        }
        if(controls.left.isDown && deadAnimPlayed==false && !this.game.input.activePointer.isDown){
            player.animations.play('walkleft');
            //player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;  
            //COPY

        }          
        if(controls.up.isDown && deadAnimPlayed==false && !this.game.input.activePointer.isDown){
             player.body.velocity.y -= playerSpeed;
            
             player.animations.play('walkup');
            //COPY

         }      
        if(controls.down.isDown && deadAnimPlayed==false && !this.game.input.activePointer.isDown){
             player.body.velocity.y += playerSpeed;
            
             player.animations.play('walkdown');

         }
        //END REGION PLAYER MOVE
        
        //check attack on mouse ->sword
        if (this.game.input.activePointer.isDown && deadAnimPlayed==false)
        {
            if(this.game.input.activePointer.positionDown.x + this.game.camera.x > player.x+100 ){
                 player.animations.play('attackRight');
                 //playerCopy.animations.play('attackRight');
             }
            else if(this.game.input.activePointer.positionDown.x + this.game.camera.x < player.x-100){
                 player.animations.play('attackLeft');
                 //playerCopy.animations.play('attackLeft');
             }
            else if(this.game.input.activePointer.positionDown.y + this.game.camera.y > player.y){
                 player.animations.play('attackDown');
                 //playerCopy.animations.play('attackDown');
             }
            else {
                 player.animations.play('attackUp');
                 //playerCopy.animations.play('attackUp');
             }
           
        }
        
        //check green mob follow player
        if((Phaser.Math.distance(player.x, player.y, enemy2_green.green_mob.x, enemy2_green.green_mob.y) <= 400) 
           && Phaser.Math.distance(enemy2_green.originx, enemy2_green.originy, enemy2_green.green_mob.x, enemy2_green.green_mob.y) <= 400 
           && this.checkOverlapMonsters() == false ){
            this.game.physics.arcade.moveToXY(enemy2_green.green_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy2_green.green_mob, enemy2_green.originx,enemy2_green.originy, 250);
        }
        
        //check red mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy2_black.black_mob.x, enemy2_black.black_mob.y) <= 400 
           && Phaser.Math.distance(enemy2_black.originx, enemy2_black.originy, enemy2_black.black_mob.x, enemy2_black.black_mob.y) <= 400 
           && this.checkOverlapMonsters() == false){
            this.game.physics.arcade.moveToXY(enemy2_black.black_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy2_black.black_mob, enemy2_black.originx,enemy2_black.originy, 250);
        }
        
        //check yellow mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy2_yellow.yellow_mob.x,enemy2_yellow.yellow_mob.y) <= 400 
           && Phaser.Math.distance(enemy2_yellow.originx, enemy2_yellow.originy, enemy2_yellow.yellow_mob.x, enemy2_yellow.yellow_mob.y) <= 400 
           && this.checkOverlapMonsters() == false){
            this.game.physics.arcade.moveToXY(enemy2_yellow.yellow_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy2_yellow.yellow_mob, enemy2_yellow.originx,enemy2_yellow.originy, 250);
        }
        
        //check white mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy2_white.white_mob.x, enemy2_white.white_mob.y) <= 400  
           && Phaser.Math.distance(enemy2_white.originx, enemy2_white.originy, enemy2_white.white_mob.x, enemy2_white.white_mob.y) <= 400 
           && this.checkOverlapMonsters() == false  ){
            this.game.physics.arcade.moveToXY(enemy2_white.white_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy2_white.white_mob, enemy2_white.originx,enemy2_white.originy, 250);
        }
        
        
        //check green mob animation
        if(player.x < enemy2_green.green_mob.x){
            enemy2_green.green_mob.animations.play('green_mob_anim_walk_left', 8, true);
        }else{
            enemy2_green.green_mob.animations.play('green_mob_anim_walk_right', 8, true);
        }
        
        //check red mob animation
        if(player.x < enemy2_black.black_mob.x){
            enemy2_black.black_mob.animations.play('black_mob_anim_walk_left', 8, true);
        }else{
            enemy2_black.black_mob.animations.play('black_mob_anim_walk_right', 8, true);
        }
        
        //check yellow mob animation
        if(player.x < enemy2_yellow.yellow_mob.x){
            enemy2_yellow.yellow_mob.animations.play('yellow_mob_anim_walk_left', 8, true);
        }else{
            enemy2_yellow.yellow_mob.animations.play('yellow_mob_anim_walk_right', 8, true);
        }
        
        //check white mob animation
        if(player.x < enemy2_green.green_mob.x){
            enemy2_white.white_mob.animations.play('white_mob_anim_walk_left', 8, true);
        }else{
            enemy2_white.white_mob.animations.play('white_mob_anim_walk_right', 8, true);
        }
        
        //check green mob atacking
        if(checkOverlap(player,enemy2_green.green_mob) && enemy2_green.green_mob.alive){
            element.value-=1;
        }
        
        //check red mob atacking
        if(checkOverlap(player,enemy2_black.black_mob) && enemy2_black.black_mob.alive){
            element.value-=1;
        }
        
        //check yellow mob atacking
        if(checkOverlap(player,enemy2_yellow.yellow_mob) && enemy2_yellow.yellow_mob.alive){
            element.value-=1;
        }
        
        //check white mob atacking
        if(checkOverlap(player,enemy2_white.white_mob) && enemy2_white.white_mob.alive){
            element.value-=1;
        }
        
        //check play dead anim
        if(element.value==0 && deadAnimPlayed==false){
            if(checkDeadPlayer == false){
                           waitingTime = this.game.time.now + 1400;
                           checkDeadPlayer = true;
                        }
                player.animations.play('dead');
                deadAnimPlayed = true;
        }
        
        //check revive
        if (this.game.time.now > waitingTime && checkDeadPlayer == true){
                        this.resetPlayer();
                        element.value=100;
                        player.reset(300,500);
                        checkDeadPlayer = false;
                        deadAnimPlayed = false;
                      
        
        }
    }
    
    },
    
    //RESET PLAYER TO GIVEN POSITION
    resetPlayer :function(){
        player.reset(100,560);
        player.animations.play('idle');
    },
    
    //SPAWN FUNCTION
    spawn : function(){
        element = document.getElementById("HPBar");
        //alert(element.value)
        respawn.forEach(function(spawnPoint){
            player.reset(spawnPoint.x,spawnPoint.y);
        },this);
        element.value = 100;
    },
    
    showMessageBox: function(text, w = 100, h = 100) {
    	//just in case the message box already exists
    	//destroy it
        if (msgBox_2) {
            msgBox_2.destroy();
        }
        //make a group to hold all the elements
        msgBox_2 = this.game.add.group();
        //make the back_2 of the message box
        back_2 = this.game.add.sprite(0, 0, "boxBack");
        //make the close button
        closeButton_2 = this.game.add.sprite(0, 0, "closeButton");
        //make a text field
        text1_2 = this.game.add.text(0, 0, text);
        //set the textfeild to wrap if the text is too long
        text1_2.wordWrap = true;
        //make the width of the wrap 90% of the width 
        //of the message box
        text1_2.wordWrapWidth = w * .9;
        //
        //
        //set the width and height passed
        //in the parameters
        back_2.width = w;
        back_2.height = h;
        //
        //
        //
        //add the elements to the group
        msgBox_2.add(back_2);
        msgBox_2.add(closeButton_2);
        msgBox_2.add(text1_2);
        //
        //set the close button
        //in the center horizontally
        //and near the bottom of the box vertically
        closeButton_2.x = back_2.width / 2 - closeButton_2.width / 2;
        closeButton_2.y = back_2.height - closeButton_2.height;
        //enable the button for input
        closeButton_2.inputEnabled = true;
        //add a listener to destroy the box when the button is pressed
        closeButton_2.events.onInputDown.add(this.hideBox, this);
        //
        //
        //set the message box in the center of the screen
        msgBox_2.x = this.game.width / 2 - msgBox_2.width / 2;
        msgBox_2.y = this.game.height / 2 - msgBox_2.height;
        //
        //set the text in the middle of the message box
        text1_2.x = back_2.width / 2 - text1_2.width / 2;
        text1_2.y = back_2.height / 2 - text1_2.height / 2;
        //make a state reference to the messsage box
        //this.msgBox_2 = msgBox_2;
    },
    
    testMessageBox_2 : function() {
        //call this line of code when you want to show the message box
        //message, width and height
        this.showMessageBox("Your score is: "+ this.getScore_grayGate(), this.game.width * .4, this.game.height * .4);
    },
    
    hideBox: function() {
    	//destroy the box when the button is pressed
        msgBox_2.alpha = 0;
        msgBox_2.destroy();
        //buttonCloseBoxPressed_2 = true;
    },
    
    getScore_grayGate: function(){
        var final_score_2 = 0;
        //inseamna ca a omorat cele 2 culori bune
        if( (black_mob_killed_order_2 == 1 && white_mob_killed_order_2 == 2) || (black_mob_killed_order_2 == 2 && white_mob_killed_order_2 == 1) ){
            if(yellow_mob_dead_2 == false && green_mob_dead_2 == false){
                final_score_2 = 100;
            }else if((green_mob_dead_2 == true && yellow_mob_dead_2 == false) || (green_mob_dead_2 == false && yellow_mob_dead_2 == true)){
                final_score_2 = 90;
            }else if(green_mob_dead_2 == true && yellow_mob_dead_2 == true){
                final_score_2 = 80;
            }
        }else{
            if(green_mob_dead_2 == 1 || yellow_mob_killed_order_2 == 1 || green_mob_dead_2 == 2 || yellow_mob_killed_order_2 == 2){
                final_score_2 = 50;
            }else{
                final_score_2 = 0;
            }
        }
        return final_score_2;
    },
    
    checkOverlapMonsters : function(){
        if(checkOverlap(enemy2_green.green_mob,enemy2_black.black_mob) 
            || checkOverlap(enemy2_green.green_mob,enemy2_yellow.yellow_mob)
            || checkOverlap(enemy2_green.green_mob,enemy2_white.white_mob)
           
            || checkOverlap(enemy2_black.black_mob,enemy2_yellow.yellow_mob)
            || checkOverlap(enemy2_black.black_mob,enemy2_white.white_mob)
           
            || checkOverlap(enemy2_yellow.yellow_mob,enemy2_white.white_mob)
          ){
            return true;
        }else{
            return false;
        }   
    },
    
    infoCloud_grayGateMessage: function(){
        this.showMessageBox("So do you wanna procced and fid out your final score?Press Y for yes, N for no. ", this.game.width * .4, this.game.height * .4);
    },
    
    teleportToAnotherTrainMap_darkGreenGate : function(){
        this.state.start('LevelColors_darkGreenGate');
    }
    
    
};

function togglePause() {

    this.game.physics.arcade.isPaused = (this.game.physics.arcade.isPaused) ? false : true;

}

function checkOverlapCookie(spriteA,spriteB){
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    
    return Phaser.Rectangle.intersects(boundsA,boundsB);
}

function collideEnemy(player, enemy) {

	player.immune = true;

	// Knocks back_2 enemy after colliding
	enemy.follow = false;
	if(enemy.body.touching.left) {
		enemy.body.velocity.x = 256;
	} else if (enemy.body.touching.right) {
		enemy.body.velocity.x = -256;
	} else if (enemy.body.touching.up) {
		enemy.body.velocity.y = 256;	
	} else if (enemy.body.touching.down) {
		enemy.body.velocity.y = -256;
	}

	// Makes the player immune for 1 second and then resets it and the enemy following movement
	this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function() {
		player.immune = false;
		enemy.follow = true;
	}, this);
}




    