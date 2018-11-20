// Select all divs and give them a purple background
$("div").css("background-color", "purple");

// select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");

// select the div with id "third" and give it a orange border
var borderStyle = {
    // ALL THREE OF THE BELOW METHODS WORK

    border : "2px solid orange"

    // borderColor : "orange",
    // borderWidth : "2px",
    // borderStyle : "solid"

    // "border-color" : "orange",
    // "border-width" : "2px",
    // "border-style" : "solid"
};

$("#third").css(borderStyle);

// Bonus: Select the first div only and change its font color to pink
var fontPink = {
    color : "pink"
};

$("div:first-of-type").css(fontPink);