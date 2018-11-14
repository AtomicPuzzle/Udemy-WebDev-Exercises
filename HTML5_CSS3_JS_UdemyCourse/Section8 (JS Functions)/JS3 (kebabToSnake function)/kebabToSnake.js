alert("CONNECTION ESTABLISHED");

/* Write a function kebabToSnake() which takes a single kebab-cased string
argument and returns the snake_cased version
replace all "-" with "_"
*/

function kebabToSnake(str) {
   var newStr = str.replace(/-/g, "_");

   return newStr;
}
