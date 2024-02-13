import inquirer from "inquirer";
let todos = [];
let iteration = true;
while (iteration) {
    const answer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter a TODO"
        },
        {
            name: "nextTodo",
            type: "confirm",
            message: "Want to add more  todos",
            default: false
        }
    ]);
    const { todo, nextTodo } = answer;
    iteration = nextTodo;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("please add todos one by one to create a todo list");
    }
}
if (todos.length > 0) {
    console.log("Your todo list ");
    todos.forEach(element => {
        console.log(element);
    });
}
else {
    console.log("NO todo available");
}
