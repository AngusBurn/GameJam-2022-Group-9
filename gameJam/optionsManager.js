let LeftArrowImg, RightArrowImg, SpaceBarImg;

let MMSlider, GMSlider;
let MMVolume, GMVolume;

class optionsManager{
    constructor(){
        this;
    }
    preload(){
        LeftArrowImg = loadImage('./assets/images/LeftArrow.png');
        RightArrowImg = loadImage('./assets/images/RightArrow.png');
        SpaceBarImg = loadImage('./assets/images/SpaceBar.png');
    }
    setup(){
        MMSlider = createSlider(0 , 0.5, 0.1, 0.025);
        MMSlider.position(width/2 + 75, height/2 - 10)
        MMSlider.style('width', '300px');
        MMSlider.hide();
        
        GMSlider = createSlider(0 , 0.5, 0.05, 0.025);
        GMSlider.position(width/2 + 75, height/2 + 110)
        GMSlider.style('width', '300px');
        GMSlider.hide();
    }
    drawOptionsScreen(){
        background('black')
        fill('white');
        push();
        textSize(50);
        textAlign(CENTER, CENTER)
        text('Controls', width/2, 100);
        pop();
        image(LeftArrowImg, width/2 - 400, height/2 - 100);
        image(RightArrowImg, width/2 - 400, height/2 + 25);
        image(SpaceBarImg, width/2 - 450, height/2 + 150 );
        textSize(30);
        text('Move left', width/2 - 200, height/2 - 50);
        text('Move right', width/2 - 200, height/2 + 75);
        text('Attack', width/2 - 200, height/2 + 200);
        push();
        stroke('white');
        strokeWeight(10);
        line(width/2, 150, width/2, height - 50);
        pop();
        text('Menu Music', width/2 + 75, height/2 - 50);
        text('Game Music', width/2 + 75, height/2 + 75);
        MMVolume = MMSlider.value();
        introMusic.setVolume(MMVolume);
        console.log(MMVolume)
    }
    drawPlayScreen(){
        GMVolume = GMSlider.value();
        playMusic.setVolume(GMVolume);
        console.log(GMVolume)
    }
}