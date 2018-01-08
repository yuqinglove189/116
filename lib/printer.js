let readlineSync = require('readline-sync');
let sum;

function printItem(stulist, stuid) {
    let result = "";
    let average;
    stulist.forEach(item => {
        if (item.stuId === stuid) {
            sum = parseFloat(item.mathScore) + parseFloat(item.chineseScore) + parseFloat(item.englishScore) + parseFloat(item.programScore);
            average = sum / 4;
            result = `
${item.name}|${item.mathScore}|${item.chineseScore}|${item.englishScore}|${item.programScore}|${average}|${sum}`;
        }
    });
    return result;
}

function judgment(str) {
    let result = true;
    if (str.indexOf(';') >= 0 || str.indexOf(' ') !== -1 || str.indexOf('.') !== -1 || str.indexOf('/') !== -1)
        result = false;
    else result = true;
    return result;
}

function printer(studentScoreList) {
    let tag = false;
    let allScores = [];
    let data = readlineSync.question("Please enter the school number of the students to be printed (Format: sno , sno,...) and submit it by return");
    let result = "School report" +
        "name|math|chinese|english|program|average|sum " +
        "========================";
    let str = "";
    while (tag === false) {
        if (judgment(data) === true) {
            let stuId = data.split(",");
            stuId.forEach(item => {
                str = printItem(studentScoreList, item);
                result += str;
                allScores.push(sum);
            });
            tag = true;
        } else {
            data = readlineSync.question("Please enter the school number of the students to be printed in the correct format (Format: school number, school number,...) and submit it by return");
        }
    }
    let classAverage = allScores.reduce((a, b) => a + b) / allScores.length;
    let median;
    if (allScores.length % 2 == 0)
        median = (allScores[allScores.length / 2] + allScores[(allScores.length / 2) - 1]) / 2;
    else
        median = allScores[(allScores.length - 1) / 2];

    result += `========================
        The class all average：${classAverage.toFixed(2)}
        The class median score：${median}`;

    console.log(result);

}
module.exports = printer;