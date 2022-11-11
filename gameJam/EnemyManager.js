//Credit goes to Marta
let tempEnemy;

class EnemyManager{
    constructor(){
      this.enemySprite;
      this.enemyGroup;
    }
    preload(){

    }
    start(){
      this.enemyGroup = new Group();
     }

    draw(){
      this.enemySpawn()


      for(let i = 0; i < this.enemyGroup.length; i++){

        if(movement == true){
          tempEnemy.maxSpeed = 1
        } else if(movement == false){
          tempEnemy.maxSpeed = 0
        }
        //if(pausetime == 50){
        //  pausetime = 0;
        //  movement = true;
        //  this.enemyGroup[i].attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
        //}
        if(dist(this.enemyGroup[i].position.x, this.enemyGroup[i].position.y, tempPlayer.position.x, tempPlayer.position.y) <= 50){
          console.log('danger')
          this.enemyGroup[i].maxSpeed = 0;
        //}else if(dist(this.enemyGroup[i].position.x, this.enemyGroup[i].position.y, tempPlayer.position.x, tempPlayer.position.y) > 37 && movement == false){
        //  pausetime += 1;
        //} 
        } else{
          this.enemyGroup[i].maxSpeed = 1;
          this.enemyGroup[i].attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
        }
    
       
      }
      this.enemyGroup.bounce(this.enemyGroup)
      

      
     }
    makeEnemy(x,y,size,size2){
      tempEnemy = createSprite(x,y,size,size2);
      tempEnemy.attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
      tempEnemy.setCollider('rectangle',0,0,23,43)
      tempEnemy.debug = true;
      return tempEnemy;
     }

    enemySpawn(){
      let enemyX;
      positionControl = int(random(1,3))
      if(positionControl == 1){
        enemyX = SCENE_LEFT - 200
      } else if(positionControl == 2){
        enemyX = SCENE_RIGHT + 200
      }
      if(this.enemyGroup.length == 5){
        enemytime = 0;
        enemytime += 0;
      } else{
        enemytime += 1;
        if(enemytime == 200){
          enemytime = 0;
          this.enemyGroup.add(this.makeEnemy(enemyX,500,25,45))
        }
      }
    }
  }