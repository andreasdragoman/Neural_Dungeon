
EnemyCookieType3 = function(index,game,x,y){
    this.cookie3 =  game.add.sprite(x,y,'cookiemonster2');
    this.cookie3.anchor.setTo(0.5,0.5);
    this.cookie3.name = index.toString();
    //game.physics.enable(this.cookie3,Phaser.Physics.ARCADE);
    
        //game.physics.arcade.enable(this.cookie3);
        game.physics.enable(this.cookie3,Phaser.Physics.ARCADE);
        this.cookie3.animations.add('cookie3_anim');
        this.cookie3.animations.play('cookie3_anim', 12, true);
        this.cookie3.body.collideWorldBounds = true;
        this.cookie3.body.immovable = true;
        this.cookie3.body.allowGravity = false;
    
    //this.cookie3.body.immovable = true;
    //this.cookie3.body.collideWorldBounds = true;
    //this.cookie3.body.allowGravity = false;

    /*this.cookie3Tween = game.add.tween(this.cookie3).to({
        y: yy,
        x: xx
    },2000,'Linear',true,0,100,true);*/
    
    game.physics.arcade.moveToXY(this.cookie3, player.x,player.y, 200);
    
    
    //this.cookie3.reset(x,y);
};

Phaser.Tilemap.prototype.setCollisionBetween = function (start, stop, collides, layer, recalculate) {

	if (collides === undefined) { collides = true; }
	if (layer === undefined) { layer = this.currentLayer; }
	if (recalculate === undefined) { recalculate = true; }

	layer = this.getLayer(layer);

	for (var index = start; index <= stop; index++)
	{
		if (collides)
		{
			this.collideIndexes.push(index);
		}
		else
		{
			var i = this.collideIndexes.indexOf(index);

			if (i > -1)
			{
				this.collideIndexes.splice(i, 1);
			}
		}
	}

	for (var y = 0; y < this.layers[layer].height; y++)
	{
		for (var x = 0; x < this.layers[layer].width; x++)
		{
			var tile = this.layers[layer].data[y][x];

			if (tile && tile.index >= start && tile.index <= stop)
			{
				if (collides)
				{
					tile.setCollision(true, true, true, true);
				}
				else
				{
					tile.resetCollision();
				}

				tile.faceTop = collides;
				tile.faceBottom = collides;
				tile.faceLeft = collides;
				tile.faceRight = collides;
			}
		}
	}

	if (recalculate)
	{
		//  Now re-calculate interesting faces
		this.calculateFaces(layer);
	}

	return layer;

};

Game.LevelCookieMainCamera = function(game){
};
//////ids///
var id=10;
var npcId=1;
var mainNpcId=1;
//////ids
var map;
var layer;
var music;
var fire;
var respawn;
var enemy1;
var enemy2;
var enemy3;
var enemy4;

var player;
var controls = {};
var playerSpeed = 500;
var jumpTimer = 0;
var pauseKey;
var element;
var isPlayer=false;

var checkDeadMonster = new Array(5);
var numberOfMonsters = 5;
var shootTime = 0;
var bullets;
var numberOfCookies;

 

