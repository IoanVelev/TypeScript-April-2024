function evenPositionElements(numArr: Array<string>): void {
  let filteredNums: Array<string> = [];
  for (let index = 0; index < numArr.length; index++) {
    if (index % 2 === 0) {
      filteredNums.push(numArr[index]);
    }
  }

  let res: string = filteredNums.join(" ");
  console.log(res);
}

evenPositionElements(["20", "30", "40", "50", "60"]);
