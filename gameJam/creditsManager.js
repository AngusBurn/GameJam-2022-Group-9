let creditList;

class creditsManager{
    constructor(){
        this;
    }
    preload(){
        creditList = loadJSON('creditList.json');
    }
    drawCreditsScreen(){
        background('black');
        fill('white');
        push();
        textSize(50);
        textAlign(CENTER, CENTER)
        text('Credits', width/2, 100);
        pop();
        for (let i = 0; i < creditList.credits.length; i++){
            textSize(20);
            text(creditList.credits[i].Title, width/2 - 400, i * 60 + 205);
            text(creditList.credits[i].Name, width/2 - 380, i * 60 + 230);
            text(creditList.credits[i].Link, width/2 - 360, i * 60 + 255);
        }
    }
}