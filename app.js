//refresh button
const refresh = document.getElementById('button');

//rows
let numRows = 16;
const main = document.querySelector('#parent');

// function that creates the grid and allows the boxes to change when mouse hovers overs
function createGrid() {
    let x = numRows * numRows;

    document.documentElement.style.setProperty("--columns-rows", numRows)

    for(let i = 0; i < x; i++) {
        let newDiv = document.createElement('div');
        main.appendChild(newDiv);
        newDiv.classList.add('element');
        newDiv.addEventListener('mouseover', colorGrid);
}
}

//Reset funciton
function reset() {
    numRows = prompt('How many rows would you like?');
}

refresh.addEventListener('click', reset);

//Radio buttons
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const black = document.getElementById('black');
const random = document.getElementById('random');



//Grid color
function colorGrid() {
    if(this.style.backgroudColor !== 'transparent') {
        this.removeEventListener('mouseover', colorGrid);
        if(red.checked) {
            this.style.backgroundColor = 'rgb(255,' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        } else if(blue.checked) {
            this.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ', 255)';
        } else if(green.checked) {
            this.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', 255,' + Math.floor(Math.random() * 255) + ')';
        } else if(black.checked) {
            this.style.backgroundColor = 'black';
        } else if(random.checked) {
            this.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        }
    }
}

createGrid();

console.log(red.value);
