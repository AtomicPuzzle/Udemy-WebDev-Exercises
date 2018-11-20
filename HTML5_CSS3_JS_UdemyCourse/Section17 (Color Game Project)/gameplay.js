var numSquares = 6;
var colours = [];
var selectedColour;

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var messageDisplay = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");

var squares = document.querySelectorAll(".square");
var rgbSelect = document.querySelector("#rgbSelect");


init();

function init() {
    // apply mode buttons event listeners
    setupModeButtons();
    setupSquares();

    reset();
}


resetButton.addEventListener("click", reset);

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add initial colours to squares
        squares[i].style.backgroundColor = colours[i];

        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab colour of clicked square
            var clickedColour = this.style.backgroundColor;

            // compare square's colour to selectedColour
            if (clickedColour === selectedColour) {
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColour;
                resetButton.textContent = "Play Again?";
                endColours(clickedColour);
            } else {
                this.style.backgroundColor = "#353535";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;

            // same as:
            // if (this.textContent === "EASY")
            //     numSquares = 3;
            // else
            //     numSquares = 6;

            reset();
        });
    }
}

function reset() {
    // generate all new colours
    colours = genColourList(numSquares);

    // pick a new random colour from array
    selectedColour = colours[Math.floor((Math.random() * (numSquares - 1) + 0))];

    rgbSelect.textContent = selectedColour.toUpperCase();

    // relabel reset button
    resetButton.textContent = "New Colours";

    // reset header colour
    h1.style.backgroundColor = "steelblue";

    // reset message notification
    messageDisplay.textContent = "";

    // change colours of squares
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            // add initial colours to squares
            squares[i].style.backgroundColor = colours[i];

            squares[i].style.display = "block";
        }
        else {
            // if colours runs out, set remaining three to block
            squares[i].style.display = "none";
        }

    }
}







function colourRand() {
    var r = Math.floor((Math.random() * 255) + 0);
    var g = Math.floor((Math.random() * 255) + 0);
    var b = Math.floor((Math.random() * 255) + 0);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function genColourList(num) {
    // array of colours to return
    var arr = [];

    // add num random colours to array
    for (let i = 0; i < num; i++) {
        arr.push(colourRand());
    }

    // return array
    return arr;
}

function endColours(colour) {
    // loop through all squares
    for (let i = 0; i < colours.length; i++) {
        // change each colour to match given colour
        squares[i].style.backgroundColor = colour;
    }
}