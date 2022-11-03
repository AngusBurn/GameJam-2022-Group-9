"use strict";

let titleFont;
let menuImg;

// screens
let LOADING = 0;
let MAIN_MENU = 1;
let PLAY = 2;
let HIGH_SCORE = 3;
let SETTING = 4;
// initialising screen
let currentScreen = LOADING;

function preload() {
  // assets
  titleFont = loadFont('./assets/fonts/vanilla_whale.otf');
  menuImg = loadImage('./assets/images/mainScreenImg.jpg');
}

function setup() {
  createCanvas(1000, 600);
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
    case HIGH_SCORE:
      drawHighScoreScreen();
      console.log('highscor');
      break;
    case SETTING:
      drawSettingScreen();
      console.log('settings sc');
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
  text('Out Law', 0, 12,  width)
  textFont('Helvetica');
}

function drawPlayScreen() {

}

function drawHighScoreScreen() {

}

function drawSettingScreen() {

}