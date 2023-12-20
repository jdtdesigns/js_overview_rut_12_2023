// Select the choices div
var choicesDiv = document.querySelector('.choices');

// Function that checks if the button pressed contains the correct answer
function checkAnswer(eventObj) {
  eventObj.stopPropagation();

  // Grab the targeted element that was clicked
  var el = eventObj.target;

  // Determine conditionally if the el was a button
  if (el.tagName === 'BUTTON') {
    // Store the user's answer
    var userAnswer = el.innerText;

    // Determine if the user's answer(button text) is equal to the current question's correct answer
    if (userAnswer === questions[0].correctAnswer) {
      console.log('correct!');
      // If incorrect
    } else {
      console.log('Wrong!');
    }
  }
}

// Set a click listener on the parent div of all the choice buttons
choicesDiv.addEventListener('click', checkAnswer);

document.body.addEventListener('click', function () {
  console.log('clicked');
})
















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