import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const calculate = (num1, num2, operator) => {
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
  return result;
};

const playCalcRound = () => {
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  const randomIndex = getRandomNumber(3);

  const operators = ['+', '-', '*'];
  const operator = operators[randomIndex];

  const question = `Question: ${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);

  return [question, correctAnswer];
};

const playCalcGame = () => {
  const condition = 'What is the result of the expression?';
  playGame(condition, playCalcRound);
};

export default playCalcGame;
