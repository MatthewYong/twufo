//Variables
var game = {
computerSequence: [],
playerSequence: [],
level: 0
};

const startButton = document.querySelector("#start");

//When START button is clicked a new game starts
startButton.addEventListener("click", function(){
    newGame();
});


//Resets all the values and continue to function 'round'
function newGame() {
    game.computerSequence = [];
    game.playerSequence = [];
    round();
};

//Set increment the level with 1 and continue to function 'randomSequence' 
function round() {
    game.level++;
    $("#level").text(game.level);
    randomSequence();
}

//Randomly chooses a number and pushes into the array of computerSequence then continue to function 'iconflash' 
function randomSequence() {
    for (i=0; i < game.level; i++) {
        game.computerSequence.push(Math.floor(Math.random() * 5));
    };    
    console.log(game.computerSequence);
    computerFlash();
};


function computerFlash() {
    game.computerSequence.forEach(iconFlash);
};



//This function will access the chosen value in the array and changes the color of the icon
function iconFlash() {
    if (game.computerSequence == 0) {
        rocket.style.color = "white";
    }
    if (game.computerSequence == 1) {
        astronaut.style.color = "white";
    }
    if (game.computerSequence == 2) {
        jedi.style.color = "white";
    }
    if (game.computerSequence == 3) {
        robot.style.color = "white";
    }
    if (game.computerSequence == 4) {
        spock.style.color = "white";
    }

};













