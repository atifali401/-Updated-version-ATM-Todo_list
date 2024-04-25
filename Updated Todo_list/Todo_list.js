import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an option..!",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        }
    ]);
    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add items in the list!",
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Update items in the list!",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add items in the list!",
        });
        let moreTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...moreTodo, addTodo.todo];
        console.log(todos);
    }
    if (ans.select === "View") {
        console.log("***** TO-DO LIST *****");
        console.log(todos);
    }
    if (ans.select === "Delete") {
        let deleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Select items from the list to delete",
            choices: todos.map(item => item),
        });
        let moreTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...moreTodo];
        console.log(todos);
    }
    if (ans.select === "Exit") {
        console.log("Exiting program....");
        condition = false;
    }
}
