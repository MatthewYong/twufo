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


//Resets all the values and continue to function 'round'
function newGame() {
    game.computerSequence = [];
    game.playerSequence = [];
    round();
};

//Increment the text and level by +1 and continue to function 'randomSequence' 
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
    for (i=0; i < game.computerSequence.length; i++) {  
        iconFlash(i);
    };
    console.log(game.computerSequence);
};    
      
//This function will access each value in the array and changes the color of the icon. Code derived from https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
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
    },1500*i) 
};


rocket.onclick = function() {
    rocket.style.color = "white";
    setTimeout(function() {
    rocket.style.color = ""}, 800)
};



//Functions that tells the icons to flash
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














