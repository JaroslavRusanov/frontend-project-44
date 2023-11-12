import {
  playRound, playGame, getRandomNumber, getUserAnswer,
} from './index.js';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeRound = () => {
  const numberFromTwo = getRandomNumber() + 2;
  const correctAnswer = (isPrime(numberFromTwo)) ? 'yes' : 'no';

  console.log(`Question: ${numberFromTwo}`);

  const userAnswer = getUserAnswer();

  return playRound(correctAnswer, userAnswer);
};

const playPrimeGame = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(playPrimeRound, condition);
};

export default playPrimeGame;
