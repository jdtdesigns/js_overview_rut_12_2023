var h1 = document.querySelector('h1');
var time = 5;
var timer;

function endGame() {
  clearInterval(timer);

  var messageParagraph = document.querySelector('#message');

  messageParagraph.innerText = 'Game Over';
  // messageParagraph.style.display = 'initial';
  messageParagraph.classList.remove('hide');
}

function startGame() {
  timer = setInterval(function () {
    // Decrease time by one
    time--;

    // Set the text of our h1 to 'Time Left: <time>'
    h1.innerText = 'Time Left: ' + time;

    // If the time variable equals zero, stop the interval 
    // Pass our interval into the clearInterval function
    if (time <= 0) {
      endGame();
    }
  }, 1000);

  var questionWrap = document.querySelector('#question-wrap');

  questionWrap.innerHTML =
    '<div>' + '<h3>' + questions[0].questionText + '</h3>' + '</div>'
}

startGame();












// setTimeout(function () {
//   console.log('timed out');
// }, 2000);
// window.setTimeout();
