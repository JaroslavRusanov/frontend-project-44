import {
  getTwoRandomNumbers, getUserAnswer, playGame, playRound,
} from './index.js';

const getBiggestDivider = (number1, number2) => {
  console.log(`Question: ${number1} ${number2}`);

  const smallerNumberOf = (number1 < number2) ? number1 : number2;
  for (let i = smallerNumberOf; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const playGcdRound = () => {
  const numbers = getTwoRandomNumbers();

  const correctAnswer = getBiggestDivider(numbers[0], numbers[1]);
  const userAnswer = Number(getUserAnswer());

  return playRound(correctAnswer, userAnswer);
};

const playGcdGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  playGame(playGcdRound, condition);
};

export default playGcdGame;