Game.LevelCookieMainCamera.prototype = {
    create: function(){
        this.stage.backgroundColor = '#3A5963';
        pausedgame = false;
        this.game.time.advancedTiming = true;
        var i;
        for(i=0;i<numberOfMonsters;i++){
            checkDeadMonster[i] = false;
        }
        numberOfCookies = 0;
        // OBJECT !!!  THATS HOW IT WORKS , NEEDS A GROUP
        respawn = this.game.add.group();
        //
        
        this.map = this.game.add.tilemap('CookieMainCamera');             
      
        this.map.addTilesetImage('city_ground');
        this.map.addTilesetImage('ground_cookie');
        this.map.addTilesetImage('cookietrees3'); 
                            
        this.layer1 = this.map.createLayer('layer1');     
        this.layer2 = this.map.createLayer('layer2');
        this.layer3 = this.map.createLayer('layer3');
        this.layer4 = this.map.createLayer('layer4');
        this.layer5 = this.map.createLayer('layer5');

        this.layer1.resizeWorld();
        
    this.map.createFromObjects('objectLayer',1829 , '' ,0,true,false,respawn);
        
        //MUSIC
        //music = this.game.add.audio('soundKey');
        //music.play(); // REMOVE THIS IF YOU DONT WANT MUSIC
        
        //SPRITES
              
        
        //PLAYER
    
        this.map.setCollisionBetween(1, 100000, true, 'layer2',true);

        
        player = this.add.sprite(500,500,'player');
        player.anchor.setTo(0.5,0.5);
        
         console.log("Am ajuns aici");
        //PLAYER SPAWNS AT THE SET POSITION
        this.spawn();
        
        
        player.animations.add('walkdown',[2,3,4,5],13,true);
        player.animations.add('walkup',[6,7,8,9,10,11],13,true);
        player.animations.add('walkleft',[14,15,16,17],13,true);
        player.animations.add('walkright',[20,21,22,23],13,true);
        player.animations.add('idle',[0,1],4,true);
        
        
        //this.physics.arcade.enable(player);
        this.game.physics.enable(player, Phaser.Physics.ARCADE);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
            down : this.input.keyboard.addKey(Phaser.Keyboard.S),
            shoot : this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            
            
        }
        
        pauseKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
        pauseKey.onDown.add(togglePause, this);
        
        //SPRITES
        
        //Main camera npc
        mainNpc = this.add.sprite(1710,1670,'mainNpc');
        //fire.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(mainNpc);
        //topMapNpc.animations.add('topMapNpc_anim');
        //topMapNpc.animations.play('topMapNpc_anim', 12, true);
        mainNpc.body.collideWorldBounds = true;
        mainNpc.body.immovable = true;
        
        //Stone near npc
        stoneMainNpc = this.add.sprite(1800,1670,'stoneMainNpc');
        //fire.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(stoneMainNpc);
        //topMapNpc.animations.add('topMapNpc_anim');
        //topMapNpc.animations.play('topMapNpc_anim', 12, true);
        stoneMainNpc.body.collideWorldBounds = true;
        stoneMainNpc.body.immovable = true;
        
        
        //TOP NPC LEFT
        topMapNpc1 = this.add.sprite(110,75,'topMapNpc');
        //fire.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(topMapNpc1);
        //topMapNpc.animations.add('topMapNpc_anim');
        //topMapNpc.animations.play('topMapNpc_anim', 12, true);
        topMapNpc1.body.collideWorldBounds = true;
        topMapNpc1.body.immovable = true;
 
        //TOP NPC RIGHT
        topMapNpc2 = this.add.sprite(2170,75,'topMapNpc');
        //fire.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(topMapNpc2);
        //topMapNpc.animations.add('topMapNpc_anim');
        //topMapNpc.animations.play('topMapNpc_anim', 12, true);
        topMapNpc2.body.collideWorldBounds = true;
        topMapNpc2.body.immovable = true;
        
        //COINS
        cookieAnimation1 = this.add.sprite(250,1100,'cookieAnimation');
        cookieAnimation1.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(cookieAnimation1);
        cookieAnimation1.animations.add('cookieAnimation1_anim',[0,1,4,5,8,9,12,13]);
        cookieAnimation1.animations.play('cookieAnimation_anim', 12, true);
        cookieAnimation1.body.collideWorldBounds = true;
        cookieAnimation1.body.immovable = true;
        cookieAnimation1.visible = false;
        
        cookieAnimation2 = this.add.sprite(1000,1100,'cookieAnimation');
        cookieAnimation2.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(cookieAnimation2);
        cookieAnimation2.animations.add('cookieAnimation2_anim',[0,1,4,5,8,9,12,13]);
        cookieAnimation2.animations.play('cookieAnimation2_anim', 12, true);
        cookieAnimation2.body.collideWorldBounds = true;
        cookieAnimation2.body.immovable = true;
        cookieAnimation2.visible = false;
        
        cookieAnimation3 = this.add.sprite(250,650,'cookieAnimation');
        cookieAnimation3.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(cookieAnimation3);
        cookieAnimation3.animations.add('cookieAnimation3_anim',[0,1,4,5,8,9,12,13]);
        cookieAnimation3.animations.play('cookieAnimation3_anim', 12, true);
        cookieAnimation3.body.collideWorldBounds = true;
        cookieAnimation3.body.immovable = true;
        cookieAnimation3.visible = false;
        
        cookieAnimation4 = this.add.sprite(1000,650,'cookieAnimation');
        cookieAnimation4.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(cookieAnimation4);
        cookieAnimation4.animations.add('cookieAnimation4_anim',[0,1,4,5,8,9,12,13]);
        cookieAnimation4.animations.play('cookieAnimation4_anim', 12, true);
        cookieAnimation4.body.collideWorldBounds = true;
        cookieAnimation4.body.immovable = true;
        cookieAnimation4.visible = false;
        
        //FOUNTAIN
        
        fountain1 = this.add.sprite(1820,1900,'fountain1');
        fountain1.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(fountain1);
        fountain1.animations.add('fountain1_anim',[0,1,2]);
        fountain1.animations.play('fountain1_anim', 12, true);
        fountain1.body.collideWorldBounds = true;
        fountain1.body.immovable = true;
        
        
        
        //MONSTERS
        enemy1 =  new EnemyCookieType3(0,this.game,750 , 950);
        enemy2 =  new EnemyCookieType3(1,this.game,200 , 950);
        enemy3 =  new EnemyCookieType3(2,this.game,750 , 700);
        enemy4 =  new EnemyCookieType3(3,this.game,200 , 700);
        
        
      bullets = this.game.add.group();
      bullets.enableBody = true;
      bullets.physicsBodyType = Phaser.Physics.ARCADE;
      bullets.createMultiple(10,'bullet',0,false);                //check nr of bullets
      bullets.setAll('anchor.x',0.5);
      bullets.setAll('anchor.y',0.5);
   
      bullets.setAll('outOfBoundsKill',true);    
      bullets.setAll('CheckWorldBounds',true);
        
    },
    
    
    update:function(){
         
        
        this.physics.arcade.collide(player,this.layer1);      
        this.physics.arcade.collide(player,this.layer2);
        this.physics.arcade.collide(player,topMapNpc1);
        this.physics.arcade.collide(player,topMapNpc2);
        //this.physics.arcade.collide(enemy1.cookie3,bullets);
        //this.physics.arcade.collide(enemy2.cookie3,bullets);
        //this.physics.arcade.collide(enemy3.cookie3,bullets);
        //this.physics.arcade.collide(enemy4.cookie3,bullets);
           
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        if(element.value<100)
        element.value+=0.5;
        if(controls.right.isDown){
            player.animations.play('walkright');
            //player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed; 
            
        }
         
      
        if(controls.left.isDown){
            player.animations.play('walkleft');
            //player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;  
            
        }
         
        
        if(controls.up.isDown){
             player.body.velocity.y -= playerSpeed;
            
             player.animations.play('walkup');
         }
        
        if(controls.down.isDown){
             player.body.velocity.y += playerSpeed;
            
             player.animations.play('walkdown');
         }
        
        
        if(player.body.velocity.x ==0 && player.body.velocity.y ==0 ){
            player.animations.play('idle');
        }
        
        if(controls.shoot.isDown)
            this.shootBullet();
        
        if(checkOverlap(player,enemy1.cookie3) && checkDeadMonster[1]==false){
            element.value-=2;
            if(element.value==0)
                {
                    this.resetPlayer();
                    element.value=100;
                    player.reset(500,500);
                }
                
                
        }else{
            this.game.physics.arcade.moveToXY(enemy1.cookie3, player.x,player.y, 200);
        }
        
        if(checkOverlap(player,enemy2.cookie3) && checkDeadMonster[2]==false){
            element.value-=2;
            if(element.value==0)
                {
                    this.resetPlayer();
                    element.value=100;
                    player.reset(500,500);
                }
                
                
        }else{
            this.game.physics.arcade.moveToXY(enemy2.cookie3, player.x,player.y, 200);
        }
        if(checkOverlap(player,enemy3.cookie3) && checkDeadMonster[3]==false){
            element.value-=2;
            if(element.value==0)
                {
                    this.resetPlayer();
                    element.value=100;
                    player.reset(500,500);
                }
                
                
        }else{
            this.game.physics.arcade.moveToXY(enemy3.cookie3, player.x,player.y, 200);
        }       
        if(checkOverlap(player,enemy4.cookie3) && checkDeadMonster[4]==false){
            element.value-=2;
            if(element.value==0)
                {
                    this.resetPlayer();
                    element.value=100;
                    player.reset(500,500);
                }
                
                
        }else{
            this.game.physics.arcade.moveToXY(enemy4.cookie3, player.x,player.y, 200);
        }
        
        if(checkOverlap(bullets,enemy1.cookie3) && checkDeadMonster[1]==false){
            cookieAnimation1.body.velocity.x = 0;
            cookieAnimation1.body.velocity.y = 0;
            checkDeadMonster[1] = true;
            this.game.physics.arcade.moveToXY(enemy1.cookie3, 1600,700, 9999);
            enemy1.cookie3.body.velocity.x = 0;
            enemy1.cookie3.body.velocity.y = 0;
            
            enemy1.cookie3.kill();
            cookieAnimation1.visible = true;
            bullet.kill();
        }
        if(checkOverlap(bullets,enemy2.cookie3) && checkDeadMonster[2]==false){
            cookieAnimation2.body.velocity.x = 0;
            cookieAnimation2.body.velocity.y = 0;
            checkDeadMonster[2] = true;
            this.game.physics.arcade.moveToXY(enemy2.cookie3, 1600,700, 9999);
            enemy2.cookie3.body.velocity.x = 0;
            enemy2.cookie3.body.velocity.y = 0;
            enemy2.cookie3.kill();
            cookieAnimation2.visible = true;
            bullet.kill();
        }
        if(checkOverlap(bullets,enemy3.cookie3) && checkDeadMonster[3]==false){
            cookieAnimation3.body.velocity.x = 0;
            cookieAnimation3.body.velocity.y = 0;
            checkDeadMonster[3] = true;
            this.game.physics.arcade.moveToXY(enemy3.cookie3, 1600,700, 9999);
            enemy3.cookie3.body.velocity.x = 0;
            enemy3.cookie3.body.velocity.y = 0;
            enemy3.cookie3.kill();
            cookieAnimation3.visible = true;
            bullet.kill();
        }
        if(checkOverlap(bullets,enemy4.cookie3) && checkDeadMonster[4]==false){
            cookieAnimation4.body.velocity.x = 0;
            cookieAnimation4.body.velocity.y = 0;
            checkDeadMonster[4] = true;
            this.game.physics.arcade.moveToXY(enemy4.cookie3, 1600,700, 9999);
            enemy4.cookie3.body.velocity.x = 0;
            enemy4.cookie3.body.velocity.y = 0;
            enemy4.cookie3.kill();
            cookieAnimation4.visible = true;
            bullet.kill();
        }
        
        if(checkOverlap(player,cookieAnimation1)){
            numberOfCookies = numberOfCookies + 1;
            cookieAnimation1.kill();
        }
        if(checkOverlap(player,cookieAnimation2)){
            numberOfCookies = numberOfCookies + 1;
            cookieAnimation2.kill();
        }
        if(checkOverlap(player,cookieAnimation3)){
            numberOfCookies = numberOfCookies + 1;
            cookieAnimation3.kill();
        }
        if(checkOverlap(player,cookieAnimation4)){
            numberOfCookies = numberOfCookies + 1;
            cookieAnimation4.kill();
        }
        
        
        
        if(checkDeadMonster[1]==false){
            this.game.physics.arcade.moveToXY(cookieAnimation1, enemy1.cookie3.x,enemy1.cookie3.y, 200);
        }
        if(checkDeadMonster[2]==false){
            this.game.physics.arcade.moveToXY(cookieAnimation2, enemy2.cookie3.x,enemy2.cookie3.y, 200);
        }
        if(checkDeadMonster[3]==false){
            this.game.physics.arcade.moveToXY(cookieAnimation3, enemy3.cookie3.x,enemy3.cookie3.y, 200);
        }
        if(checkDeadMonster[4]==false){
            this.game.physics.arcade.moveToXY(cookieAnimation4, enemy4.cookie3.x,enemy4.cookie3.y, 200);
        }
        
        
        
    },
    resetPlayer : function(){
        this.spawn();
    },
    spawn : function(){
          
        element = document.getElementById("HPBar");
        //alert(element.value);
        respawn.forEach(function(spawnPoint){
            player.reset(spawnPoint.x,spawnPoint.y);
        },this);
        isPlayer=true;
    },

    render:function() {
	this.game.debug.text(this.game.time.fps, 2, 14, "#33DBFF");
        if(isPlayer)
            {
                //alert(player);
                this.game.debug.spriteInfo(player, 32, 130,"#33DBFF");
                
            }
    },
    
    shootBullet :function(){
        if(this.time.now > shootTime){
            bullet = bullets.getFirstExists(false);
            if(bullet){
                bullet.reset(player.x,player.y);
                bullet.body.velocity.x += 250;
                shootTime = this.time.now + 150;
                
            }
        }
  },
    
     
};

function checkOverlapCookie(spriteA,spriteB){
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    
    return Phaser.Rectangle.intersects(boundsA,boundsB);
}
function togglePause() {

    this.game.physics.arcade.isPaused = (this.game.physics.arcade.isPaused) ? false : true;

}

