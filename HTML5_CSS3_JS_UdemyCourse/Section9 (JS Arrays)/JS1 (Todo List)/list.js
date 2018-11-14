console.log("CONNECTION ESTABLISHED");

var todos = ["Buy new controller"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
   if (input === "list") {
      console.log(todos);
   }
   else if (todos.indexOf(input) === -1) {
      //add to todos array
      todos.push(newTodo)
   }
   else if (todos.indexOf(input) !== -1) {
      console.log("Todo already in array");
   }
   //ask for new todos
   input = prompt("Enter new todo");
}
console.log("OK, YOU QUIT THE APP");
