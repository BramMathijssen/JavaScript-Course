/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

//call the init() function instead of writing it down hardcoded
init();

var lastRoll


// SETTER
// using current - + activePlayer makes the id dynamic.
// document.querySelector("#current-" + activePlayer).textContent = dice;

// .innerHtml makes it possible to inject html trough javascript code
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"

// GETTER
// querySelector can also be used to get values 
// var x = document.querySelector("#score-0").textContent;
// console.log(x);


function btn() {
    // Do something
}

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        // 1. Random number

        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        // var diceDOM = document.querySelector(".dice")
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        document.getElementById("dice-1").src= "dice-" + dice1 + ".png"
        document.getElementById("dice-2").src= "dice-" + dice2 + ".png"
        // diceDOM.style.display = "block";
        // diceDOM.src = "dice-" + dice + ".png";


        // 3. Update the round score IF the rolled number was NOT a 1
        // if (dice === 6 && lastRoll === 6) {
        //     scores[activePlayer] = 0;
        //     roundScore = 0;
        //     document.querySelector("#current-" + activePlayer).textContent = "0";
        //     document.getElementById("score-" + activePlayer).textContent = "0";
        //     nextPlayer();
         if (dice1 !== 1 && dice2 !== 1) {
            // Add Score
            roundScore += dice1 + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;

        } else {
            nextPlayer();

            //
            // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            // roundScore = 0;

            // document.getElementById("current-0").textContent = "0"
            // document.getElementById("current-1").textContent = "0"

            // // removes the active class in the HTML of the player-0-panel
            // // document.querySelector("player-0-panel").classList.remove("active")
            // // adds the active class in the HTML of the player-1-panel
            // // document.querySelector("player-1-panel").classList.add("active")

            // // toggle only adds active if it's not there and if it is there it will be removed
            // // so if player-0 is currently active it will be removed and it will ble placed to player-1
            // document.querySelector(".player-0-panel").classList.toggle("active");
            // document.querySelector(".player-1-panel").classList.toggle("active");

            // document.querySelector(".dice").style.display = "none";
        }

        // lastRoll = dice;

    }


});

document.querySelector(".btn-hold").addEventListener("click", function () {

    if (gamePlaying) {
        // 1. Add CURRENT score to GLOBAL score
        if (activePlayer === 0) {
            scores[0] += roundScore;
            roundScore = 0
        } else if (activePlayer === 1) {
            scores[1] += roundScore;
            roundScore = 0;
        }

        // 2.Update UI current score and global score
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector(".final-score").value
        var winningScore
        console.log(input);

        //Undefined 0 null or "" are COERCED to false
        //Anything else is COERCED to true.
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!"
            document.querySelector(".dice").style.display = "none";
            //adds the winner class to the player-1/2-panel to give it additional styling
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner")
            //removes the active class from the player-1/2-panel
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active")
            document.querySelector(".btn-hold").style.display = "none";
            document.querySelector(".btn-roll").style.display = "none";
            gamePlaying = false;
        } else {
            //Next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            document.querySelector(".dice").style.display = "none";
        }
    }

});

//To avoid code duplication we can write a new function and use it instead of repeating our code
function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0"
    document.getElementById("current-1").textContent = "0"

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

}

document.querySelector(".btn-new").addEventListener("click", init)


function init() {
    gamePlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    //selects the class dice, and sets the css style of display with property none
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    document.getElementById("score-0").textContent = "0"
    document.getElementById("score-1").textContent = "0"
    document.getElementById("current-0").textContent = "0"
    document.getElementById("current-1").textContent = "0"

    document.querySelector(".btn-hold").style.display = "block";
    document.querySelector(".btn-roll").style.display = "block";

    document.querySelector("#name-0").textContent = "Player 1"
    document.querySelector("#name-1").textContent = "Player 2"

    document.querySelector(".player-0-panel").classList.remove("winner")
    document.querySelector(".player-1-panel").classList.remove("winner")
    document.querySelector(".player-0-panel").classList.remove("active")
    document.querySelector(".player-1-panel").classList.remove("active")
    document.querySelector(".player-0-panel").classList.add("active")
}