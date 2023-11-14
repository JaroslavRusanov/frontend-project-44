import playGame from '../index.js';
import getRandomNumber from '../random-number.js';

const playCalcRound = () => {
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  const randomIndex = getRandomNumber(3);

  const operators = ['+', '-', '*'];
  const operations = [num1 + num2, num1 - num2, num1 * num2];

  const question = `Question: ${num1} ${operators[randomIndex]} ${num2}`;
  const correctAnswer = operations[randomIndex];

  return [question, correctAnswer];
};

const playCalcGame = () => {
  const condition = 'What is the result of the expression?';
  playGame(condition, playCalcRound);
};

export default playCalcGame;
