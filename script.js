const container = document.querySelector(".container");
const reset = document.querySelector("#reset");
const range = document.querySelector("#size");
const rainbow = document.querySelector("#rainbow");
const progressive = document.querySelector("#progressive");

let rainbowToggle = false;

function createGrid(value) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    const totalsquares = value * value;
    for (i = 0; i < totalsquares; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.setAttribute("class", "gridblock");
        gridBlock.setAttribute("id", "gblock");
        gridBlock.style.width = 800 / value + "px";
        gridBlock.style.height = 800 / value + "px";
        container.appendChild(gridBlock);
    }
}


reset.addEventListener("click", () => {
    createGrid(range.value);
})



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

container.addEventListener('mouseover', (event) => {

    let target = event.target;
    if (target.id == "gblock" && !rainbowToggle) {
        console.log("mouse");
        target.setAttribute("class", "gridblockdark");
        target.style.backgroundColor = "black";
    } else if (target.id == "gblock" && rainbowToggle) {
        target.setAttribute("class", "gridblockdark");
        target.style.backgroundColor = getRandomColor();
    }
})
rainbow.addEventListener("click", () => {
    if (rainbowToggle) {
        rainbowToggle = false;
    } else {
        rainbowToggle = true;
    }
})
createGrid(16);