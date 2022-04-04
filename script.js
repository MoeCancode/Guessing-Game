var startBtn = document.getElementById("startGame");
console.log(startBtn);
// start.addEventListener("click", runGame);


// function runGame(e) {
//     console.log(123);
// }


// The pool of words that will be selected at random
var wordPool = ['INDEX', 'STYLE', 'SCRIPT', 'GUESS', 'BUTTON', 'ZIMBABWE', 'OAKLAND', 'DINOSAUR', 'FARLEY'];

//Creating an empty array that will be filled with the number of dashes as the word chosen
var dashArray = [];

//Randomly selecting a word from the wordPool array
var chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];

