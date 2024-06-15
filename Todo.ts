#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";


let todoList : string [] = []; 

let conditions = true;

console.log(chalk.rgb(255,255,0)("\n \t WELCOME  TO  TODO  -  APPLICATION"));

let main = async () => {

    while (conditions){
        
        let option = await inquirer.prompt([

            {

            name : "choice",

            type : "list",

           message :"\nSELECT AN OPTION YOU WANT TO DO\n",

            choices : ["ADD TASK" , "DELETE TASK" , "UPDATE TASK" , "VIEW TODO-LIST" , "EXIT"]

            }
        ]);

        if (option.choice === "ADD TASK") {
            
        await addTask()

        }
        else if (option.choice === "DELETE TASK"){

            await deleteTask()
        }

        else if (option.choice === "UPDATE TASK") {
            
        await updateTask()

        }

        else if (option.choice === "VIEW TODO-LIST"){

            await viewTask()
            
        }
        
        else if (option.choice === "EXIT")(
            
            conditions = false


         )
         
    }
    
console.log(chalk.rgb(0,250,0)(`\n PRESENTING  BY  ABDUL  REHMAN\n`));

}

let addTask = async () => {
    
    let newTask = await inquirer.prompt([

        {

        name : "task",

        type : "input",

        message : "\nENTER YOUR NEW TASK"

        }
    ]);

todoList.push(newTask.task)

console.log(chalk.rgb(255,0,255)(`\n ${newTask.task} TASK ADDED SUCCESSFULLY IN TODO-LIST `));

}

// function To View All Todo-List

let viewTask = () =>{

    console.log(chalk.rgb(244,164,96)("\n YOUR TODO-LIST : \n"));
 
    todoList.forEach((task, index) => {

    console.log(chalk.rgb(173,255,47)(`${index +1}: ${task} \n`));
    
    })
}
// function To Delete A Task From The List

let deleteTask = async() => {

    await viewTask 

    let taskIndex = await inquirer.prompt([

        {

    name : "index",

    type : "number",

    message : "\nENTER THE 'INDEX NO.' OF IHE TASK YOU WANT TO DELETE :  "

        }
    ]);

    let deleteTask = todoList.splice(taskIndex.index - 1 , 1 , );

    console.log(chalk.rgb(255,0,0)(`\n ${deleteTask} THIS TASK HAS BEEN DELETE SUCCESSFULLY FROM YOUR TODO-LIST`));
    

}

// function To Update A Task 

let updateTask = async() => {

    await viewTask()

    let update_task_index = await inquirer.prompt([

        {

        name : "index\n",

        type : "Number",

        Message : "ENTER THE 'INDEX NO' OF THE TASK YOU WANT TO UPDATE \n"

        },

        {
            
        name : "new_task",

        type : "input",

        message : "\nNOW ENTER YOUR NEW TASK NAME : " ,

        }
    ]);

todoList [update_task_index.index - 1 ] = update_task_index.new_task

console.log(chalk.rgb(60,179,113)(`\n TASK AT INDEX NO : ${update_task_index.index} UPDATED SUCCESSFULLY [FOR UPDATED LIST CHECK OPTON : " VIEW TODO-LIST "]`));

}

main();


