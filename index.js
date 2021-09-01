let firstCard = generateRandomCard();
let secondCard = generateRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let message;
let hasBlackJack = false;
let isAlive = true;
let resultEl = document.getElementById("resultEl");
let sumEl = document.getElementById("sumEl");
let cardsEl = document.getElementById("cardsEl");

function generateRandomCard() {
  return 5;
}

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  // Render out all of the cards!
  if (sum <= 20) {
    resultEl.textContent = "Please, take another card!";
  } else if (sum === 21) {
    resultEl.textContent = "Congratulations, you won!";
    hasBlackJack = true;
  } else {
    resultEl.textContent = "You lost!";
    isAlive = false;
  }
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = generateRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
