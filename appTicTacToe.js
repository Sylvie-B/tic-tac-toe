

document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

let board = document.getElementsByClassName("case");

const playerX = 0;
const playerO = 2;

let turn = playerX;
let info = document.getElementById("info");

let pNum = document.getElementsByClassName("pNum");

for (let square of board){
    square.addEventListener("mouseup", function (event){

        switch (event.button){
            case 0:
                if (turn === event.button){
                    isItEmpty(this, "<img alt='O' src=\'croix.png\'>");
                    turn = playerO;
                    info.innerHTML = "Joueur 2";
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

function isThereAWinner (){

}
