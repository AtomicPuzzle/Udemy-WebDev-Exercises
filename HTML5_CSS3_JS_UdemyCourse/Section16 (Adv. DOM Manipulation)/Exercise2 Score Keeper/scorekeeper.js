// query selectors for buttons
// increment p1/p2 scores when buttons are pressed
// show p1/p2 scores to h1
// Stop incrementing when winScore is hit
// add 'reset' code for reset button
// return scores to 0
// remove 'winner' class style
// set gameOver to false;
// score limit -> event listener for 'change'

var span1 = document.querySelector("span:nth-of-type(1)");
var span2 = document.querySelector("span:nth-of-type(2)");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reButton = document.querySelector("#reset");

var scoreLimit = document.querySelector("#scoreLimit");
var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winScore) {
            gameOver = true;        
            span1.classList.add("winner");
        }
        span1.textContent = p1Score;
    }
    
});

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winScore) {
            gameOver = true;
            span2.classList.add("winner");
        }
        span2.textContent = p2Score;
    }
});

reButton.addEventListener("click", reset);
// no parentheses, otherwise the function will be executed immediately

function reset() {
    p1Score = 0;
    p2Score = 0;

    span1.textContent = p1Score;
    if (span1.classList.contains("winner"))
        span1.classList.remove("winner");

    span2.textContent = p2Score;
    if (span2.classList.contains("winner"))
        span2.classList.remove("winner");

    gameOver = false;
}

numInput.addEventListener("change", function() {
    // numInput.value gets value from <input> of type 'number' in a String format
    winScore = parseInt(this.value); // 'this.' for numInput
    scoreLimit.textContent = winScore;

    reset();
});
