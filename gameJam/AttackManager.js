
class AttackManager{
    constructor(){
        this.attackSprite
        this.attackGroup
    }

    preload(){
        enemy.start();
    }

    setup(){
        this.attackGroup = new Group();
    }

    draw(){
        this.performAttack()
        

    }

    performAttack(){
        let attackX;
        if(tempPlayer.mirrorX() == 1){
            attackX = tempPlayer.position.x + 20
        } else{
            attackX = tempPlayer.position.x - 20
        }


        if(keyIsDown(32)){
            attacknumber += 1
            if(recovertime > 13 && attacknumber < 15){
                if(tempPlayer.mirrorX() == 1){
                    tempPlayer.setCollider('rectangle', 20, 0, 83, 43);
                } else if(tempPlayer.mirrorX() == -1){
                    tempPlayer.setCollider('rectangle', -20, 0, 83, 43);
                }
            } else if(attacknumber > 15){
                tempPlayer.setCollider('rectangle', 0, 0, 23, 43)
            }
            if(recovertime > 13 || recovertime == 0 && attacknumber > 0 && attacknumber < 15){

                tempPlayer.changeAnimation("punch")

                recovertime = 0;
                if (punchSound.isPlaying() === false){
                    punchSound.play();
                  }
            }
        } else{
            tempPlayer.setCollider('rectangle', 0, 0, 23, 43);
            attacknumber = 0
            recovertime += 1;
            
        }

    }

    makePlayerAttack(x,y,size,size2){
        tempPAttack = createSprite(x,y,size,size2);
        tempPAttack.maxSpeed = 2;
        tempPAttack.debug = true;
        return tempPAttack;

    }


}