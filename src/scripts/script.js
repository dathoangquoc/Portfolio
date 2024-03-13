
// Spiral Animation
// Split each letter into seperate div
const text = 'attention catching thingy';
const charList = text.split('');

const spiral = document.getElementById("spiral");
let count = 0;
let delay = 1000;
const delayIncrement = 200;

// Add delay to each div 
charList.forEach(char => {
    spiral.insertAdjacentHTML('beforeend', `<div class='spiralChar' id='spiralChar${count}'>${char}</div>`);
    document.getElementById(`spiralChar${count}`).style.animationDelay = `${delay}ms`
    delay += delayIncrement;
    count += 1;
});

// Duplicat the spiral
const spiral2 = document.getElementById("spiral2");
delay = 3000; // second spiral delay = first delay + half animation duration

charList.forEach(char => {
    spiral2.insertAdjacentHTML('beforeend', `<div class='spiralChar' id='spiralChar${count}'>${char}</div>`);
    document.getElementById(`spiralChar${count}`).style.animationDelay = `${delay}ms`
    delay += delayIncrement;
    count += 1;
});

