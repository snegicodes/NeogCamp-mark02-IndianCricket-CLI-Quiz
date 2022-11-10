var readlineSync = require("readline-sync");

var score = 0;

var highScoreList = [
  {
    name: "Sarthak ",
    score: 5,
  },

  {
    name: "Dewank",
    score: 4,
  },
];

var questionsList = [
  {
    question: "Who is known as captain cool?\n a Dhoni\n b Kohli\n c Gambhir\n",
    answer: "a",
  },
  {
    question: "Who is known as Cheeku?\n a Dhoni\n b Kohli\n c Yuvraj\n",
    answer: "b",
  },
  {
    question:
      "Who is known as Master Blaster?\n a Dhoni\n b Kohli\n c Sachin\n",
    answer: "c",
  },
  {
    question:
      "Who is known as Terminator?\n a Dhoni\n b Harbhajan\n c Yuvraj\n",
    answer: "b",
  },
  {
    question:
      "Who was the man of match in 2011 WC Final Match?\n a Dhoni\n b Kohli\n c Yuvraj\n",
    answer: "a",
  },
];

function greetUser() {
  var userName = readlineSync.question("What is your name? ");
  console.log("Hi " + userName + ", Welcome to the quiz game.");
}

function play(question, answer) {
  var getAnswer = readlineSync.question(question);

  if (getAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are Correct. You get +1 points. ");
    score = score + 1;
  } else {
    console.log("You are Wrong. You get no points");
  }

  console.log("Current Score => ", score);
  console.log("______________");
  console.log(" ");
}

function startGame() {
  for (var i = 0; i < questionsList.length; i++) {
    play(questionsList[i].question, questionsList[i].answer);
  }
}

function finalScore() {
  console.log(" ");
  console.log("Your Final Score is => " + score);
  console.log("------------");
  console.log("HIGH SCORES");
  highScoreList.map((person) =>
    console.log(person.name + " => " + person.score)
  );

  console.log("------------");

  console.log(
    "If you beat the high scores, then send me a screenshot to update."
  );

  console.log(" ");
  console.log("Thank You for playing my quiz game.");
}

greetUser();
startGame();
finalScore();
