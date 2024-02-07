let score = "745";

if (typeof score === "number") {
  console.log("score accepted");
} else {
  console.log("successful");
  score = parseInt(score);
}

console.log(typeof score);

console.log(isNaN(score));

if (!isNaN(score)) {
  score = parseInt(score);
} else {
  console.log("score is a number already");
}

console.log(typeof score);

const n = 20;

console.log(isNaN(n));
