var startBtn = document.getElementById("startGame");
startBtn.addEventListener("click", runGame);
var rTime = document.getElementById("remainingTime");
var winsDisplay = document.getElementById("numberOfWins");
var loseDisplay = document.getElementById("numberOfLosses");
var timer = 10;
var wins = 0;
var losses = 0;
var isWin = false;




function runGame(e) {
    
    var counter = 0;
    timer = 10;
    rTime.textContent = "Time Left: " + timer;

//Start timer function
startTimer();

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
    dashArray[i] = "-";
    
}
displayString = dashArray.join("");

// console.log(displayString);


//Change h3 to our displayString
var hiddenWord = document.getElementById("theWord");
hiddenWord.style.fontSize = "75px";
hiddenWord.innerHTML = displayString;
// console.log(hiddenWord);



document.addEventListener("keypress", function checkForMatch(e) {
    //Save pressed key in a variable
    var KeyPressed = e.key.toUpperCase();

    var dashCount = chosenWord.length;


    //Make algorithm to check and replace key pressed with dashes
    for(var x=0; x<chosenWord.length; x++)
    {
        if((KeyPressed.toUpperCase()) == chosenWord[x])
        {
            dashArray[x] = KeyPressed.toUpperCase();
            displayString = dashArray.join("");
            hiddenWord.textContent = displayString;
        }
        
    }  

    //Win condition
    // var dashCount = chosenWord.length;

for(var y =0; y<chosenWord.length; y++)
{
    if(displayString[y] != "-")
    {
        dashCount --;
        console.log("dashcount is " + dashCount);

    }

}
if(dashCount == 0)
{
    wins++;
    winsDisplay.textContent = "Wins: " + wins;

}

})



function startTimer() {
    var setTime = setInterval(function() {
        
        
    if(timer > 0)
    {
        
        timer--;
        rTime.textContent = "Time Left: " + timer;
    // console.log(timer);
    }
    else {
        clearInterval(setTime);
        losses++;
        loseDisplay.textContent = "Losses: " + losses;
        return;
    }

}, 1000)
}


}
