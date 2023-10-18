const yesNo = require("yes-no-words")

let yesNoArr = [];



for (let i = 0; i < 6; i++) {
    if (i % 2 == 0) {
        yesNoArr.push(yesNo.yesRandom())
    } else {
        yesNoArr.push(yesNo.noRandom())
    }
}

console.log(yesNoArr)