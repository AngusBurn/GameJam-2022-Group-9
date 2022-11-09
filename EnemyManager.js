//Credit goes to Marta
let tempEnemy;

class EnemyManager{
    constructor(){
      this.enemySprite;
      this.enemyGroup;
    }
    
    load(){

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
        enemyX = 0
      }
      if(this.enemyGroup.length == 5){
        enemytime = 0;
        enemytime += 0;
      } else{
        enemytime += 1;
        if(enemytime == 200){
          console.log(positionControl)
          enemytime = 0;
          this.enemyGroup.add(this.makeEnemy(enemyX,height/2,25,45))
          
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
      tempEnemy.attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
      tempEnemy.maxSpeed = 1;
      return tempEnemy;
     }


  }