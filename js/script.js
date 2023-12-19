var button = document.querySelector('#switch');


button.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  button.classList.toggle('green');


  if (button.innerText === 'On') {
    button.innerText = 'Off';
  } else {
    button.innerText = 'On';
  }

  // document.body.style.backgroundColor = '#555';

  // button.style.backgroundColor = '#7cc06a';
});


// var person = {
//   name: 'JD',
//   age: 44
// }

// // console.log(person.name);

// person.name = 'Bob';

// console.log(person);

// var something = function() {}; d

// function doSomething(num, str, callback) {
//   callback(10, 'again');
// }

// doSomething(10, 'some str', function (one, two) {
//   console.log(two);
// });


// another();

// function another() {
//   console.log('another');
// }




























// // var someFunc;

// someFunc();

// var data = {
//   someFunc: function () {
//     console.log('yay!')
//   }
// }

// data.someFunc();