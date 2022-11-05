"use strict";

let titleFont, buttonFont;
let menuImg, otherScreenImg, startButImg, optButImg, creditButImg, backButton;
let startButSprite, optButSprite, creditButSprite;

let menuBut = new menuButManager();

// screens
let LOADING = 0;
let MAIN_MENU = 1;
let PLAY = 2;
let OPTIONS = 3;
let CREDITS = 4;
// initialising screen
let currentScreen = LOADING;

function preload() {
  // assets
  titleFont = loadFont('./assets/fonts/vanilla_whale.otf');
  buttonFont = loadFont('./assets/fonts/Rockwell-Bold.ttf');
  menuImg = loadImage('./assets/images/mainScreenImg.jpg');
  otherScreenImg = loadImage('./assets/images/otherScreenImg.jpg');

  startButImg = loadImage('./assets/images/startButImg.png');  
  optButImg = loadImage('./assets/images/optButImg.png');
  creditButImg = loadImage('./assets/images/creditButImg.png');
}

function setup() {
  createCanvas(1000, 600);
  menuBut.creatingMenuBut();
  menuBut.buttonFunctions();
  menuBut.backBut();
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
    case OPTIONS:
      drawOptionsScreen();
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
  backButton.hide();
}

function drawPlayScreen() {
  menuBut.hideMenuBut();
  
}

function drawOptionsScreen() {
  image(otherScreenImg, 0, 0);

  backButton.show();
}

function drawCreditsScreen() {
  image(otherScreenImg, 0, 0);

  backButton.show();
}

