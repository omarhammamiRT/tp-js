function play() {
  let nbrOfTrials;
  while (true) {
    const difficulty = prompt("Difficuly: [EASY, MEDIUM, HARD]");
    if (difficulty.toUpperCase() === "EASY") {
      nbrOfTrials = 5;
      break;
    } else if (difficulty.toUpperCase() === "MEDIUM") {
      nbrOfTrials = 3;
      break;
    } else if (difficulty.toUpperCase() === "HARD") {
      nbrOfTrials = 1;
      break;
    }
  }
  const randomNumber = Math.floor(Math.random() * 11);

  while (nbrOfTrials--) {
    const guess = prompt(
      `Guess a number between 0 and 10 (${nbrOfTrials + 1} trials left)`
    );
    if (Number(guess) === randomNumber) {
      alert(`You win! The number is ${randomNumber}`);
      break;
    } else if (nbrOfTrials === 0) {
      alert(`You lose! The number was ${randomNumber}`);
      break;
    }
  }
}
