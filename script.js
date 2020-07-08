var timeEl = document.querySelector(".time");

var question = document.getElementById("question");
var answerButtons = Array.from(document.querySelectorAll(".answer"));
var answerTexts = document.querySelectorAll(".text");
var anResult = document.getElementById("answer-result");
var score = document.getElementById("score");
var music = new Audio("./assets/ragtime.mp3");
var beep = new Audio("./assets/carlock.mp3");

var points = 0;

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      changePage();
    }
  }, 1000);
}
 
function changePage() {
  window.location.href = "./ending.html";
}

function displayResult(isCorrect) {
    if (isCorrect) {
        points = points + 10;
        anResult.textContent = "Right!"
    } else {
        anResult.textContent = "Wrong!"
    }
    score.textContent = points
    enableButtons(false); // Prevent that user keeps clicking buttons
}

function enableButtons(on) {
    for (let button of answerButtons) {
        button.disabled = !on;
    }
}

function startQuiz() {
    displayQuestion();
    setTime();
    listenFunction();
    music.play();
}

var questions = [{
    question: "What is the best selling car of all time?",
    answers: ["Toyota Camry", "Ford F-150", "Honda Civic", "Toyota Corolla"],
    correct: 3
}, {
    question: "First introduced in 1974, which iconic hatchback still remains popular today?",
    answers: ["Ford Mustang", "Volkswagen Golf", "Toyota Celica", "Fiat 500"],
    correct: 1
}, {
    question: "What is the world's fastest production car as of July 2020?",
    answers: ["Koenigsegg Agera RS", "Hennessy Venom GT", "Buggatti Chiron Super Sport", "Lamborghini Aventador"],
    correct: 2
}, {
    question: "What 70s car is known for its suicide doors and convertible top?",
    answers: ["Lincoln Continental", "Buick Rivera", "Ford Thunderbird", "Oldsmobile Toronado"],
    correct: 0
}, {
    question: "What country was known for putting side mirrors above the front fenders?",
    answers: ["Germany", "United States", "United Kingdom", "Japan"],
    correct: 3
}, {
    question: "Which classic Mercedes model was known for its iconic wing doors?",
    answers: ["Mercedes-Benz 300 SL", "Mercedes-Benz S600", "Mercedes-Benz W460 G-Class", "Mercedes-Benz W180"],
    correct: 0
}, {
    question: "Which of these classic British sports cars boasts a V12 engine?",
    answers: ["1956 Austin-Healey 3000", "1963 Jaguar E-Type", "1962 MGA Roadster", "1963 Aston Martin DB5"],
    correct: 1
}, {
    question: "Which American model was produced from 1971 to 1977 and sold 2 million units?",
    answers: ["Chevrolet Impala", "Pontiac Firebird", "Chevrolet Vega", "Ford Mustang"],
    correct: 2
}, {
    question: "Still a popular American car today, this model was first introduced in 1976.",
    answers: ["Chevrolet Spark", "Ford Fiesta", "Buick Verano", "GMC Sierra"],
    correct: 1
}, {
    question: "Two American rivals both produced utility coupes in the 1970s. One was the Chevrolet El Camino, what was the other?",
    answers: ["Ford Mustang", "Ford Thunderbird", "Pontiac Firebird", "Ford Ranchero"],
    correct: 3
}];

var currentQuestion = 0;

function listenFunction() {

document.addEventListener("click", function (e) { // One click handler for all four buttons
    let buttonNum = answerButtons.indexOf(e.target);
    beep.play();
    if (buttonNum < 0) return;
    displayResult(buttonNum === questions[currentQuestion].correct);
    setTimeout(function () { // allow some time for the user to see the result
        currentQuestion++;
        if (currentQuestion >= questions.length) { 
        // call function to store points in local storage, so we can display points on ending.html   
        changePage();
        }
        displayQuestion();
    }, 1000);

});
}

function displayQuestion() {
    question.textContent = questions[currentQuestion].question;
    questions[currentQuestion].answers.forEach(function (answer, i) {
        answerTexts[i].textContent = answer;
    });
    enableButtons(true);
    anResult.textContent = ""
}