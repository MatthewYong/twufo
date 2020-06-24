//Variables
var game = {
computerSequence: [],
playerSequence: [],
runningSequence: [],
level: 0,
round: 0
};

//Constants that targets the icons in game.html
const startButton = document.querySelector("#start");
const rocket = document.querySelector("#rocket");
const astronaut = document.querySelector("#astronaut");
const jedi = document.querySelector("#jedi");
const robot = document.querySelector("#robot");
const spock = document.querySelector("#spock");

//When START button is clicked: start a new game by calling
$("#start").click(function() {
    newGame();
    $("#start").addClass("hide-button");
});

//Resets all the values and calls function 'round'
function newGame() {
    game.computerSequence = [];
    game.playerSequence = [];
    game.runningSequence = [];
    game.round = 1;
    game.level = 0;
    round();
};

//Increment the text and level by 1 and calls function 'computerTurn' 
function round() {
    game.level++;
    $("#level").text(game.level);    
    computerTurn();
};

//Randomly chooses a number and pushes into the array of computerSequence then calls function 'iconFlash' 
function computerTurn() {
    for (i=0; i < game.round; i++) {
        game.computerSequence.push(Math.floor(Math.random() * 5));
    };
    for (i=0; i < game.computerSequence.length; i++) {  
        iconFlash(i);
    };
    console.log(game.computerSequence);
};    

//This function will access each value in the computerSequence array, add a delay between the functions and changes the color of the icon. Code derived from https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
function iconFlash (i) {
    setTimeout(function() {
        if (game.computerSequence[i] == 0) {
            game.runningSequence.push(i);
            iconOne();
        };
        if (game.computerSequence[i] == 1) {
            game.runningSequence.push(i);
            iconTwo();
        };
        if (game.computerSequence[i] == 2) {
            game.runningSequence.push(i);
            iconThree();
        };
        if (game.computerSequence[i] == 3) {
            game.runningSequence.push(i);
            iconFour();
        };
        if (game.computerSequence[i] == 4) {
            game.runningSequence.push(i);
            iconFive();
        };
        //Only if length are equal, player can start to select the icons
        if (game.runningSequence.length == game.computerSequence.length) {
            playerTurn();
        };        
    },1200*i);
};

//When icons are clicked, push to playerSequence array, flash icon and calls function compareSequence
function playerTurn() {
    rocket.onclick = function() {
    game.playerSequence.push(0);
    iconOne();
    compareSequence();
    console.log(game.playerSequence)
    };

    astronaut.onclick = function() {
    game.playerSequence.push(1);        
    iconTwo();
    compareSequence();
    console.log(game.playerSequence)
    };

    jedi.onclick = function() {
    game.playerSequence.push(2);
    iconThree();
    compareSequence();
    console.log(game.playerSequence)
    };

    robot.onclick = function() {
    game.playerSequence.push(3);
    iconFour();
    compareSequence();
    console.log(game.playerSequence)
    };

    spock.onclick = function() {
    game.playerSequence.push(4);
    iconFive();
    compareSequence();
    console.log(game.playerSequence)
    };

};


//Compare if array length of playerSequence and computerSequence are equal. If equal, check if values are in the same order. If correct, continue to next 'round' through CONTINUE button. If not equal, then restart new game through RETRY button. Code derived from KodeBase https://www.youtube.com/watch?v=xxDqhU-0mek&t=257s

function compareSequence() {
    if(game.computerSequence.length == game.playerSequence.length) {
        if (game.computerSequence.toString() == game.playerSequence.toString()) {
            console.log("good");
            $("#continue").removeClass("hide-button");
            continueButton();

        } else {
            console.log("wrong");
            $("#retry").removeClass("hide-button");
            retryButton();
        };
    };    
};

//When CONTINUE button is clicked, increment the level by 1 and reset the button by unbind function
function continueButton() {
    $("#continue").click(function() {
        $("#continue").addClass("hide-button");
        $("#continue").unbind();
        game.playerSequence = [];
        game.runningSequence = [];
        round();
    });
};

//When RETRY button is clicked, start a new game
function retryButton() {
    $("#retry").click(function() {
        $("#retry").addClass("hide-button");
        $("#start").removeClass("hide-button");
        $("#level").text("0");
    });
};






//Functions that executes the icons to flash
function iconOne() {
    rocket.style.color = "white";
    setTimeout(function() {
        rocket.style.color = ""}, 500)
    };

function iconTwo() {
    astronaut.style.color = "white";
    setTimeout(function() {
        astronaut.style.color = ""}, 500)
    };

function iconThree() {
    jedi.style.color = "white";
    setTimeout(function() {
        jedi.style.color = ""}, 500)
    };

function iconFour() {
    robot.style.color = "white";
    setTimeout(function() {
        robot.style.color = ""}, 500)
    };

function iconFive() {
    spock.style.color = "white";
    setTimeout(function() {
        spock.style.color = ""}, 500)
    };














