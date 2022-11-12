"use strict";

let menuClass = new menuManager();
let bgClass = new bgManager();
let enemy = new EnemyManager();
let player = new PlayerManager();
let video = new videoManager();
let sounds = new soundManager();
let credits = new creditsManager();
let options = new optionsManager();
let attack = new AttackManager();

let tempPlayer;

let positionControl;
let enemyY;

let enemytime = 0;
let deathtime = 0;
let attacktime = 0;
let attacknumber = 0;

let pausetime = 0;
let movement = true;

function preload() {
  menuClass.preload();
  bgClass.preload();
  video.preload();
  sounds.preload();
  credits.preload();
  player.playerSpriteLoad();
  enemy.enemySpriteLoad();
  options.preload();
}

function setup() {
  createCanvas(1000, 600);
  
  menuClass.setup();
  bgClass.setup();
  sounds.setup();
  options.setup();
  player.setup();
  enemy.start();
}

function draw() {
  switch(currentScreen){
    case LOADING:
      drawLoadingScreen();
      //console.log('loading screen');
      break;
    case MAIN_MENU:
      drawMainMenuScreen();
      //console.log('menu sc');
      break;
    case PLAY:
      drawPlayScreen();
      //console.log('play scre');
      break;
    case OPTIONS:
      drawOptionsScreen();
      //console.log('settings sc');
      break;
    case CREDITS:
      drawCreditsScreen();
      //console.log('Credit sc');
      break;
  }
}

function drawLoadingScreen() {
  // place holder
  // will make a little animation for the loading screen :)
  background(100);
  video.creatingText();

  if (keyWentDown('SPACE') && currentScreen == LOADING){
    currentScreen = MAIN_MENU;
  }
}

function drawMainMenuScreen() {
  image(menuImg, 0, 0);
  stroke('#675709')
  strokeWeight(10)
  fill('#c6a810');
  textFont(titleFont);
  textSize(200);
  textAlign(CENTER, TOP);
  text('Out Law', 0, 50,  width)
  textFont('Helvetica');  
  menuClass.drawMainMenuScreen();
  backButton.hide();
  MMSlider.hide();
  GMSlider.hide();
}

function drawPlayScreen() {
  background(backgroundImg);
  introMusic.pause();
  options.drawPlayScreen();
  MMSlider.hide();
  GMSlider.hide();
  menuClass.hideMenuBut();
  bgClass.drawPlayScreen();

  drawSprites();
  if (mouseIsPressed) camera.zoom = 0.25
	else camera.zoom = 1;

  player.draw();
  enemy.draw();
  attack.draw();
  console.log(attacknumber)
}

function drawOptionsScreen() {
  backButton.show();
  MMSlider.show();
  GMSlider.show()
  options.drawOptionsScreen();
}

function drawCreditsScreen() {
  backButton.show();
  MMSlider.hide();
  GMSlider.hide();
  credits.drawCreditsScreen();
}

