

document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

let board = document.getElementsByClassName("case");

const playerX = 0;
const playerO = 2;
let turn = playerX;
let info = document.getElementById("info");
let score1 = "";
let score2 = "";
let pNum = document.getElementsByClassName("pNum");
console.log(pNum.length);


for (let square of board){
    square.addEventListener("mouseup", function (event){

        switch (event.button){
            case 0:
                if (turn === 0){
                    isItEmpty(this, "<img alt='O' src=\'croix.png\'>");
                    turn = playerO;
                }

                break;
            case 2:
                if (turn === 2){
                    isItEmpty(this, "<img alt='O' src=\'buttonGreen.png\'>");
                    turn = playerX;
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