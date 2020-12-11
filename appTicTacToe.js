// surpprimer le comportement par défaut du clic droit
document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

// comment afficher l'icone joueur à la place de la souris ?

// comment valider/jouer avec les touches du clavier ?

// récup du plateau de jeu : 9 cases de 0 à 8
let board = document.getElementsByClassName("case");
// recup du bandeau info
let info = document.getElementById("info");

const playerX = 0;
const playerO = 2;

let turn = 0;  // commence à 0 ou 2
// si plusieurs parties ==> incremente à 2 ou donne la main au perdant manche précédente
// et affiche dans info

// ou placer la commande d'affichage ?
// if(turn === 0){
//     info.innerHTML = "Joueur 1";
// }
// else {
//     info.innerHTML = "Joueur 2";
// }

for (let square of board){  // pour chaque carré du plateau
    square.addEventListener("mouseup", function (event){    // si tour = event button
        switch (event.button){
            case 0:
                if (turn === event.button){
                    isItEmpty(this, "<img alt='O' src=\'croix.png\'>");// si la case est vide ==> écrire marque du joueur
                    turn = playerO;     // turn = autre joueur
                    info.innerHTML = "Joueur 2";    // affichage dans info
                }
                break;
            case 2:
                if (turn === event.button){
                    isItEmpty(this, "<img alt='O' src=\'buttonGreen.png\'>");
                    turn = playerX;
                    info.innerHTML = "Joueur 1"
                }
                break;
        }
    })
}

function isItEmpty (element, char){
    if (element.innerHTML.length === 0){
        element.innerHTML = char;
    }
}

// création du tableau "game board"
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

// au cours du jeu les gameBoard[i] reçoivent les affectations "joueurX"
gameBoard[0] = "X";
gameBoard[1] = "X";
gameBoard[2] = "X";


// ECRIRE LA FONCTION
function isThereAWinner (){
    // creation du joueur
    let player = "X";

    // création du tableau "game board"
    let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];



    if (game[0] === player && game[1] === player && game[1] === player){
        console.log("joueur " + player + " a gagné");
    }
    else if (game[3] === player && game[4] === player && game[5] === player){

    }
    else if (game[6] === player && game[7] === player && game[8] === player){

    }


}

// listener sur restart
document.getElementById("restart").addEventListener('click', function (){
    for (let square of board){
        square.innerHTML = "";
    }
    turn = playerX;
});

