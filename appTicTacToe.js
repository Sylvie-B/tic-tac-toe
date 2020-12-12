// surpprimer le comportement par défaut du clic droit
document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

// comment afficher l'icone joueur à la place de la souris ?

// comment valider/jouer avec les touches du clavier ?

// récup du plateau de jeu visible : 9 cases de 0 à 8
let board = document.getElementsByClassName("case");
console.log(board);


// recup du bandeau info
let info = document.getElementById("info");

// tableau "game board" de 9 cases
// au cours du jeu les gameBoard[i] reçoivent les affectations "X" ou "O"
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const playerX = 0;
const playerO = 2;


let turn = 0;  // commence à 0 ou 2
// si plusieurs parties ==> incremente à 2 puis décrémente à 0 ou donne la main au perdant manche précédente
// et affiche dans info


for (let i = 0 ; i < board.length ; i++){        // pour chaque carré du plateau
    board[i].addEventListener("mouseup", function (event){        // si event button
        switch (event.button){
            case 0:
                if (turn === event.button){     // si tour du joueur = event.button = 0 (case 0)
                    isItEmpty(board[i], event.button);// si la case est vide ==> écrire marque du joueur
                    gameBoard[i] = "X";
                }
                break;
            case 2:
                if (turn === event.button){     //  si tour du joueur = event.button = 2 (case 2)
                    isItEmpty(board[i], event.button);
                    gameBoard[i] = "O";
                }
                break;
        }
        // isThereAWinner(event.button);
        // changement de joueur
        if(turn === 0){
            turn = playerO;

        }
        else {
            turn = playerX;

        }
    });
}

// turn = playerX;
// info.innerHTML = "Joueur 2";    // affiche autre joueur dans info
// turn = playerO;
// info.innerHTML = "Joueur 1";
// turn = autre joueur

function isItEmpty (element, playeur) {
    if (element.innerHTML.length === 0) {
        switch (playeur) {
            case 0:
                element.innerHTML = "<img alt='X' src=\'croix.png\'>";
                break;
            case 2:
                element.innerHTML = "<img alt='X' src=\'buttonGreen.png\'>";
                break;
        }
        console.log("maj " + gameBoard);
    }
}

// listener sur restart
document.getElementById("restart").addEventListener('click', function () {
    for (let square of board) {
        square.innerHTML = "";
    }
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("total1").innerHTML = "0";
    document.getElementById("total2").innerHTML = "0";
    turn = playerX;
    console.log(gameBoard);
})

// // ECRIRE LA FONCTION
// function isThereAWinner (playeur) {
//     //  test horizontal  //////       un test général ou un test par joueur ?
//     if (game[0] === player && game[1] === player && game[2] === player){
//         return true;
//     }
//     else if (game[3] === player && game[4] === player && game[5] === player){
//
//     }
//     else if (game[6] === player && game[7] === player && game[8] === player){
//
//     }
//     else {
//         return false
//     }
//
//     // test vertical
//     // test diagonale
//     if(playerX) {
//         document.getElementById('won').innerHTML = "le joueur 1 a gagné (X)";
//     }
//     else if (playerO){
//         document.getElementById('won').innerHTML = "le joueur 2 a gagné (Y)";
//     }
// }
//

    /**
     // au cours du jeu les gameBoard[i] reçoivent les affectations "joueurX" ou "joueur O"

     //  si la fonction isThereAWinner retourne playeur X
     //  ==> incrémente total X et affiche

     */

