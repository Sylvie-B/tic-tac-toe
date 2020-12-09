
let board = document.getElementById("ticTacToe");
board.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

let square = board.getElementsByTagName("div");   // get squares
let cross = document.createElement("img");          // create img player 1
cross.style.width = "9vw";
cross.style.height = "9vh";
cross.src = "croix.png";

let round = document.createElement("img");          // create img player 2
round.style.width = "9vw";
round.style.height = "9vh";
round.src = "buttonGreen.png";

// square[0].appendChild(cross);
// square[1].appendChild(round);

console.log(square);

for (let i = 0; i < square.length; i++){
    square[i].addEventListener("mouseup", function (event){
        console.log(event.button);
        square[i].appendChild(cross);
    })
}

