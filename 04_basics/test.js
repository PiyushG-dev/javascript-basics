// stack and heap

let nameOne = "james";

let nameTwo = nameOne;
nameTwo = "David";

console.log(nameOne);
console.log(nameTwo);

const userDetailsOne = {
  email: "one@email.com",
  name: "Phil",
};

const userDetailsTwo = userDetailsOne;

userDetailsTwo.email = "two@email.com";

console.log(userDetailsTwo.email, userDetailsOne.email);
