// Shine fx

// Add mousemove listener to all card div
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { x, y } = card.getBoundingClientRect();
        card.style.setProperty("--x", e.clientX - x);
        card.style.setProperty("--y", e.clientY - y);
    })
});

// Spiral Animation
// Split each letter into seperate div
const text = 'eyecatchingthingy';
const charList = text.split('');

const spiral = document.getElementById("spiral");
let count = 0;
let delay = 1000;
const delayIncrement = 150;

// Add delay to each div 
charList.forEach(char => {
    spiral.insertAdjacentHTML('beforeend', `<div class='spiralChar text-3xl' id='spiralChar${count}'>${char}</div>`);
    document.getElementById(`spiralChar${count}`).style.animationDelay = `${delay}ms`
    delay += delayIncrement;
    count += 1;
});

// Duplicat the spiral
const spiral2 = document.getElementById("spiral2");
delay = 3000; // second spiral delay = first delay + half animation duration

charList.forEach(char => {
    spiral2.insertAdjacentHTML('beforeend', `<div class='spiralChar text-3xl' id='spiralChar${count}'>${char}</div>`);
    document.getElementById(`spiralChar${count}`).style.animationDelay = `${delay}ms`
    delay += delayIncrement;
    count += 1;
});

