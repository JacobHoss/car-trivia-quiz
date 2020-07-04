var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var score = 0;

function wrong() {
    var anResult = document.getElementById("answer-result");
    anResult.textContent = "Wrong!"
}

function right() {
    var anResult = document.getElementById("answer-result");
    anResult.textContent = "Right!"
}

// function secondQuestion();

function firstQuestion() {
    var question = document.getElementById("question");
    var A = document.getElementById("A").addEventListener("click", wrong);
    var B = document.getElementById("B").addEventListener("click", wrong);
    var C = document.getElementById("C").addEventListener("click", wrong);
    var D = document.getElementById("D").addEventListener("click", right);
    question.textContent = "What is the best selling car of all time?";
    var textA = document.querySelector(".textA")
    var textB = document.querySelector(".textB")
    var textC = document.querySelector(".textC")
    var textD = document.querySelector(".textD")

    textA.textContent = "Toyota Camry";
    textB.textContent = "Ford F-150";
    textC.textContent = "Honda Civic";
    textD.textContent = "Toyota Corolla";

    // var questionList = document.getElementById("question-list").addEventListener("click", secondQuestion);
}

// only changed it to 3000 so that I don't have to go back to index.html every 60 seconds while working on this assignment.
var secondsLeft = 3000;

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