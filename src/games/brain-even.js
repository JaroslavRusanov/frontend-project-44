import {
  getRandomNumber, getUserAnswer, playGame, playRound,
} from './index.js';

const isEven = (number) => (number % 2 === 0);

const playEvenRound = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);

  const userAnswer = getUserAnswer();

  return playRound(correctAnswer, userAnswer);
};

const playEvenGame = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(playEvenRound, condition);
};

export default playEvenGame;
