const containerDiv = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'squareDiv');
    squareDiv.addEventListener('mouseover', (e) => {
        e.target.setAttribute('style', 'background-color: yellow;');
    } );
    containerDiv.appendChild(squareDiv);
}

