
let board = document.getElementById("ticTacToe");
board.addEventListener("contextmenu", function (event){
    event.preventDefault();
})


let square = board.getElementsByTagName("div");
let playerX = 0;
let playerO = 2;
let turn = playerX;
let info = document.getElementById("info");



let cross = document.createElement("img");          // create img player 1
cross.style.width = "9vw";
cross.style.height = "9vh";
cross.src = "croix.png";


let round = document.createElement("img");          // create img player 2
round.style.width = "9vw";
round.style.height = "9vh";
round.src = "buttonGreen.png";



for (let i = 0; i < square.length; i++){
    square[i].addEventListener("mouseup", function (event){
        console.log(event.button);
        let ref = square[i].innerHTML;
        console.log(ref);

        switch (event.button){
            case 0:
                if((turn === playerX) && (ref === "")){
                    square[i].innerHTML = "<img src=\'croix.png\'>";
                    info.innerHTML = "Joueur 2";
                    turn = playerO;
                }
                break;
            case 2:
                if (turn === playerO && ref === ""){
                    square[i].innerHTML = "<img src=\'buttonGreen.png\'>";
                    info.innerHTML = "Joueur 1";
                    turn = playerX;
                }
                console.log(turn);
                break;
        }
    })
}

