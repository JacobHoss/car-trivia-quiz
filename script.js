var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var textA = document.querySelector(".textA");
var textB = document.querySelector(".textB");
var textC = document.querySelector(".textC");
var textD = document.querySelector(".textD");
var finalScore = document.querySelector("#points");

finalScore = "Score: " + points;

var points = 0;

function wrong() {
    var anResult = document.getElementById("answer-result");
    anResult.textContent = "Wrong! -10 Points! :("
    points -= 10;
    localStorage.setItem("points", points);
}

function right() {
    var anResult = document.getElementById("answer-result");
    anResult.textContent = "Right! +10 Points! :)"
    points += 10;
    localStorage.setItem("points", points);
}

function quizQuestion() {

  setTime();
  firstQuestion();

function firstQuestion() {
    var question = document.getElementById("question");
    var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      secondQuestion()
    });
    var B = document.getElementById("B").addEventListener("click", function() {
      wrong()
      secondQuestion()
    });
    var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      secondQuestion()
    });
    var D = document.getElementById("D").addEventListener("click", function() {
      right()
      secondQuestion()
    });

    question.textContent = "What is the best selling car of all time?";

    textA.textContent = "Toyota Camry";
    textB.textContent = "Ford F-150";
    textC.textContent = "Honda Civic";
    textD.textContent = "Toyota Corolla";

}

function secondQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      thirdQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      right()
      thirdQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      thirdQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      wrong()
      thirdQuestion()
    });
  question.textContent = "First introduced in 1974, which iconic hatchback still remains popular today?";

  textA.textContent = "Ford Mustang";
  textB.textContent = "Volkswagen Golf";
  textC.textContent = "Toyota Celica";
  textD.textContent = "Fiat 500";
}

function thirdQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      fourthQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      wrong()
      fourthQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      right()
      fourthQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      wrong()
      fourthQuestion()
    });
  question.textContent = "What is the world's fastest production car as of July 2020?";

  textA.textContent = "Koenigsegg Agera RS";
  textB.textContent = "Hennessy Venom GT";
  textC.textContent = "Buggatti Chiron Super Sport";
  textD.textContent = "Lamborghini Aventador";
}

function fourthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      right()
      fifthQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      wrong()
      fifthQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      fifthQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      wrong()
      fifthQuestion()
    });
  question.textContent = "What 70s car is known for its suicide doors and convertible top?";

  textA.textContent = "Lincoln Continental";
  textB.textContent = "Buick Rivera";
  textC.textContent = "Ford Thunderbird";
  textD.textContent = "Oldsmobile Toronado";
}

function fifthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      sixthQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      wrong()
      sixthQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      sixthQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      right()
      sixthQuestion()
    });
  question.textContent = "What country was known for putting side mirrors above the front fenders?";

  textA.textContent = "Germany";
  textB.textContent = "United States";
  textC.textContent = "United Kingdom";
  textD.textContent = "Japan";
}

function sixthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      right()
      seventhQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      wrong()
      seventhQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      seventhQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      wrong()
      seventhQuestion()
    });
  question.textContent = "Which classic Mercedes model was known for its iconic wing doors?";

  textA.textContent = "Mercedes-Benz 300SL";
  textB.textContent = "Mercedes-Benz S600";
  textC.textContent = "Mercedes-Benz W460 G-Class";
  textD.textContent = "Mercedes-Benz W180";
}

function seventhQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      eighthQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      right()
      eighthQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      eighthQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      wrong()
      eighthQuestion()
    });
  question.textContent = "Which of these classic British sports cars boasts a V12 engine?";

  textA.textContent = "1956 Austin-Healey 3000";
  textB.textContent = "1963 Jaguar E-Type";
  textC.textContent = "1962 MGA Roadster";
  textD.textContent = "1963 Aston Martin DB5";
}

function eighthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      ninthQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      wrong()
      ninthQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      right()
      ninthQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      wrong()
      ninthQuestion()
    });
  question.textContent = "Which American model was produced from 1971 to 1977 and sold 2 million units?";

  textA.textContent = "Chevrolet Impala";
  textB.textContent = "Pontiac Firebird";
  textC.textContent = "Chevrolet Vega";
  textD.textContent = "Ford Mustang";
}

function ninthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      tenthQuestion()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      right()
      tenthQuestion()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      tenthQuestion()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      wrong()
      tenthQuestion()
    });
  question.textContent = "Still a popular American car today, this model was first introduced in 1976.";

  textA.textContent = "Chevrolet Spark";
  textB.textContent = "Ford Fiesta";
  textC.textContent = "Buick Verano";
  textD.textContent = "GMC Sierra";
}


function tenthQuestion() {
  var question = document.getElementById("question");
  var A = document.getElementById("A").addEventListener("click", function() {
      wrong()
      changePage()
    });
  var B = document.getElementById("B").addEventListener("click", function() {
      wrong()
      changePage()
    });
  var C = document.getElementById("C").addEventListener("click", function() {
      wrong()
      changePage()
    });
  var D = document.getElementById("D").addEventListener("click", function() {
      right()
      changePage()
    });
  question.textContent = "Two American rivals both produced utility coupes in the 1970s. One was the Chevrolet El Camino, what was the other?";

  textA.textContent = "Ford Mustang";
  textB.textContent = "Ford Thunderbird";
  textC.textContent = "Pontiac Firebird";
  textD.textContent = "Ford Ranchero";
}
}

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

quizQuestion();