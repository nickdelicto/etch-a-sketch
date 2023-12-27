const containerDiv = document.querySelector('.container');

const button = document.querySelector('button');

let squares;

button.addEventListener('click', () => {
    containerDiv.innerHTML = '';
    do {
        squares = +prompt('how many squares do you want for each side of the grid?');
    } while (squares > 100);

    for (let j = 0; j < squares * squares; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'squareDiv');            
        squareDiv.setAttribute('style', `flex: 1 0 ${100 / squares}%;`);
        squareDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'yellow';
        });
        containerDiv.appendChild(squareDiv);    
    }  
});





