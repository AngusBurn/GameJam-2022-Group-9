let introMusic, playMusic, punchSound, dmgSound;

let playMusicIsPlaying = false;

class soundManager{
    constructor(){
        this.sound;
    }
    preload(){
        this.soundLoad();
    }
    soundLoad(){
        introMusic = loadSound('https://angusburn.github.io/GameJam-2022-Group-9/gameJam/assets/sounds/581415__peanut-shaman__western-bass.wav');
        playMusic = loadSound('https://angusburn.github.io/GameJam-2022-Group-9/gameJam/assets/sounds/651670__code-box__desert-snake.wav');
        punchSound = loadSound('https://angusburn.github.io/GameJam-2022-Group-9/gameJam/assets/sounds/566434__merrick079__punch3.wav');
        dmgSound = loadSound('https://angusburn.github.io/GameJam-2022-Group-9/gameJam/assets/sounds/458867__raclure__damage-sound-effect.mp3');
    }
    setup(){
        this.soundScreenSelect();
        this.soundPreSet();
    }
    soundPreSet(){
        introMusic.setLoop(true);
        playMusic.setLoop(true);
        punchSound.setLoop(false);
        dmgSound.setLoop(false);
    }
    soundScreenSelect(){
        introMusic.play();
        introMusic.setVolume(0.1);
        playMusic.play();
        playMusic.setVolume(0);
    }
}