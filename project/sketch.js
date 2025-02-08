let currentScreen = "menu";
var numPlayers;
let bkgField;
let screenWidth = 600;
let screenHeight = 300;

function setup() {
  
  bkgField = loadImage('images/field.jpg');
  
  randomSeed(Date.now());
  fill('grey');
  createCanvas(screenWidth, screenHeight);
  
}

function draw() {
  
  background(225);
  
  // Set players on screen
  for (let i = 0; i < players.length; i++) {
    players[i].move();
    players[i].display();
    
    if (players.length === results.length) {
      for (let place of results) {
        console.log(results[place]);
      }
      break;
    }
  }
  
}


function mousePressed() {
  
  if (currentScreen === "menu") {
    menuPage();
  }
  else if (currentScreen === "game") {
    gameScreen();
  }
  
}