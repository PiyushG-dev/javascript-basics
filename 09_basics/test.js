const obj1 = { name: "james", surname: "taylor" };
const obj2 = { age: 40, group: "blue" };

const obj3 = { ...obj1, ...obj2 };

const { name, surname } = obj1;

// console.log(name, surname);

const object = Object.assign(obj1, obj2);

// console.log(object);

const users = [
  { name: "david", age: 40 },
  { name: "james", age: 23 },
  { name: "phil", age: 10 },
  { name: "russ", age: 50 },
  { name: "div", age: 45 },
];

const userKeys = Object.keys(users);

// const correctedUsers = users.map((user) => {
//   return (user.age = user.age * 2);
// });

// console.log(users);

// console.log(correctedUsers);

// const mapped = users.map((user) => user.age * 2);

// console.log(mapped);

users.forEach((user) => (user.isLoggedIn = "yes"));

// console.log(users);

const array1 = [10, 20, 30, 40, 50];
const array2 = [3, 7, 5, 4, 8];

array1.map((el) => el * 2);
array2.forEach((el) => el * 2);

console.log(array1);
console.log(array2);
