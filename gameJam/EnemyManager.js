//Credit goes to Marta
let enemyspriteIdle, enemyWalk1, enemyWalk2, enemyWalk3;
let tempEnemy;

class EnemyManager{
    constructor(){
      this.enemySprite;
      this.enemyGroup;
    }
    preload(){
      this.tempEnemy.enemySpriteLoad();
    }
    enemySpriteLoad(){
      // enemySpriteIdle = loadImage("./assets/sprites/enemyIdle.png");
      enemyWalk1 = loadImage("./assets/sprites/enemyWalk1.png");
      enemyWalk2 = loadImage("./assets/sprites/enemyWalk2.png");
      enemyWalk3 = loadImage("./assets/sprites/enemyWalk3.png");
    }
    start(){
      this.enemyGroup = new Group();
     }

    draw(){
      let enemyX;
      positionControl = int(random(1,3))
      if(positionControl == 1){
        enemyX = width
      } else if(positionControl == 2){
        enemyX = SCENE_RIGHT
      }
      if(this.enemyGroup.length == 5){
        enemytime = 0;
        enemytime += 0;
      } else{
        enemytime += 1;
        if(enemytime == 200){
          console.log(positionControl)
          enemytime = 0;
          this.enemyGroup.add(this.makeEnemy(enemyX,500,25,45))
        }
      }

      if(deathtime == 400){
        deathtime = 0;
        tempEnemy.remove();
      }
      for(let i = 0; i < this.enemyGroup.length; i++){
        this.enemyGroup[i].attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
      }
      deathtime += 1;
      console.log(this.enemyGroup.length)
     }
    makeEnemy(x,y,size,size2){
      
      tempEnemy = createSprite(x,y,size,size2);
      tempEnemy.addAnimation("walk",enemyWalk1,enemyWalk2,enemyWalk3);
      tempEnemy.changeAnimation("walk")
      tempEnemy.attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
      tempEnemy.maxSpeed = 1;

      if (tempPlayer.position.x > tempEnemy.position.x){
        tempEnemy.mirrorX(1)
      } else {
        tempEnemy.mirrorX(-1)
      }

      return tempEnemy;
     }
  }