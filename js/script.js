var modal = document.querySelector('.modal');
var submitBtn = document.querySelector('.modal button');


submitBtn.addEventListener('click', function () {
  console.log('Submit some info');
});

modal.addEventListener('click', function (eventObj) {
  eventObj.stopPropagation();
});

document.body.addEventListener('click', function () {
  modal.classList.add('hide');
})