var readlineSync = require('readline-sync');


 var userName = readlineSync.question("May I have your name? \n");
 console.log('Hi ' + userName + ' ! Welcome to my Quiz !!');
 console.log('Lets start the quiz...'+"\n");

var score = 0;

var questions = 
[
  {
  question: "What is My nickname ? ",
  answer: "saru"
  }, 
  {
  question: "My Hometown is ? ",
  answer: "Faridabad"
  },
  {
  question: "My favourite dish? ",
  answer: "Pizza"
  }
];



function play(question, answer,i) {
  var userAnswer = readlineSync.question((i+1)+" "+question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++ ) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer, i)
    //calling function play reccursively till the loop ends
  }
}

game();
console.log("You Scored: ", score +"/3");







