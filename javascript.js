let screenHeight = screen.height;
let screenwidth = screen.width;

const container = document.getElementById('container');
const customizeButton = document.getElementById('customizeGrid');
const clearGrid = document.getElementById('clearGrid');
const colorButtons = document.querySelectorAll('button');

let heightInput = '';
let widthInput = '';

let selectedColor = 'black' 

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
            gridItem.style.backgroundColor = selectedColor;
            changeColor = true;
        });
        gridItem.addEventListener('mouseup', () => {
            changeColor = false;
        });
        gridItem.addEventListener('mouseover', () => {
            if (changeColor == true) {
                gridItem.style.backgroundColor = selectedColor;
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

function colorSelector () {
    colorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('red')) {selectedColor = 'red'}
            if (button.classList.contains('blue')) {selectedColor = 'blue'}
            if (button.classList.contains('green')) {selectedColor = 'green'}
            if (button.classList.contains('yellow')) {selectedColor = 'yellow'}
            if (button.classList.contains('purple')) {selectedColor = 'purple'}
            if (button.classList.contains('colorRandom')) {selectedColor = getRandomRGB()}
        })
    })
}

function getRandomRGB () {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let rgb = `rgb(${red}, ${blue}, ${green})`
    return rgb
}

colorSelector()
gridInput()


