// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId = 75;
var currentQuestion;
var userScore = 0;
var timer;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreenEl = document.getElementById("start-screen");
var questionTextEl = document.getElementById("question-title");
var endScreenEl = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  startScreenEl.className = "hide";
  // un-hide questions section
  questionsEl.className = "start";
  // start timer
  function myTimer() {
  // show starting time
  timerEl.innerHTML = `${timerId}`;
  timerId--;
  timerId = timerId < 0 ? 0 : timerId;
  }
  setInterval(myTimer, 1000);
  getQuestion();
};



function getQuestion() {
  // get current question object from array
  currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  questionTextEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
  // create new button for each choice
  var choice = document.createElement("button");
  // choice.className = currentQuestion
  choice.textContent = currentQuestion.choices[i];

  // attach click event listener to each choice
  choice.onlick = questionClick;

  // display on the page
  choicesEl.appendChild(choice);
  }
}

function questionClick() {
  // check if user guessed wrong
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  // else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion
}

function quizEnd() {
  // stop timer
  time = 0;
  clearInterval(timer);
  finalScoreEl = 4;
  // show final score
  finalScoreEl.textContent = userScore;
  console.log(finalScoreEl);
  // hide questions section
  questionsEl.className = "hide";

    // show end screen
  endScreenEl.className = "start";
}

function clockTick() {
  // update time
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
