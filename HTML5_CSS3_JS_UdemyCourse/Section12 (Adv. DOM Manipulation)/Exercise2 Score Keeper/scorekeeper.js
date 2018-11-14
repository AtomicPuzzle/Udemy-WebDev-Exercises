var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");

var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");

var p1score = 0;
var p2score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
   if(!gameOver) {
      p1score++;
      if(p1score === winningScore) {
         gameOver = true;
         p1display.style.color = green;
      }
      p1display.textContent = p1score;
   }
});

p2Button.addEventListener("click", function() {
   if(!gameOver) {
      p2score++;
      if(p2score === winningScore) {
         gameOver = true;
         p2display.style.color = green;
      }
      p2display.textContent = p2score;
   }
});

resetButton.addEventListener("click", function() {
   gameOver = false;
   p1display.textContent = "0";
   p2display.textContent = "0";
   p1score = 0;
   p2score = 0;
});
