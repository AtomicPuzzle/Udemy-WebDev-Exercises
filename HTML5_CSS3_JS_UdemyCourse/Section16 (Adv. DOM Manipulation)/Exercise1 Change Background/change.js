var button = document.querySelector("button");
var isPurple = false;

// button.addEventListener(="click", function() {
//    if(isPurple) {
//       document.body.style.background = "white";
//    }
//    else {
//       document.body.style.background = "purple";
//    }
//    //if white
//       // make it purple
//    // else
//       // make it white
//    isPurple = !isPurple;
// })


button.addEventListener("click", function() {
   document.body.classList.toggle("purple");

})
