//Variables
var game = {
    computerSequence: [],
    playerSequence: [],
    runningSequence: [],
    level: 0,
    round: 1
};

//When the DOM has loaded the game is ready to start
$("document").ready(function(){
    
    //Audio button to turn on or mute sound
    $("#volume").click(function() {
        volumeOff();
    });

    function volumeOff() {
        $("#volume").addClass("hide-button");
        $("#mute").removeClass("hide-button");
        $("audio").prop("muted", true);    
    }

    $("#mute").click(function() {
        volumeOn();
    });

    function volumeOn() {
        $("#volume").removeClass("hide-button");
        $("#mute").addClass("hide-button");
        $("audio").prop("muted", false);    
    }

    //Start button starts the game
    $("#start").click(function() {
        newGame();
    });

    //Resets all the values and calls function 'computerTurn'
    function newGame() {
        $("#start").addClass("hide-button");
        game.computerSequence = [];
        game.playerSequence = [];
        game.runningSequence = [];
        game.level = 1;
        computerTurn();
    }

    //Randomly chooses a number and pushes into the array of computerSequence then calls function 'iconFlash' 
    function computerTurn() {
        $("#level").text("Level" + " " + game.level);    
        setTimeout(function() {
            for (i=0; i < game.round; i++) {
                game.computerSequence.push(Math.floor(Math.random() * 5));
            }
            for (i=0; i < game.computerSequence.length; i++) {  
                iconFlash(i);
            }
        },1000);
    } 

    //This function will access each value in the computerSequence array, add a delay between the functions and change the color of the icon. Code derived from https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
    function iconFlash (i) {
        setTimeout(function() {
            if (game.computerSequence[i] == 0) {
                game.runningSequence.push(i);
                iconOne();
            }
            if (game.computerSequence[i] == 1) {
                game.runningSequence.push(i);
                iconTwo();
            }
            if (game.computerSequence[i] == 2) {
                game.runningSequence.push(i);
                iconThree();
            }
            if (game.computerSequence[i] == 3) {
                game.runningSequence.push(i);
                iconFour();
            }
            if (game.computerSequence[i] == 4) {
                game.runningSequence.push(i);
                iconFive();
            }
            //Only if length are equal, player can start to select the icons
            if (game.runningSequence.length == game.computerSequence.length) {
                setTimeout(function() {
                    $(".game-symbol").css("cursor", "pointer");
                playerTurn();
                },200);
            }   
        },1200*i);
    }

    //When an icon is selected, push to the integer to playerSequence array, calls one of the function icon and waits before continue to the next click or function
    function playerTurn() {
        $(".game-symbol").on("click", function() {
            $(this).addClass("rotate");
            $(".game-symbol").off();
            setTimeout(function() {
                $(".game-symbol").removeClass("rotate");
                if(game.computerSequence.length != game.playerSequence.length) {
                    playerTurn();
                } else {
                    compareSequence();
                    $(".game-symbol").css("cursor", "");                
                    }
            },600);
        });
    
        $("#rocket").click(function() {
            game.playerSequence.push(0);
            iconOne();
        });

        $("#astronaut").click(function() {
            game.playerSequence.push(1);        
            iconTwo();
        });

        $("#jedi").click(function() {
            game.playerSequence.push(2);
            iconThree();
        });

        $("#robot").click(function() {
            game.playerSequence.push(3);
            iconFour();
        });

        $("#spock").click(function() {
            game.playerSequence.push(4);
            iconFive();
        });
    }

    //Compare if array length of playerSequence and computerSequence are equal. If equal, check if values are in the same order. If correct, continue to next 'round' through CONTINUE button. If not equal, then restart new game through RETRY button. Code derived from KodeBase https://www.youtube.com/watch?v=xxDqhU-0mek&t=257s

    function compareSequence() {
        if(game.computerSequence.length == game.playerSequence.length) {
            setTimeout(function() {
                if (game.computerSequence.toString() == 
                game.playerSequence.toString()) {
                    $("#level").html("Good!");
                    $("#continue").removeClass("hide-button");
                    $("#continue").click(function() {
                        cont();
                    });
                } else {
                    $("#level").html("Wrong!");
                    $("#retry").removeClass("hide-button");
                    $("#retry").click(function() {
                        retry();
                    });
                }
                //This prevents the player from clicking while the computerSequence is running
                $(".game-symbol").off("click");
            },100);
        }    
    }

    //When CONTINUE button is selected, increment the level by 1 and reset the button by off function
    function cont() {    
        $("#continue").addClass("hide-button");
        $("#continue").off("click");
        game.playerSequence = [];
        game.runningSequence = [];
        game.level++;
        computerTurn(); 
    }

    //When RETRY button is selected, start a new game
    function retry() {
        $("#retry").addClass("hide-button");
        $("#start").removeClass("hide-button");
        $("#level").text("Level 0");
    }

    //Functions to set icons to flash and play an audio
    function iconOne() {
        var audio = document.getElementById("audioRocket");
        audio.play();
        $(".icon-rocket").addClass("icon-effect"); 
        $(".icon-rocket").css("color", "rgb(239, 243, 28)");  
        setTimeout(function() {
            $(".icon-rocket").css("color", "");
            $(".fas").removeClass("icon-effect");
            }, 600);
        }

    function iconTwo() {
        var audio = document.getElementById("audioAstronaut");
        audio.play();
        $(".icon-astronaut").addClass("icon-effect"); 
        $(".icon-astronaut").css("color", "rgb(250, 184, 172)") ;   
        setTimeout(function() {
            $(".icon-astronaut").css("color", "");
            $(".fas").removeClass("icon-effect");
            }, 600);
        }

    function iconThree() {
        var audio = document.getElementById("audioJedi");
        audio.play();
        $(".icon-jedi").addClass("icon-effect"); 
        $(".icon-jedi").css("color", "rgb(197, 148, 252)");   
        setTimeout(function() {
            $(".icon-jedi").css("color", "");
            $(".fas").removeClass("icon-effect");
            }, 600);
        }

    function iconFour() {
        var audio = document.getElementById("audioRobot");
        audio.play();
        $(".icon-robot").addClass("icon-effect"); 
        $(".icon-robot").css("color", "rgb(101, 241, 148)"); 
        setTimeout(function() {
            $(".icon-robot").css("color", "");
            $(".fas").removeClass("icon-effect");
            }, 600);
        }
        
    function iconFive() {
        var audio = document.getElementById("audioSpock");
        audio.play();
        $(".icon-spock").addClass("icon-effect"); 
        $(".icon-spock").css("color", "rgb(113, 215, 255)");    
        setTimeout(function() {
            $(".icon-spock").css("color", "");
            $(".fas").removeClass("icon-effect");
            }, 600);
        }
});

