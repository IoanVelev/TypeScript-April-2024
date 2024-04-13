function biggerHalf(numArr) {
    let sortedArr = numArr.sort((a, b) => a - b);
    let res = sortedArr.slice(sortedArr.length / 2, sortedArr.length);
    return res;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log(biggerHalf([4, 7, 2, 5]));
