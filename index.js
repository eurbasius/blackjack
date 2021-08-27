let firstCard = 9;
let secondCard = 2;
let sum = firstCard + secondCard;
let message;
let hasBlackJack = false;
let isAlive = true;
let resultEl = document.getElementById("resultEl");
let sumEl = document.getElementById("sumEl");

function startGame() {
  sumEl.textContent = `Sum: ${sum}`
  if (sum <= 20) {
      resultEl.textContent = "Please, take another card!"
  } else if (sum === 21) {
      resultEl.textContent = "Congratulations, you won!"
      hasBlackJack = true;
  } else {
      resultEl.textContent = "You lost!"
      isAlive = false;
  }
}