import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getBiggestDivider = (number1, number2) => {
  const smallerNumberOf = Math.min(number1, number2);

  for (let i = smallerNumberOf; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const playGcdRound = () => {
  const number1 = (getRandomNumber(10) + 1);
  const number2 = (getRandomNumber(10) + 1);

  const correctAnswer = getBiggestDivider(number1, number2);
  const question = `Question: ${number1} ${number2}`;

  return [question, correctAnswer];
};

const playGcdGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  playGame(condition, playGcdRound);
};

export default playGcdGame;
