var timeEl = document.querySelector(".time");

var question = document.getElementById("question");
var answerButtons = Array.from(document.querySelectorAll(".answer"));
var answerTexts = document.querySelectorAll(".text");
var anResult = document.getElementById("answer-result");
var score = document.getElementById("score");

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
  var points = points;
}

function displayResult(isCorrect) {
    if (isCorrect) {
        points = points + 10;
        anResult.textContent = "Right! +10 Points! :)"
    } else {
        points = points - 10;
        anResult.textContent = "Wrong! -10 Points! :("
    }
    score.textContent = points
    enableButtons(false); // Prevent that user keeps clicking buttons
}

function enableButtons(on) {
    for (let button of answerButtons) {
        button.disabled = !on;
    }
}

// setTime();

function startQuiz() {
    displayQuestion();
    setTime();
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
}];

var currentQuestion = 0;
// displayQuestion();

document.addEventListener("click", function (e) { // One click handler for all four buttons
    let buttonNum = answerButtons.indexOf(e.target);
    if (buttonNum < 0) return;
    displayResult(buttonNum === questions[currentQuestion].correct);
    setTimeout(function () { // allow some time for the user to see the result
        currentQuestion++;
        if (currentQuestion >= questions.length) return changePage();
        displayQuestion();
    }, 1000); 
});

function displayQuestion() {
    question.textContent = questions[currentQuestion].question;
    questions[currentQuestion].answers.forEach(function (answer, i) {
        answerTexts[i].textContent = answer;
    });
    enableButtons(true);
    anResult.textContent = ""
}