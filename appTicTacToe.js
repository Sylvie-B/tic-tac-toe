document.addEventListener("contextmenu", function (event){
    event.preventDefault();
})

let board = document.getElementById("ticTacToe");
let square = board.getElementsByTagName("div");

console.log(square);

for (let i = 0; i < square.length; i++){
    square[i].addEventListener("pointerup", function (event){
        console.log(event.button);
    }, false)
}