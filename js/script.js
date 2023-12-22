

// localStorage.setItem('age', 44);

// var name = localStorage.getItem('firstName');

// console.log(name);

// var fruits = ['orange', 'apple', 'grape'];

// localStorage.setItem('fruits', JSON.stringify(fruits));

var raw = localStorage.getItem('fruits');
var fruits = JSON.parse(raw);

console.log(fruits);

// var person = {
//   name: 'JD',
//   age: 44
// };

// localStorage.setItem('personData', person);

// var data = localStorage.getItem('personData');

// console.log(data);
