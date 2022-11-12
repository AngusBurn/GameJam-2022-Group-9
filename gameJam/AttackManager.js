
class AttackManager{
    constructor(){
        this.attackSprite
        this.attackGroup
    }

    preload(){

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
            if(recovertime > 10 || recovertime == 0 && attacknumber > 0 && attacknumber < 13){

                tempPlayer.changeAnimation("punch")
                if(tempPlayer.mirrorX() == 1){
                    tempPlayer.setCollider('rectangle', 10, 0, 73, 43);
                } else if(tempPlayer.mirrorX() == -1){
                    tempPlayer.setCollider('rectangle', -10, 0, 73, 43);
                } else{
                    tempPlayer.setCollider('rectangle', 0, 0, 23, 43);
                }
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