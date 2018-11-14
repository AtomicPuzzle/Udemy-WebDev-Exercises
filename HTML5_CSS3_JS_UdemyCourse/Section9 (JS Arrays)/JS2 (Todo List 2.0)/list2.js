alert("CONNECTION ESTABLISHED");

var todos[];

var input = prompt("What would you like to do?");

while (input !== "quit") {
   //handle input
   if (input === "list") {
      listTodo();
   }
   else if (input === "new") {
      //add todo
      addTodo();
   }
   else if (input === "delete") {
      delteTodo();
   }

   //ask again for new input
   input = prompt("What would you like to do?");
}

function listTodo() {
   console.log("*******");
   todos.forEach(function(todo, index) { // function(item, index)
      console.log(index + ": " + todo);
   });
   console.log("*******");
}

function addTodo() {
   //ask for new todo
   var newTodo = prompt("Enter new todo");
   //add to todos array
   todos.push(newTodo);
}

function deleteTodo() {
   //ask for index of todo to be deleted
   var index = prompt("Enter index of todo to delte");
   //delete that todo
   //splice()
   todos.splice(index, 1); //(index, how many things to delete)

}
