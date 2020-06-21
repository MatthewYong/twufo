//Variables
var game = {
computerSequence: [],
playerSequence: [],
level: 0
};

const startButton = document.querySelector("#start");
const rocket = document.querySelector("#rocket");
const astronaut = document.querySelector("#astronaut");
const jedi = document.querySelector("#jedi");
const robot = document.querySelector("#robot");
const spock = document.querySelector("#spock");

//When START button is clicked a new game starts
startButton.addEventListener("click", function(){
    newGame();
});


//Resets all the values and calls function 'round'
function newGame() {
    game.computerSequence = [];
    game.playerSequence = [];
    round();
};

//Increment the text and level by +1 and calls function 'computerTurn' 
function round() {
    game.level++;
    $("#level").text(game.level);
    computerTurn();
};

//Randomly chooses a number and pushes into the array of computerSequence then calls function 'iconFlash' 
function computerTurn() {
    for (i=0; i < game.level; i++) {
        game.computerSequence.push(Math.floor(Math.random() * 5));
    };
    for (i=0; i < game.computerSequence.length; i++) {  
        iconFlash(i);
    };
    console.log(game.computerSequence);
};    

//This function will access each value in the array, add a delay between the functions and changes the color of the icon. Code derived from https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
function iconFlash (i) {
    setTimeout(function() {
        if (game.computerSequence[i] == 0) {
            iconOne();
        };
        if (game.computerSequence[i] == 1) {
            iconTwo();
        };
        if (game.computerSequence[i] == 2) {
            iconThree();
        };
        if (game.computerSequence[i] == 3) {
            iconFour();
        };
        if (game.computerSequence[i] == 4) {
            iconFive();
        };
        playerTurn();            
    },1500*i);
};


//When icons are clicked, push to playerSequence array and flash icon
function playerTurn() {
    rocket.onclick = function() {
    game.playerSequence.push(0);
    iconOne();
    console.log(game.playerSequence)
    };

    astronaut.onclick = function() {
    game.playerSequence.push(1);
    console.log(game.playerSequence)
    iconTwo();
    };

    jedi.onclick = function() {
    game.playerSequence.push(2);
    console.log(game.playerSequence)
    iconThree();
    };

    robot.onclick = function() {
    game.playerSequence.push(3);
    console.log(game.playerSequence)
    iconFour();
    };

    spock.onclick = function() {
    game.playerSequence.push(4);
    iconFive();
    console.log(game.playerSequence)
    };
};


//Compare if array of playerTurn and computerTurn are equal. If equal, continue to next 'round'. If not equal, then restart new game through button

function compareSequence() {
    if (game.computerSequence.length == game.playerSequence.length) {
        console.log("Good job");
    } else {
        console.log("Try again")
    };
};




//Functions that executes the icons to flash
function iconOne() {
    rocket.style.color = "white";
    setTimeout(function() {
        rocket.style.color = ""}, 800)
    };

function iconTwo() {
    astronaut.style.color = "white";
    setTimeout(function() {
        astronaut.style.color = ""}, 800)
    };

function iconThree() {
    jedi.style.color = "white";
    setTimeout(function() {
        jedi.style.color = ""}, 800)
    };

function iconFour() {
    robot.style.color = "white";
    setTimeout(function() {
        robot.style.color = ""}, 800)
    };

function iconFive() {
    spock.style.color = "white";
    setTimeout(function() {
        spock.style.color = ""}, 800)
    };














