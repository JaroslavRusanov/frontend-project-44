import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const playEvenRound = () => {
  const number = getRandomNumber(10, 1);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

  const question = `Question: ${number}`;

  return [question, correctAnswer];
};

const playEvenGame = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(condition, playEvenRound);
};

export default playEvenGame;
