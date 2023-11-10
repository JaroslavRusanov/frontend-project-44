import { getRandomNumber, getUserAnswer, playGame } from './index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomExpression = (num1, num2) => {
  const randomOperator = getRandomInt(3);

  if (randomOperator === 0) {
    console.log(`Question: ${num1} + ${num2}`);
    return num1 + num2;
  } else if (randomOperator === 1) {
    console.log(`Question: ${num1} - ${num2}`);
    return num1 - num2;
  } else if (randomOperator === 2) {
    console.log(`Question: ${num1} * ${num2}`);
    return num1 * num2;
  }
  return null;
};

const playRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const correctAnswer = getRandomExpression(number1, number2);
  const userAnswer = Number(getUserAnswer());

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const playCalcGame = () => {
  const condition = 'What is the result of the expression?';
  playGame(playRound, condition);
};

export default playCalcGame;
