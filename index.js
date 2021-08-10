const chalk = require('chalk');

var readlineSync = require('readline-sync');

var userAnswer= readlineSync.question(chalk.green("What's your good name? "));

var score=0;

console.log(chalk.magenta("Welcome " + userAnswer.toUpperCase()+ "!" + " ヘ( ^o^)ノ＼(^_^ )" ));

console.log("\n");

console.log(chalk.cyan("Quizoid is a fact quiz game that contains ten questions. Players score points by answering the questions correctly and adding their name to highest scores list."))

console.log("Play right now & secure high points!")

console.log("\n");

var askUser= readlineSync.question(chalk.green("Do you wish to play? yes/no "));


// data of high score
var highScores = [
  {
    name: "Darsh",
    score: 7,
  },

  {
    name: "Isha",
    score: 8,
  },
]

 //play function

function play(question,answer)
{
   var nextUser=readlineSync.question(chalk.green(question));

  if(nextUser.toLowerCase() == answer.toLowerCase()){
    console.log(chalk.redBright("Woaahhh!! You are right!"));
    score=score+1;
    console.log(chalk.yellow("Your Current Score Is: " + score+ ". Let's move to next question!!")); 
    console.log("-------------------");
    
  }
  else{
    console.log(chalk.red("Ahhh!! You are wrong!"));
    console.log(chalk.yellow("Your Current Score Is: " + score+ ". Let's move to next question!!")); 
    console.log("-------------------");
  }
}


function showScores() {
  highScores.map(score => console.log(score.name, " : ", score.score))
}

//array of objects
var questions = [{
question: `
1. How long does it take to hard boil an egg? 
	a: a minute
	b: 7 minutes
	c: an hour\n`,
		answer: "b"
	},
  {
    question: `
2. How many phases of the moon are there?
	a: Eight
	b: Nine
  c: One\n`,
		answer: "a"
	},
  {
    question: `
	3. How many bones do sharks have in their bodies?
	a: 206
	b: 18,000
	c: None\n`,
		answer: "c"
	},
  {
    question: `
	4. What year did the Titanic movie come out?
	a: 2011
	b: 1997
	c: 1990\n`,
		answer: "b"
	},
  {
    question: `
	5. How many total time zones are there in the world? 
	a: 24
	b: 5
	c: 19\n`,
		answer: "a"
	},
  {
    question: `
	6. How much weight can an ant lift?
	a: 50 times its weight
	b: 100 times its weight
	c: 10 times its weight\n`,
		answer: "a"
	},
  {
    question: `
	7.How many Earths could fit inside the sun?
	a: 1.1 Million
	b: 10000
	c: 1.3 Million\n`,
		answer: "c"
	},
  {
    question: `
	8. Where would you find the Sea of Tranquility?
	a: The Earth
	b: The Moon
	c: The Mars\n`,
		answer: "b"
	},
  {
    question: `
	9.What was the first soft drink in space?
	a: Coca Cola
	b: Frooti
	c: Sprite\n`,
		answer: "a"
	},
  {
    question: `
	10. Where does Santa Claus live?
	a: The North Pole
	b: The South Pole
	c: The East Pole\n`,
		answer: "a"
	}
];

if(askUser.toLowerCase() == "yes")
{
  console.log("Let's start!");
  console.log(chalk.yellowBright("Type appropriate option a, b or c:"));

for(var i=0; i<questions.length; i++)
{
var currentQuestion= questions[i];
play(currentQuestion.question, currentQuestion.answer);
}
console.log("\n");
console.log(chalk.yellowBright("Yeahhh!! You came to an end."));
console.log(chalk.whiteBright("Your Final Score is: " + (chalk.bgBlue(score)) + ". Thanks for playing!"));
console.log(chalk.yellowBright("I hope you enjoyed playing it."));
console.log("\n");
console.log(chalk.greenBright("Check out the high scores, if you should be there ping me and I'll update it."));
showScores();
}

else if(askUser.toLowerCase() == "no")
{
   console.log("That's okay, Play next time!");
}

console.log(chalk.cyanBright("Hope to see you again:)"));

