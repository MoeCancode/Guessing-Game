var startBtn = document.getElementById("startGame");
console.log(startBtn);
startBtn.addEventListener("click", runGame);


function runGame(e) {
    // The pool of words that will be selected at random
var wordPool = ['INDEX', 'STYLE', 'SCRIPT', 'GUESS', 'BUTTON', 'ZIMBABWE', 'OAKLAND', 'DINOSAUR', 'FARLEY'];

//Creating an empty array that will be filled with the number of dashes as the word chosen
var dashArray = [];

//Randomly selecting a word from the wordPool array
var chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
console.log(chosenWord);
dashArray.length = chosenWord.length;
var displayString = "";

//Fill dashArray with as many dashes as our chosen word's length
//Also create a string of dashes that we can display on the webpage
for(var i = 0; i < chosenWord.length; i++) {
    dashArray[i] = "_";
    displayString = displayString + "-";
}

console.log(displayString);


//Create new h3 using the dashArray
var hiddenWord = document.createElement('h3');
var innertext = document.createTextNode(displayString);
var insideWordBox = document.getElementById("innerWordBox");

//console.log(innertext);
hiddenWord.appendChild(innertext);
insideWordBox.appendChild(hiddenWord);

hiddenWord.style.color = "black";
hiddenWord.style.textAlign = "center";
hiddenWord.style.marginTop = "65px";
hiddenWord.style.fontSize = "75px";




}




