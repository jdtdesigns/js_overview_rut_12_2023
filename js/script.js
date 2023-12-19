var btn = document.querySelector('button');

btn.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (btn.innerText === 'Dark Mode') {
    btn.innerText = 'Light Mode';
  } else {
    btn.innerText = 'Dark Mode';
  }
})