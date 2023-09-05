let screenHeight = screen.height;
let screenwidth = screen.width;

const container = document.getElementById('container');

function createGrid () {
    for (let r = 0; r < 16; r++) {
        let row = document.createElement('div');
        row.style.height = (screenHeight / 16) + "px";
        container.appendChild(row);
    }
}

createGrid()