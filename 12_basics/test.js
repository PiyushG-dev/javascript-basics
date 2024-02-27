const obj = {
  username: "james",
  age: 22,

  greeting: function () {
    console.log(`${this.username}, hello`);
    console.log(this);
  },
};

obj.greeting();

function greet() {
  console.log(this);
}

greet();

const arrow = () => {
  console.log(this);
};

arrow();
