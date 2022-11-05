"use strict";

let titleFont;
let menuImg, startButImg, optButImg, creditButImg;
let startButSprite, optButSprite, creditButSprite;

let menuBut = new menuButManager();

// screens
let LOADING = 0;
let MAIN_MENU = 1;
let PLAY = 2;
let SETTING = 3;
let CREDITS = 4;
// initialising screen
let currentScreen = LOADING;

function preload() {
  // assets
  titleFont = loadFont('./assets/fonts/vanilla_whale.otf');
  menuImg = loadImage('./assets/images/mainScreenImg.jpg');

  startButImg = loadImage('./assets/images/startButImg.png');  
  optButImg = loadImage('./assets/images/optButImg.png');
  creditButImg = loadImage('./assets/images/creditButImg.png');
}

function setup() {
  createCanvas(1000, 600);
  menuBut.creatingMenuBut();
}

function draw() {
  switch(currentScreen){
    case LOADING:
      drawLoadingScreen();
      console.log('loading screen');
      break;
    case MAIN_MENU:
      drawMainMenuScreen();
      console.log('menu sc');
      break;
    case PLAY:
      drawPlayScreen();
      console.log('play scre');
      break;
    case SETTING:
      drawSettingScreen();
      console.log('settings sc');
      break;
    case CREDITS:
      drawCreditsScreen();
      console.log('Credit sc');
      break;
  }
}

function drawLoadingScreen() {
  // place holder
  // will make a little animation for the loading screen :)
  background(100);
  textFont('Helvetica');
  textSize(50);
  textAlign(CENTER, CENTER);
  text('press space to start', 0, 500, width);

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
  
  menuBut.drawMenuBut();
  menuBut.hoverMenuBut();
}

function drawPlayScreen() {

}

function drawSettingScreen() {
  
}

function drawCreditsScreen() {

}
