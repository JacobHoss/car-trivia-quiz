var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var textA = document.querySelector(".textA")
var textB = document.querySelector(".textB")
var textC = document.querySelector(".textC")
var textD = document.querySelector(".textD")

var score = 0;

function wrong() {
    var anResult = document.getElementById("answer-result");
    anResult.textContent = "Wrong!"
    score - 10;
}

function right() {
    var anResult = document.getElementById("answer-result");
    anResult.textContent = "Right!"
    score + 10;
}



function firstQuestion() {
    var question = document.getElementById("question");
    var A = document.getElementById("A").addEventListener("click", wrong);
    var B = document.getElementById("B").addEventListener("click", wrong);
    var C = document.getElementById("C").addEventListener("click", wrong);
    var D = document.getElementById("D").addEventListener("click", right);
    question.textContent = "What is the best selling car of all time?";

    textA.textContent = "Toyota Camry";
    textB.textContent = "Ford F-150";
    textC.textContent = "Honda Civic";
    textD.textContent = "Toyota Corolla";

    var questionList = document.getElementById("question-list").addEventListener("click", secondQuestion);
}

function secondQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", wrong);
  var B = document.getElementById("B").addEventListener("click", right);
  var C = document.getElementById("C").addEventListener("click", wrong);
  var D = document.getElementById("D").addEventListener("click", wrong);
  question.textContent = "First introduced in 1974, which iconic hatchback still remains popular today?";

  textA.textContent = "Ford Mustang";
  textB.textContent = "Volkswagen Golf";
  textC.textContent = "Toyota Celica";
  textD.textContent = "Fiat 500";

  var questionList = document.getElementById("question-list").addEventListener("click", thirdQuestion);
}

function thirdQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", wrong);
  var B = document.getElementById("B").addEventListener("click", wrong);
  var C = document.getElementById("C").addEventListener("click", right);
  var D = document.getElementById("D").addEventListener("click", wrong);
  question.textContent = "What is the world's fastest production car as of July 2020?";

  textA.textContent = "Koenigsegg Agera RS";
  textB.textContent = "Hennessy Venom GT";
  textC.textContent = "Buggatti Chiron Super Sport";
  textD.textContent = "Lamborghini Aventador";

  var questionList = document.getElementById("question-list").addEventListener("click", fourthQuestion);
}

function fourthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", right);
  var B = document.getElementById("B").addEventListener("click", wrong);
  var C = document.getElementById("C").addEventListener("click", wrong);
  var D = document.getElementById("D").addEventListener("click", wrong);
  question.textContent = "What 70s car is known for its suicide doors and convertible top?";

  textA.textContent = "Lincoln Continental";
  textB.textContent = "Buick Rivera";
  textC.textContent = "Ford Thunderbird";
  textD.textContent = "Oldsmobile Toronado";

  var questionList = document.getElementById("question-list").addEventListener("click", fifthQuestion);
}

function fifthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", wrong);
  var B = document.getElementById("B").addEventListener("click", wrong);
  var C = document.getElementById("C").addEventListener("click", wrong);
  var D = document.getElementById("D").addEventListener("click", right);
  question.textContent = "What country was known for putting side mirrors above the front fenders?";

  textA.textContent = "Germany";
  textB.textContent = "United States";
  textC.textContent = "United Kingdom";
  textD.textContent = "Japan";

  var questionList = document.getElementById("question-list").addEventListener("click", sixthQuestion);
}

function sixthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", right);
  var B = document.getElementById("B").addEventListener("click", wrong);
  var C = document.getElementById("C").addEventListener("click", wrong);
  var D = document.getElementById("D").addEventListener("click", wrong);
  question.textContent = "Which classic Mercedes model was known for its iconic wing doors?";

  textA.textContent = "Mercedes-Benz 300SL";
  textB.textContent = "Mercedes-Benz S600";
  textC.textContent = "Mercedes-Benz W460 G-Class";
  textD.textContent = "Mercedes-Benz W180";

  var questionList = document.getElementById("question-list").addEventListener("click", seventhQuestion);
}

function seventhQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", wrong);
  var B = document.getElementById("B").addEventListener("click", right);
  var C = document.getElementById("C").addEventListener("click", wrong);
  var D = document.getElementById("D").addEventListener("click", wrong);
  question.textContent = "Which of these classic British sports cars boasts a V12 engine?";

  textA.textContent = "1956 Austin-Healey 3000";
  textB.textContent = "1963 Jaguar E-Type";
  textC.textContent = "1962 MGA Roadster";
  textD.textContent = "1963 Aston Martin DB5";

  var questionList = document.getElementById("question-list").addEventListener("click", eighthQuestion);
}

function eighthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", wrong);
  var B = document.getElementById("B").addEventListener("click", wrong);
  var C = document.getElementById("C").addEventListener("click", right);
  var D = document.getElementById("D").addEventListener("click", wrong);
  question.textContent = "Which American model was produced from 1971 to 1977 and sold 2 million units?";

  textA.textContent = "Chevrolet Impala";
  textB.textContent = "Pontiac Firebird";
  textC.textContent = "Chevrolet Vega";
  textD.textContent = "Ford Mustang";

  var questionList = document.getElementById("question-list").addEventListener("click", ninthQuestion);
}

function ninthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", wrong);
  var B = document.getElementById("B").addEventListener("click", right);
  var C = document.getElementById("C").addEventListener("click", wrong);
  var D = document.getElementById("D").addEventListener("click", wrong);
  question.textContent = "Still a popular American car today, this model was first introduced in 1976.";

  textA.textContent = "Chevrolet Spark";
  textB.textContent = "Ford Fiesta";
  textC.textContent = "Buick Verano";
  textD.textContent = "GMC Sierra";

  var questionList = document.getElementById("question-list").addEventListener("click", tenthQuestion);
}


function tenthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", wrong);
  var B = document.getElementById("B").addEventListener("click", wrong);
  var C = document.getElementById("C").addEventListener("click", wrong);
  var D = document.getElementById("D").addEventListener("click", right);
  question.textContent = "Two American rivals both produced utility coupes in the 1970s. One was the Chevrolet El Camino, what was the other?";

  textA.textContent = "Ford Mustang";
  textB.textContent = "Ford Thunderbird";
  textC.textContent = "Pontiac Firebird";
  textD.textContent = "Ford Ranchero";

  var questionList = document.getElementById("question-list").addEventListener("click", changePage);

  console.log(score)
}



// only changed it to 3000 so that I don't have to go back to index.html every 60 seconds while working on this assignment.
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      changePage();
    }

  }, 1000);
}

function changePage() {
  window.location.href = "./ending.html";
}

setTime();

firstQuestion();