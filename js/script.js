var names = ['Nicholas', 'Connor', 'Edson', 'Jas'];

var ul = document.querySelector('#name-output');

// var section = document.createElement('section');

for (var index = 0; index < names.length; index++) {
  var li = document.createElement('li');

  // Set the text of the li to our name
  li.innerText = names[index];

  ul.append(li);
}
