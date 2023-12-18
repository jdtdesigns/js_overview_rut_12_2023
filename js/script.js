var jdArray = ['JD', 44, '555 coding st'];
var jdObj = {
  name: 'JD',
  age: 44,
  address: '555 coding st',
  hobbies: ['pickleball', 'fishing', {
    location: 'ATL',
    type: 'fitness'
  }],
  printName: function (str, another) {
    console.log(this.age, str, another);
  }
};


jdObj.printName(true, 'something');


// function someFunc(str, num) {

// }

// someFunc('one', 44);

// undefined.someProp();
// function someFunc() {

// }

// console.log(jdObj.age);
// console.log(jdObj['address']);

// console.log(jdObj.hobbies[2].type);


// var str = 'some string';

// console.log(jdArray.length);
// console.log(str.length);
// // console.log(jdObj.something);

// jdArray.push('another value');

// var newArray = jdArray.concat(['one', 'two']);


// console.log(newArray);

// if (true) {

// }