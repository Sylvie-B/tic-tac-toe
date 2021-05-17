//      deable right click default action
document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

//      get the 9 box of the visible game board
let board = document.getElementsByClassName("case");

//      get "info" headband
let info = document.getElementById("info");

//      get pop up element
let popUp = document.getElementById("popUp");

//      get the player
let user = document.getElementById("user");

//      array of 9 cases game board
//      in game the case receive the value 0 or 2 witch correspond to const player
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const playerX = 0;
let count1 = 0;

const playerO = 2;
let count2 = 0;

let turn = 0;  // alternate between 0 and 2

let markUp = 0;

let winner = false;

for (let i = 0 ; i < board.length ; i++){        // for each game board box
    board[i].addEventListener("mouseup", function (event){
        switch (event.button){
            case 0:     // if player 1 turn
                if (turn === event.button && board[i].innerHTML.length === 0){
                    board[i].innerHTML = "<img alt='X' src=\'croix.png\'>";
                    gameBoard[i] = event.button;
                    turn = playerO;     // change to player 2
                    info.innerHTML = "Joueur 2";
                    markUp ++;
                }
                break;
            case 2:     // if player 2 turn
                if (turn === event.button && board[i].innerHTML.length === 0){
                    board[i].innerHTML = "<img alt='X' src=\'buttonGreen.png\'>";
                    gameBoard[i] = event.button;
                    turn = playerX;
                    info.innerHTML = "Joueur 1";
                    markUp ++;
                }
                break;
        }
        isThereAWinner(event.button);
        if(winner === false && markUp === 9){
            popUp.innerHTML = "La partie est nulle";
            popUp.style.visibility = "visible";
        }
    });
}

// listen RESTART button
document.getElementById("restart").addEventListener('click', function () {
    for (let square of board) {
        square.innerHTML = "";
    }
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("count1").innerHTML = "0";
    document.getElementById("count2").innerHTML = "0";
    count1 = count2 = 0;
    popUp.style.visibility = "hidden";
    turn = playerX;
    winner = false;
    markUp = 0;
})

// listen Next round
document.getElementById("goOn").addEventListener('click', function (){
    if (turn === playerX){
        info.innerHTML = "Joueur 1";
    }
    else {
        info.innerHTML = "Joueur 2";
    }
    for (let square of board) {
        square.innerHTML = "";
    }
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    popUp.style.visibility = "hidden";
    winner = false;
    markUp = 0;
})


function isThereAWinner (player) {      // current player
    if(!winner){        // if there's no winner
        //   horizontal row test
        winner = horizontal(player);
        if (!winner) {
            winner = vertical(player);
            //  vertical row test
            if (!winner){
                //  diagonal row test
                winner = diagonal(player);
            }
        }
    }
    if (winner){        // if there's a winner
        switch (player){
            case 0:
                // afichage info, +1 au score, affichage count, affichage popUp
                // display winner player in "info"
                info.innerHTML = "joueur 1 a gagné !!!";
                count1 ++;
                document.getElementById("count1").innerHTML = count1.toString();
                popUp.style.visibility = "visible";     // display end game pop up
                user.innerHTML = "1";
                break;
            case 2 :
                info.innerHTML = "joueur 2 a gagné !!!";
                count2 ++;
                document.getElementById("count2").innerHTML = count2.toString();
                popUp.style.visibility = "visible";
                user.innerHTML = "2";
                break;
        }
    }
}

// test each line
function horizontal (player){
    if (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player){
        return true;
    }
    else if (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player){
        return true;
    }
    else return gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player;
}

// test each column
function vertical (player){
    if (gameBoard[0] === player && gameBoard [3] === player && gameBoard[6] === player){
        return true;
    }
    else if (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player){
        return true;
    }
    else return gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player;
}

// test diagonals
function diagonal (player){
    if (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player){
        return true;
    }
    else return (gameBoard[6] === player && gameBoard[4] === player && gameBoard[2] === player);
}
