let buttons = [];

function menuPage() {
  
  // Menu text
  fill(0);
  textSize(12);
  text('How many players do you want?', 170, 180);
  
  // Generate buttons
  for (let i = 2; i < 9; i++) {
    let btn = createButton(`${i}`);
    btn.position(90 + i*30, 200);
    btn.mousePressed(() => buttonPressed(i));
    buttons.push(btn);
  }
}

function buttonPressed(index) {
  
  // Button affects
  buttons[index - 2].style('background-color', '#929191');
  numPlayers = index;
  setPlayers(index);
  currentScreen = "game";
  
}

function gameScreen() {
  
  for (let btn of buttons) {
    btn.remove();
  }
  
}
