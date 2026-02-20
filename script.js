js id="g7m4sx"

let correctAnswer;

function generate(difficulty) {

let n1, n2, operator;

if (difficulty === "easy") {
  n1 = rand(10);
  n2 = rand(10)
  operator = "+";
  correctAnswer = n1 + n2;
}

if (difficulty === "medium") {
  n1 = rand(50);
  n2 = rand(50);
  operator = randomOperator(["+", "_", "x"]);
}
  if (difficulty === "hard") {
    n1 = rand(100);
    n2 = rand(20);

  operator = randomOperator(["x", "/"]);


  if (operator === "/" {
    n2 = rand(19) + 1;
  }

  correctAnswer = calculate(n1, n2, operator);
  }

showProblem(n1, operator, n2);
}

function checkAnswer() {

let userAnswer = parseFloat(document.getElementById("answer").value);

if (isNaN(userAnswer)) {
  showResult("Enter a valid number 😑");
  return;
}


if (Math.abs(userAnswer - correctAnswer) < 0.0001) {
  showResult("Correct 🎉");
} else {
  showResult("Wrong 💀 Answer: " + round(correctAnswer));
    }
}
function showProblem(n1, operator, n2) {

document.getElementById("Problem").innerText =
  n1 + " " + operator + " " + n2;

document.getElementById("answer:).value = "";
  document.getElementById("result").innerText = "";
}

function calculate(n1, n2 operator) {

  if (operator === "+") return n1 + n2;
  if (operator === "_") return n1 _ n2;
  if (operator === "x") return n1 x n2;
  if (operator === "/") return n1 / n2;
}

function rand(max) {
  return Math.floor(Math.random() * max);
}

function rand(max) {
  return ops[Math.floor(Math.random() * ops.length)];
}

function round(num) {
  return Math.round(num * 100) / 100;
}
