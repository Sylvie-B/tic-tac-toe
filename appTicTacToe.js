
let board = document.getElementById("ticTacToe");
board.addEventListener("contextmenu", function (event){
    event.preventDefault();
})


let square = board.getElementsByTagName("div");
const playerX = 0;
const playerO = 2;
let turn = playerX;
let info = document.getElementById("info");
let score1 = "";
let score2 = "";
let pNum = document.getElementsByClassName("pNum");
console.log(pNum.length);

//
// function isThereAWinner (){
//     for (let x = 0 ; x < pNum.length ; x++){
//         /** conditions */
//         ("0"&&"1"&&"2" || "3"&&"4"&&"5" || "6"&&"7"&&"8" ||"0"&&"3"&&"6" || "1"&&"4"&&"7" || "2"&&"5"&&"8" || "0"&&"4"&&"8" || "6"&&"4"&&"2"))
//     info.innerHTML = "Le joueur " + (x+1) + " gagne";
//     }
// }
//




for (let i = 0; i < square.length; i++){
    square[i].addEventListener("mouseup", function (event){
        let ref = square[i].innerHTML;
        switch (event.button){
            case 0:
                if((turn === playerX) && (ref === "")){
                    square[i].innerHTML = "<img alt='X' src=\'croix.png\'>";
                    info.innerHTML = "Joueur 2";
                    turn = playerO;
                    let nbr1 = i.toString();
                    score1 += nbr1;
                    console.log(typeof score1);
                }
                break;
            case 2:
                if (turn === playerO && ref === ""){
                    square[i].innerHTML = "<img alt='O' src=\'buttonGreen.png\'>";
                    info.innerHTML = "Joueur 1";
                    turn = playerX;
                    let nbr2 = i.toString();
                    score2 += nbr2;
                    console.log("score2 = " + score2);
                }
                console.log(turn);
                break;
        }
    })
}

