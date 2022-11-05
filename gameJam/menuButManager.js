class menuButManager{
    constructor(){
      this.menuButSprite;
    }
    setup(){
      this.menuButSprite.creatingMenuBut();
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
  }