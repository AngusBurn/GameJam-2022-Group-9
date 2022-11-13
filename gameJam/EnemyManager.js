
let enemySpriteIdle, enemyWalk1, enemyWalk2, enemyWalk3, enemyPunch;
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
      enemySpriteIdle = loadImage("./assets/sprites/enemyIdle.png");
      enemyWalk1 = loadImage("./assets/sprites/enemyWalk1.png");
      enemyWalk2 = loadImage("./assets/sprites/enemyWalk2.png");
      enemyWalk3 = loadImage("./assets/sprites/enemyWalk3.png");
      enemyPunch = loadImage("./assets/sprites/enemyPunch.png")
    }
    start(){
      this.enemyGroup = new Group();
      this.playerGroup = new Group();

      let playerX = width/2;
      let playerY = 500;
      this.playerGroup = new Group();
      this.playerGroup.add(this.makePlayer(playerX,playerY,25,45))
     }

    draw(){
      this.enemySpawn()
      this.checkCollision()
      if(hit == true){
        tempEnemy.hp -= 0;
      }

      if(hittime == 13){
        hittime = 0;
        hit = false;
      } 
      for(let tempEnemy of this.enemyGroup){
        console.log(tempEnemy.currentHP)
      }
      

      if(stuntime == 15){
        tempEnemy.stun = false;
      }
      for(let i = 0; i < this.playerGroup.length; i++){
      fill(0);
      rect(this.playerGroup[i].position.x - 25,this.playerGroup[i].position.y -75,56,7)
      fill(0,128,255);
      rect(this.playerGroup[i].position.x - 25,this.playerGroup[i].position.y -75,tempPlayer.maxHP - (tempPlayer.maxHP - tempPlayer.currentHP),7)
      }

      
     }
    makeEnemy(x,y,size,size2){
      tempEnemy = createSprite(x,y,size,size2);
      tempEnemy.windup = 0;
      tempEnemy.maxHP = 56;
      tempEnemy.currentHP = 56;
      tempEnemy.stun = false;
      tempEnemy.attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
      tempEnemy.setCollider('rectangle',0,0,23,43)
      // tempEnemy.debug = true;
      tempEnemy.addAnimation("idle",enemySpriteIdle)
      tempEnemy.addAnimation("walk",enemyWalk1,enemyWalk2,enemyWalk3);
      tempEnemy.addAnimation("punch",enemyPunch)
      tempEnemy.changeAnimation("walk")

      if (tempPlayer.position.x > tempEnemy.position.x){
        tempEnemy.mirrorX(1)
      } else {
        tempEnemy.mirrorX(-1)
      }
      return tempEnemy;
     }

     makePlayer(x,y,size,size2){
      tempPlayer = createSprite(x,y,size,size2);
      tempPlayer.addImage(playerSpriteIdle);
      tempPlayer.maxHP = 56;
      tempPlayer.currentHP = 56;
      tempPlayer.maxSpeed = 2;
      tempPlayer.friction = 0.1;
      tempPlayer.direction = 1;
      tempPlayer.setCollider('rectangle', 0, 0, 23, 43);
      tempPlayer.addAnimation("idle",playerSpriteIdle);
      tempPlayer.addAnimation("walk",playerWalk1,playerWalk2,playerWalk3);
      tempPlayer.addAnimation("punch",playerPunch)
      //tempPlayer.debug = true;
      return tempPlayer;
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

      for(let i = 0; i < this.enemyGroup.length; i++){
        fill(0);
        rect(this.enemyGroup[i].position.x - 25,this.enemyGroup[i].position.y -75,56,7)
        fill(255,0,0);
        rect(this.enemyGroup[i].position.x - 25,this.enemyGroup[i].position.y -75,tempEnemy.maxHP - (tempEnemy.maxHP - tempEnemy.currentHP),7)
        for(let tempEnemy of this.enemyGroup){
          if(tempEnemy.stun == true){
            stuntime += 1
          }
  
          if(dist(this.enemyGroup[i].position.x, this.enemyGroup[i].position.y, tempPlayer.position.x, tempPlayer.position.y) <= 85){
  
            movement = false;
            
  
            if(tempEnemy.windup > 30 && tempEnemy.windup < 45){
              attackMode = true;
            } else if(tempEnemy.windup > 30){
              attackMode = false;
              tempEnemy.windup = 0;
            }
  
            if(movement == false && tempEnemy.stun == false){
              tempEnemy.windup += 1;
            }
  
            if(movement == true){
              tempEnemy.windup = 0;
            }
            if(tempEnemy.windup < 30){
              this.enemyGroup[i].setCollider('rectangle',0,0,23,43)
            }
  
            if(attackMode == true && movement == false){
              // console.log("I punch thee")
              if(this.enemyGroup[i].mirrorX() == 1){
                this.enemyGroup[i].setCollider('rectangle', 20, 0, 83, 43)
              } else if(this.enemyGroup[i].mirrorX() == -1){
                this.enemyGroup[i].setCollider('rectangle', -20, 0, 83, 43)
              }
              this.enemyGroup[i].changeAnimation("punch")
              if (punchSound.isPlaying() === false){
                punchSound.play();
              }
              
            }
  
          } else{
            movement = true;
            this.enemyGroup[i].attractionPoint(1,tempPlayer.position.x,tempPlayer.position.y)
            this.enemyGroup[i].setCollider('rectangle',0,0,23,43)
            
          }
  
          if(movement == true){
            this.enemyGroup[i].maxSpeed = 1
            this.enemyGroup[i].changeAnimation("walk")
          } else if(movement == false && attackMode == false){
            this.enemyGroup[i].maxSpeed = 0
            this.enemyGroup[i].changeAnimation("idle")
          }
      
        }
       
      }

    }
    

    checkCollision(){
      for(let i = 0; i < this.enemyGroup.length; i++){
        for(let tempEnemy of this.enemyGroup){
          if(attacknumber > 0 && attacknumber < 15 && hit == false){
            if(this.playerGroup.overlap(this.enemyGroup)){
              tempEnemy.currentHP -= 1;
              tempEnemy.stun = true;
            }
            if(tempEnemy.currentHP <= 5){
              this.playerGroup.overlap(this.enemyGroup,this.removeEnemy)
            }
        }
  
          }
      }

      if(attackMode == true){
        if(this.enemyGroup.overlap(this.playerGroup)){
          tempPlayer.currentHP -= 0.5;
          if (dmgSound.isPlaying() === false){
            dmgSound.play();
          }
        }
      }
      if(tempPlayer.currentHP <= 5){
        this.enemyGroup.overlap(this.playerGroup,this.removePlayer)
        currentScreen = GAMEOVER;
        // console.log("you fuggen dead :DDDDD");
      }
      

    }

    removeEnemy(player,enemy){
      enemy.remove();
      score += 100
    }

    removePlayer(enemy,player){
      player.remove();
    }





  }