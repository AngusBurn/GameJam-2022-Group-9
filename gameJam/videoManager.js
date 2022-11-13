let vid
let displayText = false;

class videoManager{
    constructor(){
        this.vidSetup;
    }
    preload(){
        this.videoLoad();
    }
    videoLoad(){
        vid = createVideo('https://github.com/AngusBurn/GameJam-2022-Group-9/blob/main/gameJam/assets/videos/LoadingScreen.mp4');
        // vid.size(1000, 600);
        vid.loop();
        vid.hide();
        vid.addCue(2, this.showText);
    }
    creatingText(){
        image(vid, 0, 0);
        if (displayText){
            fill('white')
            textFont('Helvetica');
            textSize(50);
            textAlign(CENTER, CENTER);
            text('press space to start', 0, height/2, width);
        }
    }
    showText(){
        if (currentScreen == LOADING){
            displayText = true;
          }else{
            displayText = false;
          }
    }
}