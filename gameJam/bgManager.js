let backgroundImg, groundImg, cloudImg, smallRockImg, largeRockImg, buildingBoundaryImg;
let bg, cloudGroup, boundaryGroup;
let clouds = [];
let SCENE_RIGHT = 1460;
let SCENE_LEFT = -460;

class bgManager{
    constructor(){
        this.bgSprite;
      }
      preload(){
        this.bgSprite.bgLoadImg();
      }
      bgLoadImg(){
        backgroundImg = loadImage('./assets/images/background.png');
        groundImg = loadImage('./assets/images/ground.jpg');
        cloudImg = loadImage('./assets/images/cloud.png');
        smallRockImg = loadImage('./assets/images/bgRock_1.png');
        largeRockImg = loadImage('./assets/images/bgRock_2.png');
        buildingBoundaryImg = loadImage('./assets/images/jamesSaloon.png');
      }
      setup(){
          this.bgSprite.bgGroups();
          this.bgSprite.createCloud();
          this.bgSprite.cloudSpawnNo();
          this.bgSprite.extendedBg();
          this.bgSprite.createRocks();
          this.bgSprite.createBoundry();
      }
      bgGroups(){
          cloudGroup = new Group();
          bg = new Group();
          boundaryGroup = new Group();
      }
      extendedBg(){
          for (let i = 0; i < 2; i++){
              let skySprite = createSprite(width * i, height/2);
              skySprite.addImage(backgroundImg);
              bg.add(skySprite);
              let groundSprite = createSprite(width * i, 535);
              groundSprite.addImage(groundImg);
              bg.add(groundSprite)
          }
      }
      cloudSpawnNo(){
          for (let i = 0; i < 4; i++){
              this.createCloud();
          }
      }
      createCloud(x, y){
          x = random(500, width);
          y = random(0, 300);
          let cloudSize = random([0.25, 0.5]);
          let cloudSprite = createSprite(x, y);
          cloudSprite.addImage(cloudImg);
          cloudSprite.setSpeed(random(1.5, 2), 180);
          cloudSprite.scale = cloudSize;
          cloudSprite.mass = 1 + cloudSprite.scale;
          cloudGroup.add(cloudSprite);
          // return cloudSprite;
      }
      createRocks(){
          for (let i = 0; i < 3; i++){
              let rockSmall = createSprite(random(SCENE_LEFT, SCENE_RIGHT), 355)
              rockSmall.addImage(smallRockImg)
              bg.add(rockSmall);
              let rockLarge = createSprite(random(SCENE_LEFT, SCENE_RIGHT), 355)
              rockLarge.addImage(largeRockImg)
              bg.add(rockLarge);
          }
      }
      createBoundry(){
          let leftBuildingSprite = createSprite(SCENE_LEFT - 305, 300)
          leftBuildingSprite.addImage(buildingBoundaryImg);
          boundaryGroup.add(leftBuildingSprite);
      }
      drawPlayScreen(){
          this.bgSprite.spawnClouds();
          this.bgSprite.boundaryCollision();
      }
      spawnClouds(){
          for (let i = 0; i < cloudGroup.length; i++){
              if (cloudGroup[i].position.x < SCENE_LEFT - 300){
                  cloudGroup[i].position.x = random(SCENE_RIGHT + 300, 1500);
                  cloudGroup[i].position.y = random(0, 300);
              }
          }
      }
      boundaryCollision(){
        if (tempSprite.collide(boundaryGroup)){
            tempSprite.bounce(boundaryGroup)
        }
      }
}
