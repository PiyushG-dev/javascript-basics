const arr = [2, [12, 10, 17, "james"], 8, 12];

// console.log(arr.includes("james"));
// console.log(arr[1].includes("james"));

const newArr = arr.slice();

const ppt = new Array(1, 2, 3);

console.log(ppt);

// console.log(newArr);

// hampers the existing arr
newArr[1][2] = 1000;
// doesnt hamper
newArr[0] = 2000;

// console.log(newArr);
// console.log(arr);
