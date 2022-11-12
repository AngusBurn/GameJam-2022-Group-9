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
        if(keyIsDown(32)){
            attacknumber += 1
            if(attacknumber > 0 && attacknumber < 13){
                tempPlayer.changeAnimation("punch")
            }
        } else{
            attacknumber = 0
        }
    }

    makePlayerAttack(){
        
    }
}