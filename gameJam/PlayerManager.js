class PlayerManager{
    constructor(){
        this.playerSprite;
    }
    preload(){

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
        tempPlayer.maxSpeed = 2;
        tempPlayer.friction = 0.1;
        tempPlayer.setCollider('rectangle', 0, 0, 80, 80);
        tempPlayer.debug = true;
        return tempPlayer;
    }
    keyPressed(){
        tempPlayer.setSpeed(0,0)

        if(keyIsDown(RIGHT_ARROW)){
            tempPlayer.addSpeed(2,0);
        }

        if(keyIsDown(LEFT_ARROW)){
            tempPlayer.addSpeed(2,180);
        }
    }
    playerCamera(){
        camera.position.x = tempPlayer.position.x;
    }
}