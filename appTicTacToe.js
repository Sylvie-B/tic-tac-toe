//      surpprimer le comportement par défaut du clic droit
document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

//      récup du plateau de jeu visible : 9 cases de 0 à 8
let board = document.getElementsByClassName("case");

//      recup du bandeau info
let info = document.getElementById("info");

//      recup affichage de la
let popUp = document.getElementById("popUp");
let popUpN = document.getElementById("popUpN");

//      recup de l'affichage
let point = document.getElementById("point");

//      ( plateau invisible ) tableau "gameBoard" de 9 cases
// au cours du jeu les gameBoard[i] reçoivent les affectations "0" ou "2" === const player
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const playerX = 0;
let count1 = 0;

const playerO = 2;
let count2 = 0;

let turn = 0;  // commence à 0 ou 2
// si plusieurs parties ==> incremente à 2 puis décrémente à 0 ou donne la main au perdant manche précédente ?
// et affiche dans info

let markUp = 0;

let winner = false;

for (let i = 0 ; i < board.length ; i++){        // pour chaque carré du plateau
    board[i].addEventListener("mouseup", function (event){        // si click
        switch (event.button){  //  ==> event.button = 0 ou 2
            case 0:
                if (turn === event.button && board[i].innerHTML.length === 0){   // si tour du joueur et si case vide
                    board[i].innerHTML = "<img alt='X' src=\'croix.png\'>";     // écrire marque du joueur
                    gameBoard[i] = event.button;            // maj tableau
                    turn = playerO;     // changement de joueur
                    info.innerHTML = "Joueur 2";          // affiche joueur dans info
                    markUp ++;
                }
                break;
            case 2:
                if (turn === event.button && board[i].innerHTML.length === 0){     //  si tour du joueur = 2
                    board[i].innerHTML = "<img alt='X' src=\'buttonGreen.png\'>";
                    gameBoard[i] = event.button;
                    turn = playerX;
                    info.innerHTML = "Joueur 1";
                    markUp ++;
                }
                break;
        }
    isThereAWinner(event.button);   // en fonction de event.button === 0 || 2
    if(winner === false && markUp === 9){
        popUpN.style.visibility = "visible";
    }
    });
}

// listener sur RESTART
document.getElementById("restart").addEventListener('click', function () {
    for (let square of board) {
        square.innerHTML = "";
    }
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("count1").innerHTML = "0";
    document.getElementById("count2").innerHTML = "0";
    count1 = count2 = 0;
    popUp.style.visibility = "hidden";
    popUpN.style.visibility = "hidden";
    turn = playerX;
    info.innerHTML = "Joueur 1";
    winner = false;
    markUp = 0;
})

// listener Next round
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
    popUpN.style.visibility = "hidden";
    winner = false;
    markUp = 0;
})

// fonction gagnant
function isThereAWinner (player) {  // player === 0 || 2
    if(!winner){        // si winner différent de true
        //  test horizontal
        winner = horizontal(player);
        if (!winner) {
            winner = vertical(player);
            // test vertical
            if (!winner){
                // test diagonale
                winner = diagonal(player);
            }
        }
    }
    // si winner === true alors joueur en cours a gagné
    if (winner){
        switch (player){
            case 0:
                // afichage info, +1 au score, affichage count, affichage popUp
                info.innerHTML = "joueur 1 a gagné !!!";
                count1 ++;
                document.getElementById("count1").innerHTML = count1.toString();
                popUp.style.visibility = "visible";
                point.innerHTML = "1";
                break;
            case 2 :
                info.innerHTML = "joueur 2 a gagné !!!";
                count2 ++;
                document.getElementById("count2").innerHTML = count2.toString();
                popUp.style.visibility = "visible";
                point.innerHTML = "2";
                break;
        }
    }
}

function horizontal (player){
    if (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player){
        return true;
    }
    else if (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player){
        return true;
    }
    else return gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player;
}

function vertical (player){
    if (gameBoard[0] === player && gameBoard [3] === player && gameBoard[6] === player){
        return true;
    }
    else if (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player){
        return true;
    }
    else return gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player;
}

function diagonal (player){
    if (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player){
        return true;
    }
    else return (gameBoard[6] === player && gameBoard[4] === player && gameBoard[2] === player);
}

// comment valider/jouer avec les touches du clavier ?
// comment afficher l'icone joueur à la place de la souris ?

