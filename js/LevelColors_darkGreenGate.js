Game.LevelColors_darkGreenGate = function(game){
   
};

var map;
var layer;
var botLayer;
var botLayer2;
var objectLayer;
var music;
var respawn;
var darkGreen_door;//here
var infoCloud_darkGreenGate;

var player;
var controls = {};
var playerSpeed = 350;
var jumpTimer = 0;

var pauseKey;

var enemy3_green;  
var enemy3_red;
var enemy3_yellow;
var enemy3_black;

var green_mob_name_3;
var red_mob_name_3;
var yellow_mob_name_3;
var black_mob_name_3;

var waitingTime_3=0;
var checkDeadPlayer=false;
var deadAnimPlayed = false;

var green_mob_dead_3 = false;
var red_mob_dead_3 = false;
var yellow_mob_dead_3 = false;
var black_mob_dead_3 = false;

var green_mob_killed_order_3 = -1;
var red_mob_killed_order_3 = -1;
var yellow_mob_killed_order_3 = -1;
var black_mob_killed_order_3 = -1;

var mobs_killed_until_now_3 = 0;

var buttonCloseBoxPressed_3= false;
var back_3;
var text1_3;
var closeButton_3;
var msgBox_3;
var explosion_3;
var buttonTest_3;

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

RedMob = function(index,game,x,y){
    this.originx=x;
    this.originy=y;
    this.red_mob =  game.add.sprite(x,y,'red_mob');
    this.red_mob.anchor.setTo(0.5,0.5);
    this.red_mob.name = index.toString();
    //game.physics.enable(this.mummy,Phaser.Physics.ARCADE);
    
        //game.physics.arcade.enable(this.cookie3);
        game.physics.enable(this.red_mob,Phaser.Physics.ARCADE);
        this.red_mob.animations.add('red_mob_anim');
        this.red_mob.animations.add('red_mob_anim_walk_left',[4,5,6,7]);
        this.red_mob.animations.add('red_mob_anim_walk_right',[0,1,2,3]);
        //this.green_mob.animations.add('green_mob_anim_walk_right',[5,6,7,8,9,15,16,17,18,19,25,26,27,28,29,35,36,37]);
        //this.green_mob.animations.add('green_mob_anim_atack',[33,35,35,37,15]);
        this.red_mob.animations.play('red_mob_anim_walk_left', 8, true);
        this.red_mob.body.collideWorldBounds = true;
        this.red_mob.body.immovable = true;
        this.red_mob.body.allowGravity = false;
    
    //this.green_mob.body.immovable = true;
    //this.green_mob.body.collideWorldBounds = true;
    //this.green_mob.body.allowGravity = false;

//    this.red_mob_tween = game.add.tween(this.red_mob).to({
//        y: this.red_mob.y + 50,
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

Game.LevelColors_darkGreenGate.prototype = {
    
    create: function(){
        
        this.stage.back_3groundColor = '#3A5963';
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
        
        enemy3_green = new GreenMob(2,this.game,1100,100);  
        enemy3_green.green_mob.inputEnabled = true;
        enemy3_red = new RedMob(2,this.game,1100,250);
        enemy3_red.red_mob.inputEnabled = true;
        enemy3_yellow = new YellowMob(2,this.game,1100,400);
        enemy3_yellow.yellow_mob.inputEnabled = true;
        enemy3_black = new BlackMob(2,this.game,1100,550);
        enemy3_black.black_mob.inputEnabled = true;
        
        green_mob_name_3 = this.game.add.bitmapText(1100, 50, 'desyrel', 'Green Monster', 25);
        green_mob_name_3.anchor.x = 0.5;
        green_mob_name_3.anchor.y = 0.5;
        red_mob_name_3 = this.game.add.bitmapText(1100, 200, 'desyrel', 'Red Monster', 25);
        red_mob_name_3.anchor.x = 0.5;
        red_mob_name_3.anchor.y = 0.5;
        yellow_mob_name_3 = this.game.add.bitmapText(1100, 350, 'desyrel', 'Yellow Monster', 25);
        yellow_mob_name_3.anchor.x = 0.5;
        yellow_mob_name_3.anchor.y = 0.5;
        black_mob_name_3 = this.game.add.bitmapText(1100, 500, 'desyrel', 'White Monster', 25);
        black_mob_name_3.anchor.x = 0.5;
        black_mob_name_3.anchor.y = 0.5;

        
        
        //DOOR
        darkGreen_door = this.add.sprite(1470   ,250,'darkGreen_big_door');
        this.physics.arcade.enable(darkGreen_door);
        darkGreen_door.anchor.setTo(0.5,0.5);
        darkGreen_door.body.collideWorldBounds = true;
        darkGreen_door.body.immovable = true;
        //info cloud
        infoCloud_darkGreenGate = this.add.sprite(1150   ,400,'cloud_info'); //new CloudInfo(0,this.game,this.game.width-150, this.game.height/2);
        this.physics.arcade.enable(infoCloud_darkGreenGate);
        infoCloud_darkGreenGate.inputEnabled = true;
        infoCloud_darkGreenGate.anchor.setTo(0.5,0.5);
        infoCloud_darkGreenGate.body.collideWorldBounds = true;
        infoCloud_darkGreenGate.body.immovable = true;
        infoCloud_darkGreenGate.events.onInputDown.add(this.testMessageBox_3, this);
        
        
        
        
        
        explosion_3_green = this.add.sprite(300,300,'explosion_sprite');
        explosion_3_green.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_3_green);
        explosion_3_green.alpha = 0.01; 
        explosion_3_green.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_3_red = this.add.sprite(300,300,'explosion_sprite');
        explosion_3_red.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_3_red);
        explosion_3_red.alpha = 0.01; 
        explosion_3_red.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_3_yellow = this.add.sprite(300,300,'explosion_sprite');
        explosion_3_yellow.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_3_yellow);
        explosion_3_yellow.alpha = 0.01; 
        explosion_3_yellow.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_3_white = this.add.sprite(300,300,'explosion_sprite');
        explosion_3_white.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_3_white);
        explosion_3_white.alpha = 0.01; 
        explosion_3_white.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        buttonTest_3=this.game.add.sprite((this.game.width - 163),0,'testButton');
                this.physics.arcade.enable(buttonTest_3);
        buttonTest_3.body.collideWorldBounds = true;
        buttonTest_3.body.immovable = true;
    	buttonTest_3.anchor.set(0.5,0.5);
    	buttonTest_3.inputEnabled=true;
    	buttonTest_3.events.onInputDown.add(this.testMessageBox_3,this);  
        buttonTest_3.alpha = 0;
        
    },
    
    update:function(){
    if(this.state.getCurrentState().key == 'LevelColors_darkGreenGate')
    { 
        if(mobs_killed_until_now_3 == 4 && buttonCloseBoxPressed_3 == false){
            this.testMessageBox_3();
            buttonTest_3.alpha = 1;
            buttonCloseBoxPressed_3 = true;
        }
        
        
        this.physics.arcade.collide(player,botLayer2);  
        this.physics.arcade.collide(player,darkGreen_door);
        //
        
        this.physics.arcade.collide(player,darkGreen_door,this.teleportToAnotherTrainMap_purpleGate,null,this);
        
        //green collide
        this.physics.arcade.overlap(enemy3_green.green_mob, enemy3_red.red_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy3_green.green_mob, enemy3_yellow.yellow_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy3_green.green_mob, enemy3_black.black_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy3_green.green_mob, enemy3_red.red_mob, collideEnemy, null, this); 
        //red
        this.physics.arcade.overlap(enemy3_red.red_mob, enemy3_yellow.yellow_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy3_red.red_mob, enemy3_black.black_mob, collideEnemy, null, this);
        //yellow
        this.physics.arcade.overlap(enemy3_yellow.yellow_mob, enemy3_black.black_mob, collideEnemy, null, this);
        
        
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        
        //region mob name follow->mob
        green_mob_name_3.x = enemy3_green.green_mob.x;
        green_mob_name_3.y = enemy3_green.green_mob.y - 50;
        
        red_mob_name_3.x = enemy3_red.red_mob.x;
        red_mob_name_3.y = enemy3_red.red_mob.y - 50;
        
        yellow_mob_name_3.x = enemy3_yellow.yellow_mob.x;
        yellow_mob_name_3.y = enemy3_yellow.yellow_mob.y - 50;
        
        black_mob_name_3.x = enemy3_black.black_mob.x;
        black_mob_name_3.y = enemy3_black.black_mob.y - 50;
        
        //explosion_3 animation follow
        explosion_3_green.x = enemy3_green.green_mob.x;
        explosion_3_green.y = enemy3_green.green_mob.y;
        explosion_3_red.x = enemy3_red.red_mob.x;
        explosion_3_red.y = enemy3_red.red_mob.y;
        explosion_3_yellow.x = enemy3_yellow.yellow_mob.x;
        explosion_3_yellow.y = enemy3_yellow.yellow_mob.y;
        explosion_3_white.x = enemy3_black.black_mob.x;
        explosion_3_white.y = enemy3_black.black_mob.y;
        
        //end region mob name
        
        if(checkOverlap(player,darkGreen_door)){
            this.teleportToAnotherTrainMap_purpleGate();
        }
        
        if(infoCloud_darkGreenGate.input.pointerOver()){
            infoCloud_darkGreenGate.scale.setTo(1.5,1.5);
        }else{
            infoCloud_darkGreenGate.scale.setTo(1,1);
        }
        
        //check destroy green mob
        if (enemy3_green.green_mob.input.pointerOver())
        {
            enemy3_green.green_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_3_green.alpha = 1; 
                //explosion_3_green.x = enemy3_green.green_mob.x;
                //explosion_3_green.y = enemy3_green.green_mob.y;
                explosion_3_green.animations.play('explo');
                enemy3_green.green_mob.kill();
                green_mob_name_3.kill();
                
                green_mob_dead_3 = true;
                mobs_killed_until_now_3++;
                green_mob_killed_order_3 = mobs_killed_until_now_3;
            }
        }
        else
        {
            enemy3_green.green_mob.alpha = 1;
        }
        
        
        //check destroy red mob
        if (enemy3_red.red_mob.input.pointerOver())
        {
            enemy3_red.red_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_3_red.alpha = 1; 
                //explosion_3_red.x = enemy3_red.red_mob.x;
                //explosion_3_red.y = enemy3_red.red_mob.y;
                explosion_3_red.animations.play('explo');
                enemy3_red.red_mob.kill();
                red_mob_name_3.kill();
                
                red_mob_dead_3 = true;
                mobs_killed_until_now_3++;
                red_mob_killed_order_3 = mobs_killed_until_now_3;
            }
        }
        else
        {
            enemy3_red.red_mob.alpha = 1;
        }
        
        //check destroy yellow mob
        if (enemy3_yellow.yellow_mob.input.pointerOver())
        {
            enemy3_yellow.yellow_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_3_yellow.alpha = 1; 
                //explosion_3_yellow.x = enemy3_yellow.yellow_mob.x;
                //explosion_3_yellow.y = enemy3_yellow.yellow_mob.y;
                explosion_3_yellow.animations.play('explo');
                enemy3_yellow.yellow_mob.kill();
                yellow_mob_name_3.kill();
                
                yellow_mob_dead_3 = true;
                mobs_killed_until_now_3++;
                yellow_mob_killed_order_3 = mobs_killed_until_now_3;
            }
        }
        else
        {
            enemy3_yellow.yellow_mob.alpha = 1;
        }
        
        //check white green mob
        if (enemy3_black.black_mob.input.pointerOver())
        {
            enemy3_black.black_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_3_white.alpha = 1; 
                //explosion_3_white.x = enemy3_black.black_mob.x;
                //explosion_3_white.y = enemy3_black.black_mob.y;
                explosion_3_white.animations.play('explo');
                enemy3_black.black_mob.kill();
                black_mob_name_3.kill();
                
                black_mob_dead_3 = true;
                mobs_killed_until_now_3++;
                black_mob_killed_order_3 = mobs_killed_until_now_3;
            }
        }
        else
        {
            enemy3_black.black_mob.alpha = 1;
        }
        
        //check explosion_3 anim end
        if (explosion_3_green.frame == 14){
            explosion_3_green.alpha = 0.01; 
        }
        if (explosion_3_red.frame == 14){
            explosion_3_red.alpha = 0.01; 
        }
        if (explosion_3_yellow.frame == 14){
            explosion_3_yellow.alpha = 0.01; 
        }
        if (explosion_3_white.frame == 14){
            explosion_3_white.alpha = 0.01; 
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
        if((Phaser.Math.distance(player.x, player.y, enemy3_green.green_mob.x, enemy3_green.green_mob.y) <= 400) 
           && Phaser.Math.distance(enemy3_green.originx, enemy3_green.originy, enemy3_green.green_mob.x, enemy3_green.green_mob.y) <= 400 
           && this.checkOverlapMonsters() == false ){
            this.game.physics.arcade.moveToXY(enemy3_green.green_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy3_green.green_mob, enemy3_green.originx,enemy3_green.originy, 250);
        }
        
        //check red mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy3_red.red_mob.x, enemy3_red.red_mob.y) <= 400 
           && Phaser.Math.distance(enemy3_red.originx, enemy3_red.originy, enemy3_red.red_mob.x, enemy3_red.red_mob.y) <= 400 
           && this.checkOverlapMonsters() == false){
            this.game.physics.arcade.moveToXY(enemy3_red.red_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy3_red.red_mob, enemy3_red.originx,enemy3_red.originy, 250);
        }
        
        //check yellow mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy3_yellow.yellow_mob.x,enemy3_yellow.yellow_mob.y) <= 400 
           && Phaser.Math.distance(enemy3_yellow.originx, enemy3_yellow.originy, enemy3_yellow.yellow_mob.x, enemy3_yellow.yellow_mob.y) <= 400 
           && this.checkOverlapMonsters() == false){
            this.game.physics.arcade.moveToXY(enemy3_yellow.yellow_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy3_yellow.yellow_mob, enemy3_yellow.originx,enemy3_yellow.originy, 250);
        }
        
        //check white mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy3_black.black_mob.x, enemy3_black.black_mob.y) <= 400  
           && Phaser.Math.distance(enemy3_black.originx, enemy3_black.originy, enemy3_black.black_mob.x, enemy3_black.black_mob.y) <= 400 
           && this.checkOverlapMonsters() == false  ){
            this.game.physics.arcade.moveToXY(enemy3_black.black_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy3_black.black_mob, enemy3_black.originx,enemy3_black.originy, 250);
        }
        
        
        //check green mob animation
        if(player.x < enemy3_green.green_mob.x){
            enemy3_green.green_mob.animations.play('green_mob_anim_walk_left', 8, true);
        }else{
            enemy3_green.green_mob.animations.play('green_mob_anim_walk_right', 8, true);
        }
        
        //check red mob animation
        if(player.x < enemy3_red.red_mob.x){
            enemy3_red.red_mob.animations.play('red_mob_anim_walk_left', 8, true);
        }else{
            enemy3_red.red_mob.animations.play('red_mob_anim_walk_right', 8, true);
        }
        
        //check yellow mob animation
        if(player.x < enemy3_yellow.yellow_mob.x){
            enemy3_yellow.yellow_mob.animations.play('yellow_mob_anim_walk_left', 8, true);
        }else{
            enemy3_yellow.yellow_mob.animations.play('yellow_mob_anim_walk_right', 8, true);
        }
        
        //check white mob animation
        if(player.x < enemy3_green.green_mob.x){
            enemy3_black.black_mob.animations.play('black_mob_anim_walk_left', 8, true);
        }else{
            enemy3_black.black_mob.animations.play('black_mob_anim_walk_right', 8, true);
        }
        
        //check green mob atacking
        if(checkOverlap(player,enemy3_green.green_mob) && enemy3_green.green_mob.alive){
            element.value-=1;
        }
        
        //check red mob atacking
        if(checkOverlap(player,enemy3_red.red_mob) && enemy3_red.red_mob.alive){
            element.value-=1;
        }
        
        //check yellow mob atacking
        if(checkOverlap(player,enemy3_yellow.yellow_mob) && enemy3_yellow.yellow_mob.alive){
            element.value-=1;
        }
        
        //check white mob atacking
        if(checkOverlap(player,enemy3_black.black_mob) && enemy3_black.black_mob.alive){
            element.value-=1;
        }
        
        //check play dead anim
        if(element.value==0 && deadAnimPlayed==false){
            if(checkDeadPlayer == false){
                           waitingTime_3 = this.game.time.now + 1400;
                           checkDeadPlayer = true;
                        }
                player.animations.play('dead');
                deadAnimPlayed = true;
        }
        
        //check revive
        if (this.game.time.now > waitingTime_3 && checkDeadPlayer == true){
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
    
    showMessageBox_3: function(text, w = 100, h = 100) {
    	//just in case the message box already exists
    	//destroy it
        if (msgBox_3) {
            msgBox_3.destroy();
        }
        //make a group to hold all the elements
        msgBox_3 = this.game.add.group();
        //make the back_3 of the message box
        back_3 = this.game.add.sprite(0, 0, "boxback");
        //make the close button
        closeButton_3 = this.game.add.sprite(0, 0, "closeButton");
        //make a text field
        text1_3 = this.game.add.text(0, 0, text);
        //set the textfeild to wrap if the text is too long
        text1_3.wordWrap = true;
        //make the width of the wrap 90% of the width 
        //of the message box
        text1_3.wordWrapWidth = w * .9;
        //
        //
        //set the width and height passed
        //in the parameters
        back_3.width = w;
        back_3.height = h;
        //
        //
        //
        //add the elements to the group
        msgBox_3.add(back_3);
        msgBox_3.add(closeButton_3);
        msgBox_3.add(text1_3);
        //
        //set the close button
        //in the center horizontally
        //and near the bottom of the box vertically
        closeButton_3.x = back_3.width / 2 - closeButton_3.width / 2;
        closeButton_3.y = back_3.height - closeButton_3.height;
        //enable the button for input
        closeButton_3.inputEnabled = true;
        //add a listener to destroy the box when the button is pressed
        closeButton_3.events.onInputDown.add(this.hideBox, this);
        //
        //
        //set the message box in the center of the screen
        msgBox_3.x = this.game.width / 2 - msgBox_3.width / 2;
        msgBox_3.y = this.game.height / 2 - msgBox_3.height;
        //
        //set the text in the middle of the message box
        text1_3.x = back_3.width / 2 - text1_3.width / 2;
        text1_3.y = back_3.height / 2 - text1_3.height / 2;
        //make a state reference to the messsage box
        //this.msgBox_3 = msgBox_3;
    },
    
    testMessageBox_3 : function() {
        //call this line of code when you want to show the message box
        //message, width and height
        this.showMessageBox_3("Your score is: "+ this.getScore_3(), this.game.width * .4, this.game.height * .4);
    },
    
    hideBox: function() {
    	//destroy the box when the button is pressed
        msgBox_3.alpha = 0;
        msgBox_3.destroy();
        //buttonCloseBoxPressed_3 = true;
    },
    
    getScore_3: function(){
        var final_score_3 = 0;
        //inseamna ca a omorat cele 2 culori bune
        if( (green_mob_killed_order_3 == 1 && black_mob_killed_order_3 == 2) || (green_mob_killed_order_3 == 2 && black_mob_killed_order_3 == 1) ){
            if(yellow_mob_dead_3 == false && red_mob_dead_3 == false){
                final_score_3 = 100;
            }else if((yellow_mob_dead_3 == true && red_mob_dead_3 == false) || (yellow_mob_dead_3 == false && red_mob_dead_3 == true)){
                final_score_3 = 90;
            }else if(yellow_mob_dead_3 == true && red_mob_dead_3 == true){
                final_score_3 = 80;
            }
        }else{
            if(yellow_mob_dead_3 == 1 || red_mob_dead_3 == 1 || yellow_mob_dead_3 == 2 || red_mob_dead_3 == 2){
                final_score_3 = 50;
            }else{
                final_score_3 = 0;
            }
        }
        return final_score_3;
    },
    
    checkOverlapMonsters : function(){
        if(checkOverlap(enemy3_green.green_mob,enemy3_red.red_mob) 
            || checkOverlap(enemy3_green.green_mob,enemy3_yellow.yellow_mob)
            || checkOverlap(enemy3_green.green_mob,enemy3_black.black_mob)
           
            || checkOverlap(enemy3_red.red_mob,enemy3_yellow.yellow_mob)
            || checkOverlap(enemy3_red.red_mob,enemy3_black.black_mob)
           
            || checkOverlap(enemy3_yellow.yellow_mob,enemy3_black.black_mob)
          ){
            return true;
        }else{
            return false;
        }   
    },
    
    infoCloud_darkGreenGateMessage: function(){
        this.showMessageBox_3("So do you wanna procced and fid out your final score?Press Y for yes, N for no. ", this.game.width * .4, this.game.height * .4);
    },
    
    teleportToAnotherTrainMap_purpleGate :function(){
        this.state.start('LevelColors_purpleGate');
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

	// Knocks back_3 enemy after colliding
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




    