function evenPositionElements(numArr) {
    let filteredNums = [];
    for (let index = 0; index < numArr.length; index++) {
        if (index % 2 === 0) {
            filteredNums.push(numArr[index]);
        }
    }
    let res = filteredNums.join(" ");
    console.log(res);
}
evenPositionElements(["20", "30", "40", "50", "60"]);
