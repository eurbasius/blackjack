let firstCard = 9;
let secondCard = 2;
let sum = firstCard + secondCard;
let message;
let hasBlackJack = false;
let isAlive = true;

function startGame() {
  if (sum <= 20) {
      message = "Please, take another card!"
  } else if (sum === 21) {
      message = "Congratulations, you won!"
      hasBlackJack = true;
  } else {
      message = "You lost!"
      isAlive = false;
  }
  console.log(message);
}