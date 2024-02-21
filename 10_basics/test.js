const addNum = (a, b) => {
  return a + b;
};

const result = addNum(3, 7);

// console.log(result);

const loginUser = (username) => {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
};

const res = loginUser("hey");

// console.log(res);

const arr = [10, 20, 50, 70, 1100];

const [a, b, ...rest] = arr;

// console.log(a, b);
// console.log(rest);

const obj = {
  name: "james",
  age: 20,
  father: "phil",
};

const { name, ...r } = obj;

console.log(name, r);
