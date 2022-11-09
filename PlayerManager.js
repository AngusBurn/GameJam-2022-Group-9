class PlayerManager{
    constructor(){
        this.playerSprite;
    }

    load(){

    }

    setup(){
        let playerX = width/2;
        let playerY = height/2;
        this.playerSprite = this.makePlayer(playerX,playerY,25,45)
    }

    draw(){
        this.keyPressed();
    }

    makePlayer(x,y,size,size2){
        tempPlayer = createSprite(x,y,size,size2);
        tempPlayer.maxSpeed = 2;
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
}