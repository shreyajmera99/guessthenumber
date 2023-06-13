let a = Math.floor((Math.random() * 100) + 1);
// alert(a);
let inp;
let attempts = 0;

while (inp != a && attempts < 5) {
  inp = prompt('Guess the number');
  attempts++;

  if (inp == a) {
    document.write('Correct number');
  } else if (inp > a && inp < 100) {
    alert('The number is greater');
  } else if (inp < a && inp < 100) {
    alert('The number is smaller');
  } else {
    alert('Enter a number between 1 and 100');
  }
}

if (attempts >= 5) {
  document.write(`You've run out of attempts. The number was ${a}`);
}
