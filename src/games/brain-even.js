import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const isEven = (number) => !(number % 2);

const playEvenRound = () => {
  const number = getRandomNumber(10, 1);
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  const question = `Question: ${number}`;

  return [question, correctAnswer];
};

const playEvenGame = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(condition, playEvenRound);
};

export default playEvenGame;
