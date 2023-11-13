import playGame from '../index.js';
import getRandomNumber from '../random-number.js';

const playCalcRound = () => {
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  const randomIndex = getRandomNumber(3);
  const operators = ['+', '-', '*'];

  let question = '';
  let correctAnswer = 0;

  switch (operators[randomIndex]) {
    case '+':
      question = `Question: ${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case '-':
      question = `Question: ${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    case '*':
      question = `Question: ${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
    default:
      return null;
  }

  return [question, correctAnswer];
};

const playCalcGame = () => {
  const condition = 'What is the result of the expression?';
  playGame(condition, playCalcRound);
};

export default playCalcGame;
