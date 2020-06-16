/*Variables*/
var game = {
computerSequence: [],
playerSequence: [],
iconsArray: [
    "#rocket",
    "#astronaut",
    "#jedi",
    "#robot",
    "#spock"
    ],
};

const startButton = document.querySelector("#start");
const rocket = document.querySelector("#rocket");
const astronaut = document.querySelector("#astronaut");
const jedi = document.querySelector("#jedi");
const robot = document.querySelector("#robot");
const spock = document.querySelector("#spock");



/*Start button*/
startButton.addEventListener("click", function(){
    newGame();
});


/*Starts a new game and resets all the values and continue to function 'level'*/
function newGame() {
    computerSequence = [];
    playerSequence = [];
    level();
};

/*Set new level to 1 and continue to function 'randomSequence' */
function level() {
    document.getElementById("level").innerText = "1";
    randomSequence();
}

/*Function randomly chooses an icon from the array and push it to computerSequence array then continue to function 'iconflash' */
function randomSequence() {
    computerSequence.push(Math.floor(Math.random() * iconsArray.length));
    iconLight();
};



/*iconLight will use the pushed icons and light it up*/














