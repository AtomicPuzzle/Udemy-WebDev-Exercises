//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number.");
var guess = Number(stringGuess);
//check guess
if (guess === secretNumber
{
   alert("YOU GOT IT RIGHT");
}
//check if higher
else if (guess > secretNumber)
{
   alert("Too high");
}
//check if lower
else
{
   alert("Too low");
}
