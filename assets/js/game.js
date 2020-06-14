/*Variables*/
let sequence = [];
let player = [];
let iconsArray = [
    "#rocket",
    "#astronaut",
    "#jedi",
    "#robot",
    "#spock"
];
let score;

const startButton = document.querySelector("#start");
const rocket = document.querySelector("#rocket");
const astronaut = document.querySelector("#astronaut");
const jedi = document.querySelector("#jedi");
const robot = document.querySelector("#robot");
const spock = document.querySelector("#spock");



/*Start button*/
startButton.addEventListener("click", function(){
    game();
});



function game() {
    sequence = [];
    player = [];
    score = 0;
    
}










