const containerDiv = document.querySelector('.container');

const button = document.querySelector('button');

let squares;

button.addEventListener('click', () => {
    containerDiv.innerHTML = '';
    do {
        squares = +prompt('how many squares do you want for each side of the grid?');
    } while (squares > 100);

    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'squareDiv');
            squareDiv.addEventListener('mouseover', (e) => {
                e.target.setAttribute('style', 'background-color: yellow;');
            });
            containerDiv.appendChild(squareDiv);    
        }  
    }
});





