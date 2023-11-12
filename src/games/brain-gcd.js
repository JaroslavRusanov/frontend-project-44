import {
  getRandomNumber, getUserAnswer, playGame, playRound,
} from './index.js';

const getBiggestDivider = (number1, number2) => {
  console.log(`Question: ${number1} ${number2}`);

  const smallerNumberOf = Math.min(number1, number2);
  for (let i = smallerNumberOf; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const playGcdRound = () => {
  const numbers1 = (getRandomNumber() + 1);
  const numbers2 = (getRandomNumber() + 1);

  const correctAnswer = getBiggestDivider(numbers1, numbers2);
  const userAnswer = Number(getUserAnswer());

  return playRound(correctAnswer, userAnswer);
};

const playGcdGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  playGame(playGcdRound, condition);
};

export default playGcdGame;
