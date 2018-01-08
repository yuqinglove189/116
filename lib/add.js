let studentScore = require('./stuscore.js');
let readlineSync = require('readline-sync');

function getData(str) {
    let data = str.split(',');
    let name, id, className;
    let math, chinese, english, program;
    name = data[0];
    id = data[1];
    className = data[2];
    for (let item = 3; item < 7; item++) {
        let tag = data[item].split(":");
        if (tag[0] === "数学" || tag[0] === "math")
            math = tag[1];
        else if (tag[0] === "语文" || tag[0] === "chinese")
            chinese = tag[1];
        else if (tag[0] === "英语" || tag[0] === "english")
            english = tag[1];
        else if (tag[0] === "编程" || tag[0] === "program")
            program = tag[1];
    }

    let newData = new studentScore(name, id, className, math, chinese, english, program);
    return newData;
}


function judgeDataFormat(str) {
    let result = true;
    if (str.indexOf(';') >= 0 || str.indexOf('.') !== -1 || str.indexOf('/') !== -1)
        result = false;
    else if (str.split(',').length !== 7)
        result = false;
    else
        result = true;
    return result;
}


function addData(studentScoreList) {
    let tag = false;
    let data = readlineSync.question("Please enter student information (Format: name, school number, class, subject: grades,...), submit by return");
    while (tag === false) {
        if (judgeDataFormat(data) === false)
            data = readlineSync.question("Please input in the correct format (Format: name, school number, class, subject: grades, grades, etc.");
        else {
            studentScoreList.push(getData(data));
            tag = true;
        }
    }
    console.log(`student${data.split(",")[0]}add success`);
    return studentScoreList;
}
module.exports = addData;