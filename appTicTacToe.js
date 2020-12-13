//      surpprimer le comportement par défaut du clic droit
document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

//      récup du plateau de jeu visible : 9 cases de 0 à 8
let board = document.getElementsByClassName("case");

//      recup du bandeau info
let info = document.getElementById("info");

//      recup des scores
let score = document.getElementsByClassName("count");

//      ( plateau invisible ) tableau "gameBoard" de 9 cases
// au cours du jeu les gameBoard[i] reçoivent les affectations "0" ou "2" === const player
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const playerX = 0;
const playerO = 2;

let turn = 0;  // commence à 0 ou 2
// si plusieurs parties ==> incremente à 2 puis décrémente à 0 ou donne la main au perdant manche précédente ?
// et affiche dans info

let winner = false;    // ou placer ?

for (let i = 0 ; i < board.length ; i++){        // pour chaque carré du plateau
    board[i].addEventListener("mouseup", function (event){        // si click
        switch (event.button){  //  ==> event.button = 0 ou 2
            case 0:
                if (turn === event.button && board[i].innerHTML.length === 0){   // si tour du joueur et si case vide
                    board[i].innerHTML = "<img alt='X' src=\'croix.png\'>";     // écrire marque du joueur
                    gameBoard[i] = event.button;            // maj tableau
                    turn = playerO;     // changement de joueur
                    info.innerHTML = "Joueur 2";          // affiche joueur dans info
                }
                break;
            case 2:
                if (turn === event.button && board[i].innerHTML.length === 0){     //  si tour du joueur = 2
                    board[i].innerHTML = "<img alt='X' src=\'buttonGreen.png\'>";
                    gameBoard[i] = event.button;
                    turn = playerX;
                    info.innerHTML = "Joueur 1";
                }
                break;
        }
        console.log(gameBoard);
    isThereAWinner(event.button);   // en fonction de event.button === 0 || 2
    });
}

// listener sur RESTART
document.getElementById("restart").addEventListener('click', function () {
    for (let square of board) {
        square.innerHTML = "";
    }
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    score[0].innerHTML = "0";
    score[1].innerHTML = "0";
    turn = playerX;
})

// fonction gagnant

/**  si la fonction isThereAWinner() retourne true
 * alors affiche joueur event.button a gagné !
 * ==> incrémente total joueur
 */

function isThereAWinner (player) {  // player === 0 || 2
    console.log(player);
    if(!winner){        // si winner différent de true
        //  test horizontal
        winner = horizontal(player);
        console.log("test horizontal = " + horizontal());
        if (!winner) {
            winner = vertical(player);
            // test vertical
            console.log("test vertical = " + vertical());
            if (!winner){
                // test diagonale
                winner = diagonal(player);
                console.log("test diagonal = " + diagonal());
            }
        }
    }
    // si winner === true alors joueur en cours a gagné
    if (winner){
        switch (player){
            case 0:
                info.innerHTML = "joueur 1 a gagné !!!"
                score[player].innerHTML = (parseInt(score[player].innerHTML) + 1).toString();
                break;
            case 2 :
                info.innerHTML = "joueur 2 a gagné !!!"
                score[player-1].innerHTML = (parseInt(score[player-1].innerHTML) + 1).toString();
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