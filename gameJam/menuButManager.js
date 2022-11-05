class menuButManager{
    constructor(){
      this.menuButSprite;
    }
    setup(){
      this.menuButSprite.creatingMenuBut();
      this.menuButSprite.buttonFunctions();
      this.menuButSprite.backBut();
    }
    creatingMenuBut(){
      startButSprite = createSprite(width/2, height/2 + 25);
      startButSprite.addImage(startButImg);
      startButSprite.mouseActive = true;
  
      optButSprite = createSprite(width/2, height/2 + 125);
      optButSprite.addImage(optButImg);
      optButSprite.mouseActive = true;
          
      creditButSprite = createSprite(width/2, height/2 + 225);
      creditButSprite.addImage(creditButImg);
      creditButSprite.mouseActive = true;
    }
    buttonFunctions(){
        startButSprite.onMousePressed = function(){
            if (currentScreen == MAIN_MENU){
                currentScreen = PLAY;
            }
        }
        optButSprite.onMousePressed = function(){
            if (currentScreen == MAIN_MENU){
                currentScreen = OPTIONS;
            }
        }
        creditButSprite.onMousePressed = function(){
            if (currentScreen == MAIN_MENU){
                currentScreen = CREDITS;
            }
        }
    }
    drawMainMenuScreen(){
      this.menuButSprite.drawMenuBut();
      this.menuButSprite.hoverMenuBut();
    }
    drawMenuBut(){
      drawSprite(startButSprite);
      drawSprite(optButSprite);
      drawSprite(creditButSprite);
    }
    hoverMenuBut(){
      if (startButSprite.mouseIsOver){
        startButSprite.scale = 1.25;
      }
      else{
        startButSprite.scale = 1;
      }
      if (optButSprite.mouseIsOver){
        optButSprite.scale = 1.25;
      }
      else{
        optButSprite.scale = 1;
      }
      if (creditButSprite.mouseIsOver){
        creditButSprite.scale = 1.25;
      }
      else{
        creditButSprite.scale = 1;
      }
    }
    hideMenuBut(){
        startButSprite.remove();
        optButSprite.remove();
        creditButSprite.remove();
    }
    // back button
    backBut(){
        backButton = createButton('Back');
        backButton.position(50, 50);
        backButton.style('font-family', 'Georgia, serif')
        backButton.style('font-size', '50px');
        backButton.style('color', '#675709');
        backButton.style('background-color: #c6a810');
        backButton.style('padding', '10px', '10px');
        backButton.style('border-radius', '10px');
        backButton.style('border', '0px');
        backButton.mouseOut(this.backOut);
        backButton.mouseOver(this.backOver);
        backButton.mouseClicked(this.backPressed);
        backButton.hide();
    }
    backOut(){
        backButton.style('background-color: #c6a810');
    }
      
    backOver(){
        backButton.style('background-color: #cdb84c');
    }
      
    backPressed(){
        currentScreen = MAIN_MENU;
        menuBut.drawMenuBut();
    }
}