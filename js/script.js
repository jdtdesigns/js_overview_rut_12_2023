// Select the choices div
var choicesDiv = document.querySelector('.choices');
var startBtn = document.querySelector('#start');
var startWrap = document.querySelector('.start-wrap');
var questionWrap = document.querySelector('.question-wrap');
var timeOutput = document.querySelector('#time-output');

// Store a variable that tracks which question the user is currently on
var questionIndex = 0;
// Store a variable that tracks the seconds left
var time = 60;
// Store a variable that holds the interval
var timer;


// Function that checks if the button pressed contains the correct answer
// Utilizing event delegation to capture the button click
function checkAnswer(eventObj) {
  eventObj.stopPropagation();

  var currentQuestionObj = questions[questionIndex];

  // Grab the targeted element that was clicked
  var el = eventObj.target;

  // Determine conditionally if the el was a button
  if (el.tagName === 'BUTTON') {
    // Store the user's answer
    var userAnswer = el.innerText;

    // Determine if the user's answer(button text) is equal to the current question's correct answer
    if (userAnswer === currentQuestionObj.correctAnswer) {
      console.log('correct!');
      // If incorrect
    } else {
      console.log('Wrong!');
      time -= 10;
    }
  }
}

// Create a function that gets the current question and outputs the question text to our h2 and outputs a button for each choice string in the choices array for the current question object
function displayQuestion() {
  // Store a variable that holds the current question object
  var currentQuestionObj = questions[questionIndex];

  // Output the currentQuestion questionText to the h2 within our question-wrap html
  // Select the h2 from the DOM
  var textEl = document.querySelector('.question-text');
  // Set the innerText of our textEl to the currentQuestion questionText property
  textEl.innerText = currentQuestionObj.questionText;
  // Loop over each choice string in the currentQuestion choices array, and for each string output a button into the choices div with the innerText of the choice string
  for (var i = 0; i < currentQuestionObj.choices.length; i++) {
    //  Create a button element
    var choiceBtn = document.createElement('button');
    // Set the text of the button to the current choice string in the loop
    choiceBtn.innerText = currentQuestionObj.choices[i];
    // Output(inject)/append the button to the choices div within our question wrap
    // Append the button to the div
    choicesDiv.append(choiceBtn);
  }
}

// Start the timer countdown and decrease the time variable by one every second until time runs out
function startCountdown() {
  // Set the inner text of the timeOuput to say 60 seconds
  timeOutput.innerText = 'Time: ' + time;
  // Start an interval that repeats every second(1000ms)
  // Store the interval to a variable so we can clear or stop it later on
  timer = setInterval(function () {
    // Decrease our time variable by one
    time--;
    // Set the inner text of the timeOutput element to our time variable value
    timeOutput.innerText = 'Time: ' + time;
  }, 1000);
}

// Show the first quiz question, hide the start wrap and start the timer
function startQuiz() {
  // Hide the start wrap
  startWrap.classList.add('hide');
  // Show the question wrap
  questionWrap.classList.remove('hide');
  // Display the first question
  displayQuestion();
  // Start the count down
  startCountdown();
}

// Set a click listener on the parent div of all the choice buttons
choicesDiv.addEventListener('click', checkAnswer);
// Add a click listener to the start button
startBtn.addEventListener('click', startQuiz);
















// function addEventListener(eventType, callback) {
//   if (eventType) {
//     callback({
//       target: {
//         innerText: 'Choice 1'
//       }
//     })
//   }
// }

// addEventListener('click', function (eventObj) {
//   console.log(eventObj.target);
// });















// for (var i = 0; i < btns.length; i++) {
//   // Add a click listener to the button
//   // btns[i].addEventListener('click', checkAnswer);
// }