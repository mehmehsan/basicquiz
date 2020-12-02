const chalk = require('chalk');

var readlineSync = require("readline-sync");

var userName = readlineSync.question(chalk.yellowBright("Enter your name ? "));
var score = 0;
console.log();

console.log(chalk.greenBright("Welcome  "+ userName.toUpperCase() + "! Let's start our quiz! ") );

 console.log();
     console.log(chalk.greenBright("--------------------------------"));
  console.log();
console.log(chalk.greenBright("Rules for assesment : "));
console.log();
console.log(chalk.greenBright("a) Answer it as a,b,c,d "));
console.log(chalk.greenBright("b) You must not be intelligent Enough "));
console.log(chalk.greenBright("c) Keep awaited for next question to come"));
console.log();
   console.log(chalk.greenBright("--------------------------------"));
console.log();

var opTn=readlineSync.question(chalk.green("Do you want to continue(y/n) : "));

if(opTn.toLowerCase()==="y"){
console.clear();
}

else{
console.log(chalk.green("Thanks for the vote ! Bye ! Bye !"));
console.log();
process.exit();

}


function play(question,answer){
  
  var userAns = readlineSync.question(chalk.yellowBright(question));
    console.log();
    console.log(chalk.green("-----------"));

  if (userAns.toLowerCase()===answer.toLowerCase()){
      console.log(chalk.green("Right !"));
      score++;
  }  
  else{
    console.log(chalk.green("Wrong !"));
    console.log(chalk.green("Ans is : ", answer));
  }

  console.log(chalk.green("Score : ", score));
  console.log(chalk.green("-----------"));

}

console.log();


var questions = [{ question : chalk.green("Q1) Where does Santa Claus Live ? \n\n\n")+chalk.green("(a) North Pole\n")+chalk.green("(b) South Pole \n") +chalk.green("(c) North America \n")+chalk.green("(d) Antartica \n\n\n")+chalk.green("Enter your answer : ") , answer: "a" }, 
{ question : chalk.green("Q2) Where does kiwi fruit come from ? \n\n\n")+chalk.green("(a) Brazil\n")+chalk.green("(b) Australia \n") +chalk.green("(c) North America \n")+chalk.green("(d) Kenya \n\n\n")+chalk.green("Enter your answer : ") , answer: "b" },
{ question : chalk.green("Q3) Which kidney is lower ? \n\n\n")+chalk.green("(a) Right side \n")+chalk.green("(b) Left side \n\n\n") +chalk.green("Enter your answer : ") , answer: "a" },
{ question : chalk.green("Q4) Banana is a ? \n\n\n")+chalk.green("(a) Grass\n")+chalk.green("(b) Fruit \n") +chalk.green("(c) Vegitable \n")+chalk.green("(d) Berry \n\n\n")+chalk.green("Enter your answer : ") , answer: "d" },{ question : chalk.green("Q5) First text message wrote in  ? \n\n\n")+chalk.green("(a) 1992\n")+chalk.green("(b) 1997 \n") +chalk.green("(c) 1993 \n")+chalk.green("(d) 1998 \n\n\n")+chalk.green("Enter your answer : ") , answer: "a" }];

for ( var i=0; i < questions.length ; i++){
  var currentQues = questions[i];

  play(currentQues.question,currentQues.answer);
  console.log();
  if(i==0){
    console.log(chalk.cyanBright("Say Jingle bells ! "));
  }
  else if(i==1){
    console.log(chalk.cyanBright("Kiwi ! Kiwi !"));
  }
  else if(i==2){
    console.log(chalk.cyanBright("You guessed it! Right !"));
  }
  else if(i==3){
    console.log(chalk.cyanBright("Hey ! Hey now you know that ! "));
  }
  else {
    console.log(chalk.cyanBright("It wrote Merry Chirstmas"));
  }
  console.log();
  console.log(chalk.green("**** Wait for few seconds! ****"));

  for(var j=0;j<1000000;j++){

      }
  console.clear();
  }

if(i==questions.length){
  console.log();
  console.log(chalk.cyanBright("Yeah ! Your score is : ", score," / 5"));
  console.log();
  console.log(chalk.cyanBright("Thanks for playing buddy !"));
  console.log();
  console.log();
  console.log(chalk.green("--------------------------------"));
  console.log(chalk.green("--------------------------------"));
  console.log(chalk.green("List of Highest scored "));
  console.log(chalk.green("(1) Name : Sandeep"));
  console.log(chalk.green("    Score : 5/5"));
  console.log();
  console.log();
 
  console.log(chalk.green("(2) Name : Nitesh"));
  console.log(chalk.green("    Score : 4/5"));
  console.log();
  console.log(chalk.green("(3) Name : Pepe"));
  console.log(chalk.green("    Score : 4/5"));
  console.log(chalk.green("--------------------------------"));
  console.log(chalk.green("--------------------------------"));
   console.log();
  console.log(chalk.cyanBright("Kindly send me the screenshot of your score to update list if highest !"));
  
}