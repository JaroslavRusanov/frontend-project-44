import { getRandomNumber, getUserAnswer, playGame } from './index.js';

const isEven = (number) => (number % 2 === 0);

const playRound = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);

  const userAnswer = getUserAnswer();

  if (userAnswer && userAnswer.toLowerCase().trim() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const playEvenGame = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(playRound, condition);
};

export default playEvenGame;
