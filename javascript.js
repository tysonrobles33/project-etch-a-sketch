let screenHeight = screen.height;
let screenwidth = screen.width;

const container = document.getElementById('container');
const customizeButton = document.getElementById('customizeGrid');
const clearGrid = document.getElementById('clearGrid');

let heightInput = '';
let widthInput = '';

function createGrid () {
    let height = heightInput;
    let width = widthInput;

    if (height <= 100 && width <= 100) {
        for (let r = 0; r < height; r++) {
            let row = document.createElement('div');
            row.setAttribute('style', 'display: flex;');
            row.style.flexDirection = 'row'
            row.style.height = (screenHeight / width) + "px"; /* fits all 16 rows evenly across screen height */
            container.appendChild(row);

            for (let i = 0; i < width; i++) {                 /* adds colums or items within each row */
                let item = document.createElement('div');
                item.style.flex = "1 1 auto";
                item.classList.add('gridItem');
                row.appendChild(item);
            }
        }
    } else alert('Sorry Dont Know What Happened');
}


function changeColor() {
    let gridItems = document.querySelectorAll('.gridItem')
    let changeColor = false

    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mousedown', () => {
            gridItem.style.backgroundColor = 'black';
            changeColor = true;
        });
        gridItem.addEventListener('mouseup', () => {
            changeColor = false;
        });
        gridItem.addEventListener('mouseover', () => {
            if (changeColor == true) {
                gridItem.style.backgroundColor = 'black';
            }
        })
    })
}  

function gridInput() {
    customizeButton.addEventListener('click', () => {
        heightInput = prompt('Input Grid Height. Note: Max of 100');
        widthInput = prompt('Input Grid Width. Note: Max of 100');
        createGrid()
        changeColor()
        return[heightInput, widthInput]   
    });
    clearGrid.addEventListener('click', () => {
        location.reload()
    })
}

gridInput()


