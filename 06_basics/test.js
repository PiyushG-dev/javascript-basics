// const myDate = new Date();

const myArr = [3, 10, 18, 23, 56, 78];
const obj = {
  name: "james",
  surname: "taylor",
  age: 20,
  action: () => console.log("action"),
};

const { name, surname, action } = obj;
console.log(name, surname);
action();

const [a, b] = myArr;

console.log(a, b);

const popped = myArr.pop();
console.log(popped);
console.log(myArr);

const newArr = myArr.push(2);

console.log(newArr);

// const sliced = myArr.slice(1, 5);

// console.log(sliced);
// console.log("org", myArr);

// const spliced = myArr.splice(1, 5);

// console.log(spliced);
// console.log("org", myArr);
