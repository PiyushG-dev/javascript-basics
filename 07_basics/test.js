const arr = [2, [12, 10, 17, "james"], 8, 12];

const newArr = arr.slice();

console.log(newArr);

// hampers the existing arr
newArr[1][2] = 1000;
// doesnt hamper
newArr[0] = 2000;

console.log(newArr);
console.log(arr);
