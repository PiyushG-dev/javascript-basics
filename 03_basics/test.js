const items = ["james", "david", "phil", "mat", "bob", "gill"];
const nums = [1, 10, 28, 57, 2, 12, 40, 56, 11];
const obj = [
  { id: 1, name: "Apple", color: "Red" },
  { id: 2, name: "Banana", color: "Yellow" },
  { id: 3, name: "Orange", color: "Orange" },
  { id: 4, name: "Grapes", color: "Purple" },
  { id: 5, name: "Watermelon", color: "Green" },
  { id: 6, name: "Pineapple", color: "Yellow" },
  { id: 7, name: "Strawberry", color: "Red" },
  { id: 8, name: "Blueberry", color: "Blue" },
  { id: 9, name: "Mango", color: "Orange" },
  { id: 10, name: "Kiwi", color: "Green" },
];

const fruits = obj.map((item) => item.name);

const mapped = items.map((item) => item);
const filter = nums.filter((num) => num > 20);

const reversed = obj.reverse();

console.log(reversed);
