const container = document.querySelector(".container")

//creating the grid
for(let i = 0 ; i < 805 ; i++){
    const cell = document.createElement("div")
    cell.classList.add("cell")
    
    cell.addEventListener("mouseover", (e) => changerColor(e))
    cell.addEventListener("mouseout", (e) => removeColor(e))
    container.appendChild(cell);
}

//changecolor
function changerColor(e){
    let randomColor = generateColor();
    e.target.style.backgroundColor = randomColor;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//removecolor
function removeColor(e){
    sleep(500).then(() => {
        e.target.style.backgroundColor = `#303030`;
    })
}

//generatecolor
function generateColor(){
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}