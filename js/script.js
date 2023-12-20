var choicesDiv = document.querySelector('.choices');

function checkAnswer(eventObj) {
  eventObj.stopPropagation();
  console.log('clicked');
}

choicesDiv.addEventListener('click', checkAnswer);


var newBtn = document.createElement('button');

newBtn.innerText = 'Choice 2';

choicesDiv.append(newBtn);









// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', checkAnswer);
// }





// newBtn.addEventListener('click', checkAnswer);