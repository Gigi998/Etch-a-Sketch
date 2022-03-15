let size = 16;
let board = document.querySelector(".board");

board.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "blue";
})

function makeGrid(){
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < 256; i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function reset(){
    var newSize = window.prompt("Enter the squares per side: ");
    while (newSize <= 10 || newSize >= 100){
        alert("Invalid size")
        var newSize = window.prompt("Enter the squares per side: ");
    }
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
    board.style.gridTemplateColumns = `repeat(${newSize} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${newSize} , 1fr)`;

    for (let i = 0; i < newSize * newSize; i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function color(){
    var colors = ["red", "orange", "yellow", "green"];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    board.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = randColor;
    })
}

function eraser(){
    board.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "white";
    })
}
