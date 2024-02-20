const arr = [12, 14, 18, 23, 67];
const arr2 = ["max", "steve", "james"];

// arr[arr.length] = 3;

// arr.splice(0, 4, 10);

// console.log(arr);

const newArr = [...arr, ...arr2];

console.log(newArr);

const arrFrom = Array.from("james");
const arrOf = Array.of("james");

console.log(arrFrom);
console.log(arrOf);

const brandNew = new Array(1, 2, 3);

console.log(brandNew);
