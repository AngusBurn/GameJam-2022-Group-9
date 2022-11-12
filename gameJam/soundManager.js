let introMusic, playMusic;

let playMusicIsPlaying = false;

class soundManager{
    constructor(){
        this.sound;
    }
    preload(){
        this.soundLoad();
    }
    soundLoad(){
        introMusic = loadSound('../assets/sounds/581415__peanut-shaman__western-bass.wav');
        playMusic = loadSound('../assets/sounds/651670__code-box__desert-snake.wav');
    }
    setup(){
        this.soundScreenSelect();
        this.soundPreSet();
    }
    soundPreSet(){
        introMusic.setLoop(true);
        playMusic.setLoop(true);
    }
    soundScreenSelect(){
        introMusic.play();
        introMusic.setVolume(0.1);
        playMusic.play();
        playMusic.setVolume(0);
    }
}