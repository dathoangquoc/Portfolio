// Spiral Animation

// Split each letter into seperate div
const text = 'lorem ipsum';
const charList = text.split('');

const spiral = document.getElementById("spiral");
charList.forEach(char => {
    spiral.insertAdjacentHTML('beforeend', `<div class='spiralChar'>${char}</div>`);
});

// Add delay to each div