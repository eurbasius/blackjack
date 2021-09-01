let firstCard = 9;
let secondCard = 2;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let message;
let hasBlackJack = false;
let isAlive = true;
let resultEl = document.getElementById("resultEl");
let sumEl = document.getElementById("sumEl");
let cardsEl = document.getElementById("cardsEl");

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;
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
    let card = 2;
    sum += card;
    cards.push(card);
    renderGame();
}