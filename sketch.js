"use strict"
let enemy = new EnemyManager();
let player = new PlayerManager();

let tempPlayer;

let positionControl;
let enemyY;

let enemytime = 0;
let deathtime = 0;
function setup(){
createCanvas(800,800)

player.setup();
enemy.start();


}

function draw(){
  background(200);
  drawSprites();

  player.draw();
  enemy.draw()


}


function enemySpawnTime(){

}