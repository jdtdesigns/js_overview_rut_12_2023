

// localStorage.setItem('name', 'JD');
// localStorage.setItem('age', 44);


// var age = localStorage.getItem('age');
// var firstName = localStorage.getItem('name');

// console.log(firstName, +age);
// var fruits = ['orange', 'apple', 'grape'];

// localStorage.setItem('fruits', JSON.stringify(fruits));

// var person = {
//   name: 'JD',
//   age: 44
// };

// localStorage.setItem('person', person);

// var raw = localStorage.getItem('fruits');
// var fruits = JSON.parse(raw);
// // var person = localStorage.getItem('person');

// console.log(fruits);
// // console.log(person);

// Store an array of user scores
// var highScores = [
//   {
//     initials: 'JD',
//     score: 43
//   },
//   {
//     initials: 'Jane',
//     score: 55
//   }
// ];

// localStorage.setItem('highscores', JSON.stringify(highScores));

// var users = [
//   {
//     username: 'JD',
//     email: 'jd@test.com',
//     password: '12345'
//   },
//   {
//     username: 'Bob',
//     email: 'bob@test.com',
//     password: '12345'
//   }
// ]

var rawData = localStorage.getItem('highscores');
var highscores = JSON.parse(rawData);

// Click save
// Add a new object to highscores
highscores.push({
  initials: 'Frank',
  score: 20
});
// Replace the highscores array in localStorage with our newly updated array
localStorage.setItem('highscores', JSON.stringify(highscores));





