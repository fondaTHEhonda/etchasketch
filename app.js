function createGrid() {
    const main = document.querySelector('#parent');

    let numRows = prompt("How many rows would you like?");
    let x = numRows * numRows;

    document.documentElement.style.setProperty("--columns-rows", numRows)

    for(let i = 0; i < x; i++) {
        let newDiv = document.createElement('div');
        main.appendChild(newDiv);
        newDiv.classList.add('element');
        newDiv.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'blue';

    });
}
}

createGrid();
