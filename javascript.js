let screenHeight = screen.height;
let screenwidth = screen.width;

const container = document.getElementById('container');

function createGrid () {
    for (let r = 0; r < 16; r++) {
        let row = document.createElement('div');
        row.setAttribute('style', 'display: flex;');
        row.style.flexDirection = 'row'
        row.style.height = (screenHeight / 16) + "px"; /* fits all 16 rows evenly across screen height */
        container.appendChild(row);

        for (let i = 0; i < 16; i++) {                 /* adds colums or items within each row */
            let item = document.createElement('div');
            item.style.flex = "1 1 auto";
            row.appendChild(item);
            item.addEventListener('onmouseover', hover());
        }
    }
}

function hover() {
    console.log('moused')
}



hover()
createGrid()