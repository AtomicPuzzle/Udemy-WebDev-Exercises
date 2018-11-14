alert("CONNECTION ESTABLISHED");

/* Write a function factorial() which takes a single numberic argument
and returns the facotiral of that number
*/

function factorial(num) {
   if (num < 0) {
      return "Error. Enter a positive number or 0";
   }
   else if (num === 0) {
      return 1;
   }
   else {
      var total = 1;
      for(var i=num; i>0; i--) {
         total = total * i;
      }
      return total;
   }
}
