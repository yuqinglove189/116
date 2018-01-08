let readlineSync = require('readline-sync');
let add = require('./add.js');
let print = require('./printer.js');

function choices(choice, studentScoreList) {
    if (choice === "1")
        studentScoreList = add(studentScoreList);
    else if (choice === "2")
        print(studentScoreList);
    else if (choice === "3")
        return;
    else
        console.log("请选择正确选项");
}


function main() {
    let studentScoreList = [];
    let choice;
    do {
        choice = readlineSync.question("1.add student\n" +
            "2.Produce a report card\n" +
            "3.exit\n" +
            "Please enter your choice(1~3):");

        choices(choice, studentScoreList);
    } while (choice !== "3");
}
module.exports = main;