let playerSpriteIdle, playerWalk1, playerWalk2, playerWalk3;

class PlayerManager{
    constructor(){
        this.playerSprite;
    }
    preload(){
        this.tempPlayer.playerSpriteLoad();
    }
    playerSpriteLoad(){
        playerSpriteIdle = loadImage("./assets/sprites/playerIdle.png");
        playerWalk1 = loadImage("./assets/sprites/playerWalk1.png");
        playerWalk2 = loadImage("./assets/sprites/playerWalk2.png");
        playerWalk3 = loadImage("./assets/sprites/playerWalk3.png");
    }
    setup(){
        let playerX = width/2;
        let playerY = 500;
        this.playerSprite = this.makePlayer(playerX,playerY,25,45)
    }
    draw(){
        this.keyPressed();
        this.playerCamera();
    }
    makePlayer(x,y,size,size2){
        tempPlayer = createSprite(x,y,size,size2);
        tempPlayer.addImage(playerSpriteIdle);
        tempPlayer.maxSpeed = 2;
        tempPlayer.friction = 0.1;
        tempPlayer.setCollider('rectangle', 0, 0, 23, 43);
        tempPlayer.addAnimation("idle",playerSpriteIdle);
        tempPlayer.addAnimation("walk",playerWalk1,playerWalk2,playerWalk3);
        tempPlayer.debug = true;
        return tempPlayer;
    }
    keyPressed(){
        tempPlayer.setSpeed(0,0)
        tempPlayer.changeAnimation("idle")
        

        if(keyIsDown(RIGHT_ARROW)){
            tempPlayer.mirrorX(1)
            tempPlayer.addSpeed(2,0);
            tempPlayer.changeAnimation("walk");
            tempPlayer.rotateToDirection = 0;
        }

        if(keyIsDown(LEFT_ARROW)){
            tempPlayer.mirrorX(-1)
            tempPlayer.addSpeed(2,180);
            tempPlayer.changeAnimation("walk");
            tempPlayer.rotateToDirection = 180;
        } 
    }
    playerCamera(){
        camera.position.x = tempPlayer.position.x;
    }
}