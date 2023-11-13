import playGame from '../index.js';
import getRandomNumber from '../random-number.js';

const isPrime = (number) => {
  if (number === 2 || number === 3) {
    return true;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeRound = () => {
  const numberFromTwo = getRandomNumber(10, 2);
  const correctAnswer = (isPrime(numberFromTwo)) ? 'yes' : 'no';

  const question = `Question: ${numberFromTwo}`;

  return [question, correctAnswer];
};

const playPrimeGame = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(condition, primeRound);
};

export default playPrimeGame;
