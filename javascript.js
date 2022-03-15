let size = 16;
let board = document.querySelector(".board");

board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

for (let i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
}



board.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "orange";
})

function reset(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "blue"));
}

function red(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "red"));
}

function black(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "black"));
}
