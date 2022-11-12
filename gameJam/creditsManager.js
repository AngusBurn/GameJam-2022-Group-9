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
        push();
        stroke('white');
        strokeWeight(10);
        line(width/2, 150, width/2, height - 50);
        pop();
        for (let i = 0; i < creditList.creators.length; i++){
            textSize(25);
            text(creditList.creators[i].Title, width/2 - 300, i * 75 + 210);
            textSize(20);
            text(creditList.creators[i].Name, width/2 - 280, i * 75 + 230);
            text(creditList.creators[i].Link, width/2 - 260, i * 75 + 255);
        }
        for (let i = 0; i < creditList.credits.length; i++){
            textSize(25);
            text(creditList.credits[i].Title, width/2 + 100, i * 75 + 210);
            textSize(20);
            text(creditList.credits[i].Name, width/2 + 120, i * 75 + 230);
            text(creditList.credits[i].Link, width/2 + 140, i * 75 + 255);
        }
    }
}