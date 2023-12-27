const containerDiv = document.querySelector('.container');
const genButton = document.querySelector('#generate');
const eraseButton = document.querySelector('#erase');
const clearButton = document.querySelector('#clear');

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
        });
        containerDiv.appendChild(squareDiv);
        
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
