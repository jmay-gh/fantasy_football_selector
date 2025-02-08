let size = 30
let players = [];
let results = [];

class Player {
  
  constructor(i) {
    this.playerNum = i;
    this.x = 5;
    this.y = 20 + (screenHeight - ((screenHeight - 20) / numPlayers) * i);
    this.finished = false;
    this.speed = 0.2;
    this.boostSpeed = 0.6;
    this.boost = false;
    this.boostEndTime = 0;
    this.nextBoostTime = millis() + random(1000, 10000);
  }
  
  display() {
    fill('green'); // Yellow during boost
    stroke(this.boost ? 'red' : 'black');
    strokeWeight(5);
    circle(this.x, this.y, size);
  }
  
  move() {
    
    if (this.finished === false) {
      
      if (this.x >= screenWidth - 20) {
        this.finished = true;
        results.push(this.playerNum);
        return;
      }
    
      if (this.boost) {
        this.x += this.boostSpeed; // Move faster during boost

        // Check if boost duration has ended
        if (millis() > this.boostEndTime) {
          this.boost = false; // Stop the boost
          this.nextBoostTime = millis() + random(1000, 10000);
        }
      } else {
          this.x += this.speed; // Normal movement

          // Check if it's time to start a new boost
          if (millis() > this.nextBoostTime) {
            this.startBoost();
          }
      }
    }
  }

  startBoost() {
    this.boost = true;
    this.boostEndTime = millis() + random(1000, 8000);
  }
  
}

function setPlayers(index) {
  
  for (let i = 1; i <= index; i++) {
    players.push(new Player(i));
  }
 
}

