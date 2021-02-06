//refresh button
const refresh = document.getElementById('button');

// function that creates the grid and allows the boxes to change when mouse hovers overs
function createGrid() {
    const main = document.querySelector('#parent');

    let numRows = prompt("How many rows would you like?");
    let x = numRows * numRows;

    document.documentElement.style.setProperty("--columns-rows", numRows)

    for(let i = 0; i < x; i++) {
        let newDiv = document.createElement('div');
        main.appendChild(newDiv);
        newDiv.classList.add('element');
        newDiv.addEventListener('mouseover', colorGrid);
}
}

function reset() {
    window.location.reload();
}

refresh.addEventListener('click', reset);

function colorGrid() {
    this.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    if(this.style.backgroudColor !== 'transparent') {
        this.removeEventListener('mouseover', colorGrid);
    }
}

createGrid();
