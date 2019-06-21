let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('startButton');
let currentlyPlaying = true;

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

doorImage1.onclick = () => {
  
  if (currentlyPlaying && !isClicked(doorImage1)) {
  	doorImage1.src = openDoor1;	
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
  	playDoor(doorImage2);
  };
};
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
  	doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};
startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound();
  }
}

let openDoor1, openDoor2, openDoor3;
let numClosedDoors = 3;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
}

const isBot = (door) => door.src === botDoorPath? true:false;

const isClicked = (door) => door.src != closedDoorPath? true:false;

const playDoor = (door) => {
  numClosedDoors --;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot(door)) {
    gameOver();
  }
};

const gameOver = (status) =>{
  if (status==='win'){
    startButton.value = 'You win!  Play again?'
  } else {
    startButton.value = 'You lose!  Play again?';
  };
  currentlyPlaying = false;
};

const startRound = () =>{
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.value = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startRound();
