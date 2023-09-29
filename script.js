let tick = new Image();
let cross = new Image();
let gridBoxes = document.querySelectorAll(".gridbox");
let emptyBoxes = document.querySelectorAll(".empty");
tick.src = "./resources/tick.png";
cross.src = "./resources/cross.png";

emptyBoxes.forEach(box => {
    box.addEventListener("click", ()=> {
            box.style.backgroundImage = "url(" + tick.src + ")";
            box.classList.remove("empty");
            box.classList.add("tick");
            game();
    })
});

function game() {
    let randomSelection = Math.floor(Math.random() *emptyBoxes.length);
    setTimeout(() => {
        emptyBoxes[randomSelection].style.backgroundImage = "url(" + cross.src + ")";;
    }, 200);
    win();
}

function win() {
    if(horizontalCheck() ||  verticalCheck()) {
        setTimeout(() => {
            alert("You win");
        }, 0);
    }
}


function horizontalCheck(){
    for(let i = 0; i < 9; i+=3) {
        if(gridBoxes[i].classList.contains("tick") && gridBoxes[i+1].classList.contains("tick") && gridBoxes[i+2].classList.contains("tick")){
            return true;
        }
    }
}

function verticalCheck(){
    for(let i = 0; i < 3; i++) {
        if(gridBoxes[i].classList.contains("tick") && gridBoxes[i+3].classList.contains("tick") && gridBoxes[i+6].classList.contains("tick")){
            return true;
        }
    }
}


function boxCheck(box) {
    if(box.style.backgroundImage != "url(" + cross.src + ")"){ 
        return true;
    }
}