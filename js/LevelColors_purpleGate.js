Game.LevelColors_purpleGate = function(game){
   
};

var map;
var layer;
var botLayer;
var botLayer2;
var objectLayer;
var music;
var respawn;
var purple_big_door;
var infoCloud_purpleGate;

var player;
var controls = {};
var playerSpeed = 350;
var jumpTimer = 0;

var pauseKey;

var enemy4_green;  
var enemy4_red;
var enemy4_yellow;
var enemy4_white;

var green_mob_name_4;
var red_mob_name_4;
var yellow_mob_name_4;
var white_mob_name_4;

var waitingTime_4=0;
var checkDeadPlayer_4=false;
var deadAnimPlayed_4 = false;

var green_mob_dead_4 = false;
var red_mob_dead_4 = false;
var yellow_mob_dead_4 = false;
var white_mob_dead_4 = false;

var green_mob_killed_order_4 = -1;
var red_mob_killed_order_4 = -1;
var yellow_mob_killed_order_4 = -1;
var white_mob_killed_order_4 = -1;

var mobs_killed_until_now_4 = 0;

var buttonCloseBoxPressed_4= false;
var back_4;
var text1_4;
var closeButton_4;
var msgBox_4;
var explosion_4;
var buttonTest_4;

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

Game.LevelColors_purpleGate.prototype = {
    
    create: function(){
        
        this.stage.back_4groundColor = '#3A5963';
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
        
        enemy4_green = new GreenMob(0,this.game,1100,100);  
        enemy4_green.green_mob.inputEnabled = true;
        enemy4_red = new RedMob(0,this.game,1100,250);
        enemy4_red.red_mob.inputEnabled = true;
        enemy4_yellow = new YellowMob(0,this.game,1100,400);
        enemy4_yellow.yellow_mob.inputEnabled = true;
        enemy4_white = new WhiteMob(0,this.game,1100,550);
        enemy4_white.white_mob.inputEnabled = true;
        
        green_mob_name_4 = this.game.add.bitmapText(1100, 50, 'desyrel', 'Green Monster', 25);
        green_mob_name_4.anchor.x = 0.5;
        green_mob_name_4.anchor.y = 0.5;
        red_mob_name_4 = this.game.add.bitmapText(1100, 200, 'desyrel', 'Red Monster', 25);
        red_mob_name_4.anchor.x = 0.5;
        red_mob_name_4.anchor.y = 0.5;
        yellow_mob_name_4 = this.game.add.bitmapText(1100, 350, 'desyrel', 'Yellow Monster', 25);
        yellow_mob_name_4.anchor.x = 0.5;
        yellow_mob_name_4.anchor.y = 0.5;
        white_mob_name_4 = this.game.add.bitmapText(1100, 500, 'desyrel', 'White Monster', 25);
        white_mob_name_4.anchor.x = 0.5;
        white_mob_name_4.anchor.y = 0.5;

        
        
        //DOOR
        purple_big_door = this.add.sprite(1470   ,250,'purple_big_door');
        this.physics.arcade.enable(purple_big_door);
        purple_big_door.body.collideWorldBounds = true;
        purple_big_door.body.immovable = true;
        //info cloud
        infoCloud_purpleGate = this.add.sprite(1150   ,150,'cloud_info'); //new CloudInfo(0,this.game,this.game.width-150, this.game.height/2);
        this.physics.arcade.enable(infoCloud_purpleGate);
        infoCloud_purpleGate.anchor.setTo(0.5,0.5);
        infoCloud_purpleGate.body.collideWorldBounds = true;
        infoCloud_purpleGate.body.immovable = true;
        infoCloud_purpleGate.inputEnabled = true;
        infoCloud_purpleGate.events.onInputDown.add(this.testMessageBox_4, this);
        
        
        
        explosion_4_green = this.add.sprite(300,300,'explosion_sprite');
        explosion_4_green.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_4_green);
        explosion_4_green.alpha = 0.01; 
        explosion_4_green.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_4_red = this.add.sprite(300,300,'explosion_sprite');
        explosion_4_red.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_4_red);
        explosion_4_red.alpha = 0.01; 
        explosion_4_red.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_4_yellow = this.add.sprite(300,300,'explosion_sprite');
        explosion_4_yellow.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_4_yellow);
        explosion_4_yellow.alpha = 0.01; 
        explosion_4_yellow.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        explosion_4_white = this.add.sprite(300,300,'explosion_sprite');
        explosion_4_white.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(explosion_4_white);
        explosion_4_white.alpha = 0.01; 
        explosion_4_white.animations.add('explo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        
        buttonTest_4=this.game.add.sprite((this.game.width - 163),0,'testButton');
                this.physics.arcade.enable(buttonTest_4);
        buttonTest_4.body.collideWorldBounds = true;
        buttonTest_4.body.immovable = true;
    	buttonTest_4.anchor.set(0.5,0.5);
    	buttonTest_4.inputEnabled=true;
    	buttonTest_4.events.onInputDown.add(this.testMessageBox_4,this);  
        buttonTest_4.alpha = 0;
        
    },
    
    update:function(){
    if(this.state.getCurrentState().key == 'LevelColors_purpleGate')
    {
        if(mobs_killed_until_now_4 == 4 && buttonCloseBoxPressed_4 == false){
            this.testMessageBox_4();
            buttonTest_4.alpha = 1;
            buttonCloseBoxPressed_4 = true;
        }
        
        
        this.physics.arcade.collide(player,botLayer2);  
        this.physics.arcade.collide(player,purple_big_door);
        this.physics.arcade.collide(player,infoCloud_purpleGate,this.teleportToAnotherTrainMap_lightBlueGate,null,this);
        
        //green collide
        this.physics.arcade.overlap(enemy4_green.green_mob, enemy4_red.red_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy4_green.green_mob, enemy4_yellow.yellow_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy4_green.green_mob, enemy4_white.white_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy4_green.green_mob, enemy4_red.red_mob, collideEnemy, null, this); 
        //red
        this.physics.arcade.overlap(enemy4_red.red_mob, enemy4_yellow.yellow_mob, collideEnemy, null, this);
        this.physics.arcade.overlap(enemy4_red.red_mob, enemy4_white.white_mob, collideEnemy, null, this);
        //yellow
        this.physics.arcade.overlap(enemy4_yellow.yellow_mob, enemy4_white.white_mob, collideEnemy, null, this);
        
        
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        
        //region mob name follow->mob
        green_mob_name_4.x = enemy4_green.green_mob.x;
        green_mob_name_4.y = enemy4_green.green_mob.y - 50;
        
        red_mob_name_4.x = enemy4_red.red_mob.x;
        red_mob_name_4.y = enemy4_red.red_mob.y - 50;
        
        yellow_mob_name_4.x = enemy4_yellow.yellow_mob.x;
        yellow_mob_name_4.y = enemy4_yellow.yellow_mob.y - 50;
        
        white_mob_name_4.x = enemy4_white.white_mob.x;
        white_mob_name_4.y = enemy4_white.white_mob.y - 50;
        
        //explosion_4 animation follow
        explosion_4_green.x = enemy4_green.green_mob.x;
        explosion_4_green.y = enemy4_green.green_mob.y;
        explosion_4_red.x = enemy4_red.red_mob.x;
        explosion_4_red.y = enemy4_red.red_mob.y;
        explosion_4_yellow.x = enemy4_yellow.yellow_mob.x;
        explosion_4_yellow.y = enemy4_yellow.yellow_mob.y;
        explosion_4_white.x = enemy4_white.white_mob.x;
        explosion_4_white.y = enemy4_white.white_mob.y;
        
        //end region mob name
        
        if(checkOverlap(player,purple_big_door)){
            this.teleportToAnotherTrainMap_lightBlueGate();
        }
        
        if(infoCloud_purpleGate.input.pointerOver()){
            infoCloud_purpleGate.scale.setTo(1.5,1.5);
        }else{
            infoCloud_purpleGate.scale.setTo(1,1);
        }
        
        //check destroy green mob
        if (enemy4_green.green_mob.input.pointerOver())
        {
            enemy4_green.green_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_4_green.alpha = 1; 
                //explosion_4_green.x = enemy4_green.green_mob.x;
                //explosion_4_green.y = enemy4_green.green_mob.y;
                explosion_4_green.animations.play('explo');
                enemy4_green.green_mob.kill();
                green_mob_name_4.kill();
                
                green_mob_dead_4 = true;
                mobs_killed_until_now_4++;
                green_mob_killed_order_4 = mobs_killed_until_now_4;
            }
        }
        else
        {
            enemy4_green.green_mob.alpha = 1;
        }
        
        
        //check destroy red mob
        if (enemy4_red.red_mob.input.pointerOver())
        {
            enemy4_red.red_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_4_red.alpha = 1; 
                //explosion_4_red.x = enemy4_red.red_mob.x;
                //explosion_4_red.y = enemy4_red.red_mob.y;
                explosion_4_red.animations.play('explo');
                enemy4_red.red_mob.kill();
                red_mob_name_4.kill();
                
                red_mob_dead_4 = true;
                mobs_killed_until_now_4++;
                red_mob_killed_order_4 = mobs_killed_until_now_4;
            }
        }
        else
        {
            enemy4_red.red_mob.alpha = 1;
        }
        
        //check destroy yellow mob
        if (enemy4_yellow.yellow_mob.input.pointerOver())
        {
            enemy4_yellow.yellow_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_4_yellow.alpha = 1; 
                //explosion_4_yellow.x = enemy4_yellow.yellow_mob.x;
                //explosion_4_yellow.y = enemy4_yellow.yellow_mob.y;
                explosion_4_yellow.animations.play('explo');
                enemy4_yellow.yellow_mob.kill();
                yellow_mob_name_4.kill();
                
                yellow_mob_dead_4 = true;
                mobs_killed_until_now_4++;
                yellow_mob_killed_order_4 = mobs_killed_until_now_4;
            }
        }
        else
        {
            enemy4_yellow.yellow_mob.alpha = 1;
        }
        
        //check white green mob
        if (enemy4_white.white_mob.input.pointerOver())
        {
            enemy4_white.white_mob.alpha = 0.5;
            if(this.game.input.activePointer.isDown){
                explosion_4_white.alpha = 1; 
                //explosion_4_white.x = enemy4_white.white_mob.x;
                //explosion_4_white.y = enemy4_white.white_mob.y;
                explosion_4_white.animations.play('explo');
                enemy4_white.white_mob.kill();
                white_mob_name_4.kill();
                
                white_mob_dead_4 = true;
                mobs_killed_until_now_4++;
                white_mob_killed_order_4 = mobs_killed_until_now_4;
            }
        }
        else
        {
            enemy4_white.white_mob.alpha = 1;
        }
        
        //check explosion_4 anim end
        if (explosion_4_green.frame == 14){
            explosion_4_green.alpha = 0.01; 
        }
        if (explosion_4_red.frame == 14){
            explosion_4_red.alpha = 0.01; 
        }
        if (explosion_4_yellow.frame == 14){
            explosion_4_yellow.alpha = 0.01; 
        }
        if (explosion_4_white.frame == 14){
            explosion_4_white.alpha = 0.01; 
        }
            
        //region PLAYER MOVE
        if(player.body.velocity.x ==0 && player.body.velocity.y ==0 ){
            if(checkDeadPlayer_4==false && !this.game.input.activePointer.isDown){
                player.animations.play('idle');
            }
            
        }
        if(controls.right.isDown && deadAnimPlayed_4==false && !this.game.input.activePointer.isDown){
            player.animations.play('walkright');
            //player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed;
            //copy

        }
        if(controls.left.isDown && deadAnimPlayed_4==false && !this.game.input.activePointer.isDown){
            player.animations.play('walkleft');
            //player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;  
            //COPY

        }          
        if(controls.up.isDown && deadAnimPlayed_4==false && !this.game.input.activePointer.isDown){
             player.body.velocity.y -= playerSpeed;
            
             player.animations.play('walkup');
            //COPY

         }      
        if(controls.down.isDown && deadAnimPlayed_4==false && !this.game.input.activePointer.isDown){
             player.body.velocity.y += playerSpeed;
            
             player.animations.play('walkdown');

         }
        //END REGION PLAYER MOVE
        
        //check attack on mouse ->sword
        if (this.game.input.activePointer.isDown && deadAnimPlayed_4==false)
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
        if((Phaser.Math.distance(player.x, player.y, enemy4_green.green_mob.x, enemy4_green.green_mob.y) <= 400) 
           && Phaser.Math.distance(enemy4_green.originx, enemy4_green.originy, enemy4_green.green_mob.x, enemy4_green.green_mob.y) <= 400 
           && this.checkOverlapMonsters() == false ){
            this.game.physics.arcade.moveToXY(enemy4_green.green_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy4_green.green_mob, enemy4_green.originx,enemy4_green.originy, 250);
        }
        
        //check red mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy4_red.red_mob.x, enemy4_red.red_mob.y) <= 400 
           && Phaser.Math.distance(enemy4_red.originx, enemy4_red.originy, enemy4_red.red_mob.x, enemy4_red.red_mob.y) <= 400 
           && this.checkOverlapMonsters() == false){
            this.game.physics.arcade.moveToXY(enemy4_red.red_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy4_red.red_mob, enemy4_red.originx,enemy4_red.originy, 250);
        }
        
        //check yellow mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy4_yellow.yellow_mob.x,enemy4_yellow.yellow_mob.y) <= 400 
           && Phaser.Math.distance(enemy4_yellow.originx, enemy4_yellow.originy, enemy4_yellow.yellow_mob.x, enemy4_yellow.yellow_mob.y) <= 400 
           && this.checkOverlapMonsters() == false){
            this.game.physics.arcade.moveToXY(enemy4_yellow.yellow_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy4_yellow.yellow_mob, enemy4_yellow.originx,enemy4_yellow.originy, 250);
        }
        
        //check white mob follow player
        if(Phaser.Math.distance(player.x, player.y, enemy4_white.white_mob.x, enemy4_white.white_mob.y) <= 400  
           && Phaser.Math.distance(enemy4_white.originx, enemy4_white.originy, enemy4_white.white_mob.x, enemy4_white.white_mob.y) <= 400 
           && this.checkOverlapMonsters() == false  ){
            this.game.physics.arcade.moveToXY(enemy4_white.white_mob, player.x,player.y, 250);
        }else{
            this.game.physics.arcade.moveToXY(enemy4_white.white_mob, enemy4_white.originx,enemy4_white.originy, 250);
        }
        
        
        //check green mob animation
        if(player.x < enemy4_green.green_mob.x){
            enemy4_green.green_mob.animations.play('green_mob_anim_walk_left', 8, true);
        }else{
            enemy4_green.green_mob.animations.play('green_mob_anim_walk_right', 8, true);
        }
        
        //check red mob animation
        if(player.x < enemy4_red.red_mob.x){
            enemy4_red.red_mob.animations.play('red_mob_anim_walk_left', 8, true);
        }else{
            enemy4_red.red_mob.animations.play('red_mob_anim_walk_right', 8, true);
        }
        
        //check yellow mob animation
        if(player.x < enemy4_yellow.yellow_mob.x){
            enemy4_yellow.yellow_mob.animations.play('yellow_mob_anim_walk_left', 8, true);
        }else{
            enemy4_yellow.yellow_mob.animations.play('yellow_mob_anim_walk_right', 8, true);
        }
        
        //check white mob animation
        if(player.x < enemy4_green.green_mob.x){
            enemy4_white.white_mob.animations.play('white_mob_anim_walk_left', 8, true);
        }else{
            enemy4_white.white_mob.animations.play('white_mob_anim_walk_right', 8, true);
        }
        
        //check green mob atacking
        if(checkOverlap(player,enemy4_green.green_mob) && enemy4_green.green_mob.alive){
            element.value-=1;
        }
        
        //check red mob atacking
        if(checkOverlap(player,enemy4_red.red_mob) && enemy4_red.red_mob.alive){
            element.value-=1;
        }
        
        //check yellow mob atacking
        if(checkOverlap(player,enemy4_yellow.yellow_mob) && enemy4_yellow.yellow_mob.alive){
            element.value-=1;
        }
        
        //check white mob atacking
        if(checkOverlap(player,enemy4_white.white_mob) && enemy4_white.white_mob.alive){
            element.value-=1;
        }
        
        //check play dead anim
        if(element.value==0 && deadAnimPlayed_4==false){
            if(checkDeadPlayer_4 == false){
                           waitingTime_4 = this.game.time.now + 1400;
                           checkDeadPlayer_4 = true;
                        }
                player.animations.play('dead');
                deadAnimPlayed_4 = true;
        }
        
        //check revive
        if (this.game.time.now > waitingTime_4 && checkDeadPlayer_4 == true){
                        this.resetPlayer();
                        element.value=100;
                        player.reset(300,500);
                        checkDeadPlayer_4 = false;
                        deadAnimPlayed_4 = false;
                      
        
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
    
    showMessageBox_4: function(text, w = 100, h = 100) {
    	//just in case the message box already exists
    	//destroy it
        if (msgBox_4) {
            msgBox_4.destroy();
        }
        //make a group to hold all the elements
        msgBox_4 = this.game.add.group();
        //make the back_4 of the message box
        back_4 = this.game.add.sprite(0, 0, "boxback");
        //make the close button
        closeButton_4 = this.game.add.sprite(0, 0, "closeButton");
        //make a text field
        text1_4 = this.game.add.text(0, 0, text);
        //set the textfeild to wrap if the text is too long
        text1_4.wordWrap = true;
        //make the width of the wrap 90% of the width 
        //of the message box
        text1_4.wordWrapWidth = w * .9;
        //
        //
        //set the width and height passed
        //in the parameters
        back_4.width = w;
        back_4.height = h;
        //
        //
        //
        //add the elements to the group
        msgBox_4.add(back_4);
        msgBox_4.add(closeButton_4);
        msgBox_4.add(text1_4);
        //
        //set the close button
        //in the center horizontally
        //and near the bottom of the box vertically
        closeButton_4.x = back_4.width / 2 - closeButton_4.width / 2;
        closeButton_4.y = back_4.height - closeButton_4.height;
        //enable the button for input
        closeButton_4.inputEnabled = true;
        //add a listener to destroy the box when the button is pressed
        closeButton_4.events.onInputDown.add(this.hideBox, this);
        //
        //
        //set the message box in the center of the screen
        msgBox_4.x = this.game.width / 2 - msgBox_4.width / 2;
        msgBox_4.y = this.game.height / 2 - msgBox_4.height;
        //
        //set the text in the middle of the message box
        text1_4.x = back_4.width / 2 - text1_4.width / 2;
        text1_4.y = back_4.height / 2 - text1_4.height / 2;
        //make a state reference to the messsage box
        //this.msgBox_4 = msgBox_4;
    },
    
    testMessageBox_4 : function() {
        //call this line of code when you want to show the message box
        //message, width and height
        this.showMessageBox_4("Your score is: "+ this.getScore_4(), this.game.width * .4, this.game.height * .4);
    },
    
    hideBox: function() {
    	//destroy the box when the button is pressed
        msgBox_4.alpha = 0;
        msgBox_4.destroy();
        //buttonCloseBoxPressed_4 = true;
    },
    
    getScore_4: function(){
        var final_score_4 = 0;
        //inseamna ca a omorat cele 2 culori bune
        if( (red_mob_killed_order_4 == 1 && yellow_mob_killed_order_4 == 2) || (red_mob_killed_order_4 == 2 && yellow_mob_killed_order_4 == 1) ){
            if(green_mob_dead_4 == false && white_mob_dead_4 == false){
                final_score_4 = 100;
            }else if((green_mob_dead_4 == true && white_mob_dead_4 == false) || (green_mob_dead_4 == false && white_mob_dead_4 == true)){
                final_score_4 = 90;
            }else if(green_mob_dead_4 == true && white_mob_dead_4 == true){
                final_score_4 = 80;
            }
        }else{
            if(red_mob_killed_order_4 == 1 || yellow_mob_killed_order_4 == 1 || red_mob_killed_order_4 == 2 || yellow_mob_killed_order_4 == 2){
                final_score_4 = 50;
            }else{
                final_score_4 = 0;
            }
        }
        return final_score_4;
    },
    
    checkOverlapMonsters : function(){
        if(checkOverlap(enemy4_green.green_mob,enemy4_red.red_mob) 
            || checkOverlap(enemy4_green.green_mob,enemy4_yellow.yellow_mob)
            || checkOverlap(enemy4_green.green_mob,enemy4_white.white_mob)
           
            || checkOverlap(enemy4_red.red_mob,enemy4_yellow.yellow_mob)
            || checkOverlap(enemy4_red.red_mob,enemy4_white.white_mob)
           
            || checkOverlap(enemy4_yellow.yellow_mob,enemy4_white.white_mob)
          ){
            return true;
        }else{
            return false;
        }   
    },
    
    infoCloud_purpleGateMessage: function(){
        this.showMessageBox_4("So do you wanna procced and fid out your final score?Press Y for yes, N for no. ", this.game.width * .4, this.game.height * .4);
    },
    
    teleportToAnotherTrainMap_lightBlueGate :function(){
        this.state.start('LevelColors_lightBlueGate');
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

	// Knocks back_4 enemy after colliding
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




    