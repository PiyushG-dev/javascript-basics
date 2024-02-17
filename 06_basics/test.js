const myDate = new Date();

const myArr = [3, 10, 18, 23, 56, 78];

const sliced = myArr.slice(1, 5);

console.log(sliced);
console.log("org", myArr);

const spliced = myArr.splice(1, 5);

console.log(spliced);
console.log("org", myArr);
