let introMusic;

class soundManager{
    constructor(){
        this.sound;
    }
    preload(){
        this.soundLoad();
    }
    soundLoad(){
        introMusic = loadSound('./assets/sounds/581415__peanut-shaman__western-bass.wav');
    }
    setup(){
        this.soundScreenSelect();
        this.soundPreSet();
    }
    soundPreSet(){
        introMusic.setLoop(false);
    }
    soundScreenSelect(){
        introMusic.play();
        introMusic.setVolume(0.1);
    }
}