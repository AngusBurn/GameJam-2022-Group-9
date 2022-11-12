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
            console.log("ATTACK")
        }
    }
}