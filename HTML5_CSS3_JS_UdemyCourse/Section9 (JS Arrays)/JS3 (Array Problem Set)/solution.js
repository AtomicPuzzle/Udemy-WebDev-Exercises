alert("CONNECTION ESTAGLISHED");

console.log("CONNECTED");


//printReverse() function to take an array and print its reverse
function printReverse(arr) {
   for (var i=arr.length-1; i>=0; i--) {
      console.log(arr[i]);
   }
}

printReverse([3,6,2,5]); //5, 2, 6, 3


//isUniform() function which takes an array as an argument and returns true if
// all elements in the array are identical
function isUniform(arr) {
   var first = arr[0];
   // using forEach(function(element)) would result in a false only exiting the first
   // function, but not the main isUniform() function
   for (int i=1; i<arr.length; i++) {
      if (arr[i] !== first) {
         return false;
      }
   }
   return true;
}

isUniform([2,1,2]); // false
isUniform([1,1,1]); // true



//sumArray() function which takes an array and returns the sum of all numbers
// in the array
function sumArray(arr) {
   var total = 0;
   arr.forEach(function(element) {
      total += element;
   });
   return total;
}


//max() function that acepts an array of numbers and returns the maximum number
// in the array
function max(arr) {
   var max = arr[0];
   for (var i=1; i<arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}
