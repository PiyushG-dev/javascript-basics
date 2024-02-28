const obj = {
  username: "james",
  age: 22,

  greeting: function () {
    console.log(`${this.username}, hello`);
    console.log(this);
  },
};

// obj.greeting();

function greet() {
  console.log(this);
}

// greet();

const arrow = () => {
  console.log(this);
};

// arrow();

const arr = [10, 20, 67, 123, 44];

const res = arr.map((item) => {
  return item * 2;
});

console.log(res);
console.log(arr);
