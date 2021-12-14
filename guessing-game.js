function guessingGame() {
  let num = Math.floor(Math.random() * 100);
  let guessCount = 1;
  let gameOver = false;

  return function guessResult(guess) {
    if (gameOver) return "The game is over! You already won!"
    if (guess > num) {
      guessCount++
      return `your guess of ${guess} is too high`
    }
    if (guess < num) {
      guessCount++
      return `your guess of ${guess} is too low`
    }
    if (guess === num) {
      gameOver = true;
      return `You win! You figured it out in ${guessCount} guesses`
    }
  }
}
// module.exports = { guessingGame };
