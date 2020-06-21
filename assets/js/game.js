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
      

//This function will access the chosen value in the array and changes the color of the icon
function iconFlash (i) {
    setTimeout(function() {
                if (game.computerSequence[i] == 0) {
                    rocket.style.color = "white";
                    setTimeout(function() {
                        rocket.style.color = ""}, 800)
                };
                if (game.computerSequence[i] == 1) {
                    astronaut.style.color = "white";
                    setTimeout(function() {
                        astronaut.style.color = ""}, 800)
                };
                if (game.computerSequence[i] == 2) {
                    jedi.style.color = "white";
                    setTimeout(function() {
                        jedi.style.color = ""}, 800)
                };
                if (game.computerSequence[i] == 3) {
                    robot.style.color = "white";
                    setTimeout(function() {
                        robot.style.color = ""}, 800)
                };
                if (game.computerSequence[i] == 4) {
                    spock.style.color = "white";
                    setTimeout(function() {
                        spock.style.color = ""}, 800)
                };  
    },1500*i) 
};
















