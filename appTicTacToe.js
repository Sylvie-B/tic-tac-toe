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
    board[i].addEventListener("mouseup", function (event){        // si click sur event button
        switch (event.button){
            case 0:
                if (turn === event.button && board[i].innerHTML.length === 0){     // si tour du joueur = event.button = 0 (case 0)
                    board[i].innerHTML = "<img alt='X' src=\'croix.png\'>";      // écrire marque du joueur
                    turn = playerO;     // changement de joueur
                    info.innerHTML = "Joueur 2";    // affiche autre joueur dans info
                    gameBoard[i] = "X";
                }
                break;
            case 2:
                if (turn === event.button && board[i].innerHTML.length === 0){     //  si tour du joueur = event.button = 2 (case 2)
                    board[i].innerHTML = "<img alt='X' src=\'buttonGreen.png\'>";
                    turn = playerX;
                    info.innerHTML = "Joueur 1";
                    gameBoard[i] = "O";
                }
                break;
        }
        console.log("maj = " + gameBoard);
        /**
         // au cours du jeu les gameBoard[i] reçoivent les affectations "X" ou "O"
         //  si la fonction isThereAWinner retourne true alors affiche joueur précédent a gagné !
         //  ==> incrémente total joueur précédent
         */
        // isThereAWinner(event.button);
    });
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

function isThereAWinner (playeur) {
    //  test horizontal  //////       un test général ou un test par joueur ?
    if (game[0] === player && game[1] === player && game[2] === player){
        return true;
    }
    else if (game[3] === player && game[4] === player && game[5] === player){

    }
    else if (game[6] === player && game[7] === player && game[8] === player){

    }
    else {
        return false
    }

    // test vertical
    // test diagonale
    if(playerX) {
        document.getElementById('won').innerHTML = "le joueur 1 a gagné (X)";
    }
    else if (playerO){
        document.getElementById('won').innerHTML = "le joueur 2 a gagné (Y)";
    }
}




