const containerDiv = document.querySelector('.container');
const genButton = document.querySelector('#generate');
const eraseButton = document.querySelector('#erase');
const clearButton = document.querySelector('#clear');
const yellowButton = document.querySelector('#yellow');
const blueButton = document.querySelector('#blue');
const greenButton = document.querySelector('#green');
const brownButton = document.querySelector('#brown');

let squares;

genButton.addEventListener('click', () => {
    
    do {
        squares = +prompt('Canvas size?');
        if (!Number.isInteger(squares)) {
            alert('Only integer numbers accepted! Generate again.');
        } else if (squares > 100) {
            alert('Must be 100 or less! Generate again.');
        }
    } while (squares > 100);

    containerDiv.innerHTML = '';

    for (let j = 0; j < squares * squares; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'squareDiv');            
        squareDiv.setAttribute('style', `flex: 0 0 ${100 / squares}%;`);
        
        squareDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.classList.add('hovered');
        });
        containerDiv.appendChild(squareDiv);

        yellowButton.addEventListener('click', () => {
            for (let i = 0; i < squares * squares; i++) {
                if (!squareDiv.classList.contains('hovered')) {
                    squareDiv.style.backgroundColor = 'yellow';
                }
            }
        });


        blueButton.addEventListener('click', () => {
            for (let i = 0; i < squares * squares; i++) {
                if (!squareDiv.classList.contains('hovered')) {
                    squareDiv.style.backgroundColor = 'blue';
                }
            }
        });

        greenButton.addEventListener('click', () => {
            for (let i = 0; i < squares * squares; i++) {
                if (!squareDiv.classList.contains('hovered')) {
                    squareDiv.style.backgroundColor = 'green';
                }
            }
        });

        brownButton.addEventListener('click', () => {
            for (let i = 0; i < squares * squares; i++) {
                if (!squareDiv.classList.contains('hovered')) {
                    squareDiv.style.backgroundColor = 'brown';
                }
            }
        });


        eraseButton.addEventListener('click', () => {
            squareDiv.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'white';
            });
        });
        
        clearButton.addEventListener('click', () => {
            squareDiv.style.backgroundColor = 'white';
        });
    }
});


/*clearButton.addEventListener('click', () => {
    squareDiv.setAttribute('style', 'background-color: white');
});*/
