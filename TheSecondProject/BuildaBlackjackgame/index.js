let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;

let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");

function getRandomCard() {
  let n = Math.floor(Math.random() * 13) + 1;
  return n > 10 ? 10 : (n === 1 ? 11 : n);
}

function startGame() {
  isAlive = true;
  hasBlackjack = false;
  cards = [getRandomCard(), getRandomCard()];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
  }
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
