import {
  getRandomNumber, getUserAnswer, playGame, playRound,
} from './index.js';

const getBiggestDivider = (number1, number2) => {
  console.log(`Question: ${number1} ${number2}`);
  if (number1 === number2) {
    return number1;
  }

  const smallerNumberOf = (number1 < number2) ? number1 : number2;
  for (let i = smallerNumberOf; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const playGcdRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const correctAnswer = getBiggestDivider(number1, number2);
  const userAnswer = Number(getUserAnswer());

  return playRound(correctAnswer, userAnswer);
};

const playGcdGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  playGame(playGcdRound, condition);
};

export default playGcdGame;
