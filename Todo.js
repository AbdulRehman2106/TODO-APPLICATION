#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let todoList = [];
let conditions = true;
console.log(chalk_1.default.rgb(255, 255, 0)("\n \t WELCOME  TO  TODO  -  APPLICATION"));
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    while (conditions) {
        let option = yield inquirer_1.default.prompt([
            {
                name: "choice",
                type: "list",
                message: "\nSELECT AN OPTION YOU WANT TO DO\n",
                choices: ["ADD TASK", "DELETE TASK", "UPDATE TASK", "VIEW TODO-LIST", "EXIT"]
            }
        ]);
        if (option.choice === "ADD TASK") {
            yield addTask();
        }
        else if (option.choice === "DELETE TASK") {
            yield deleteTask();
        }
        else if (option.choice === "UPDATE TASK") {
            yield updateTask();
        }
        else if (option.choice === "VIEW TODO-LIST") {
            yield viewTask();
        }
        else if (option.choice === "EXIT")
            (conditions = false);
    }
    console.log(chalk_1.default.rgb(0, 250, 0)(`\n PRESENTING  BY  ABDUL  REHMAN\n`));
});
let addTask = () => __awaiter(void 0, void 0, void 0, function* () {
    let newTask = yield inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: "\nENTER YOUR NEW TASK"
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk_1.default.rgb(255, 0, 255)(`\n ${newTask.task} TASK ADDED SUCCESSFULLY IN TODO-LIST `));
});
// function To View All Todo-List
let viewTask = () => {
    console.log(chalk_1.default.rgb(244, 164, 96)("\n YOUR TODO-LIST : \n"));
    todoList.forEach((task, index) => {
        console.log(chalk_1.default.rgb(173, 255, 47)(`${index + 1}: ${task} \n`));
    });
};
// function To Delete A Task From The List
let deleteTask = () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewTask;
    let taskIndex = yield inquirer_1.default.prompt([
        {
            name: "index",
            type: "number",
            message: "\nENTER THE 'INDEX NO.' OF IHE TASK YOU WANT TO DELETE :  "
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk_1.default.rgb(255, 0, 0)(`\n ${deleteTask} THIS TASK HAS BEEN DELETE SUCCESSFULLY FROM YOUR TODO-LIST`));
});
// function To Update A Task 
let updateTask = () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewTask();
    let update_task_index = yield inquirer_1.default.prompt([
        {
            name: "index\n",
            type: "Number",
            Message: "ENTER THE 'INDEX NO' OF THE TASK YOU WANT TO UPDATE \n"
        },
        {
            name: "new_task",
            type: "input",
            message: "\nNOW ENTER YOUR NEW TASK NAME : ",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(chalk_1.default.rgb(60, 179, 113)(`\n TASK AT INDEX NO : ${update_task_index.index} UPDATED SUCCESSFULLY [FOR UPDATED LIST CHECK OPTON : " VIEW TODO-LIST "]`));
});
main();
