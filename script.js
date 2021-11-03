'use strict';

// let x = document.querySelector(".message").textContent = '🍕 NUMERO CORRECTO';
// let score = document.querySelector(".score").textContent = 13;
// let number = document.querySelector(".number").textContent = 10;

// let guess = document.querySelector(".guess").value;

// console.log(x);
// console.log(score);
// console.log(number);
// console.log(guess);

let randomNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomNumber;
let puntos = 10;
let score = 20;
let highscore = 0;

const mensaje = mensaje => {
  document.querySelector('.message').textContent = mensaje;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (score == 0) {
    // alert('PERDISTE');
    mensaje('PERDISTE EL JUEGO');
  } else {
    if (guess === randomNumber) {
      score += puntos;
      mensaje('CORRECTO');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.score').textContent = score;
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else if (guess > randomNumber) {
      mensaje('ES MAS BAJO');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < randomNumber) {
      mensaje('ES MAS ALTO');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      mensaje('SEGUI INTENTANDO');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  mensaje('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
