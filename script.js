let tick = new Image();
let cross = new Image();
let gridBoxes = document.querySelectorAll(".gridbox");
let emptyBoxes = document.querySelectorAll(".empty");
tick.src = "./resources/tick.png";
cross.src = "./resources/cross.png";

emptyBoxes.forEach(box => {
    box.addEventListener("click", clickHandler, {once: true})
});

function clickHandler() {
    this.style.backgroundImage = "url(" + tick.src + ")";
    this.classList.remove("empty");
    this.classList.add("tick");
    game();
    win();
}


function game() {
    emptyBoxes = document.querySelectorAll(".empty");
    let randomSelection = Math.floor(Math.random() *emptyBoxes.length);
    let box = emptyBoxes[randomSelection];
    box.style.backgroundImage = "url(" + cross.src + ")";
    box.classList.remove("empty");
    box.classList.add("cross");
    box.removeEventListener("click", clickHandler)
}

function win() {
    if(horizontalCheck() == "player" ||  verticalCheck() =="player" || diagonalCheck() == "player") {
        emptyBoxes.forEach(box => {
            box.removeEventListener("click", clickHandler, {once: true})
        });
        setTimeout(() => {
            alert("You win");
        }, 0);
    }
    else if(horizontalCheck() == "enemy" ||  verticalCheck() == "enemy" || diagonalCheck() == "enemy"){
        emptyBoxes.forEach(box => {
            box.removeEventListener("click", clickHandler, {once: true})
        });
        setTimeout(() => {
            alert("You Lost");
        }, 0);
    }

}


function horizontalCheck(){
    for(let i = 0; i < 9; i+=3) {
        if(gridBoxes[i].classList.contains("tick") && gridBoxes[i+1].classList.contains("tick") && gridBoxes[i+2].classList.contains("tick")){
            console.log("one");
            return "player";
        }
        else if(gridBoxes[i].classList.contains("cross") && gridBoxes[i+1].classList.contains("cross") && gridBoxes[i+2].classList.contains("cross")){
            console.log("one");
            return "enemy";
        }
    }
}

function verticalCheck(){
    for(let i = 0; i < 3; i++) {
        if(gridBoxes[i].classList.contains("tick") && gridBoxes[i+3].classList.contains("tick") && gridBoxes[i+6].classList.contains("tick")){
            gridBoxes[i].style.backgroundColor = "#3fc03f";
            gridBoxes[i+3].style.backgroundColor = "#3fc03f";
            gridBoxes[i+6].style.backgroundColor = "#3fc03f";
            return "player";
        }
        else if(gridBoxes[i].classList.contains("cross") && gridBoxes[i+3].classList.contains("cross") && gridBoxes[i+6].classList.contains("cross")){
            gridBoxes[i].style.backgroundColor = "#d34c4c";
            gridBoxes[i+3].style.backgroundColor = "#d34c4c";
            gridBoxes[i+6].style.backgroundColor = "#d34c4c";
            return "enemy";
        }
    }
}

function diagonalCheck() {
    if(gridBoxes[4].classList.contains("tick")) {
        if(gridBoxes[0].classList.contains("tick") && gridBoxes[8].classList.contains("tick") ) {
            gridBoxes[4].style.backgroundColor = "#3fc03f";
            gridBoxes[0].style.backgroundColor = "#3fc03f";
            gridBoxes[8].style.backgroundColor = "#3fc03f";
            return "player";
        }
        else if (gridBoxes[6].classList.contains("tick") && gridBoxes[2].classList.contains("tick")) {
            gridBoxes[4].style.backgroundColor = "#3fc03f";
            gridBoxes[6].style.backgroundColor = "#3fc03f";
            gridBoxes[2].style.backgroundColor = "#3fc03f";
            return "player";
        }
    }

    else if(gridBoxes[4].classList.contains("cross")) {
        if(gridBoxes[0].classList.contains("cross") && gridBoxes[8].classList.contains("cross")) {
            gridBoxes[4].style.backgroundColor = "#d34c4c";
            gridBoxes[0].style.backgroundColor = "#d34c4c";
            gridBoxes[8].style.backgroundColor = "#d34c4c";
            return "enemy";
        }
        else if(gridBoxes[6].classList.contains("cross") && gridBoxes[2].classList.contains("cross")) {
            gridBoxes[4].style.backgroundColor = "#d34c4c";
            gridBoxes[6].style.backgroundColor = "#d34c4c";
            gridBoxes[2].style.backgroundColor = "#d34c4c";
            return "enemy";
        }
    }
}