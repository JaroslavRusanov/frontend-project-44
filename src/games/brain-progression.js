import {
  getRandomNumber, getUserAnswer, playGame, playRound,
} from './index.js';

const countsOfNumber = 10;

const getProgression = () => {
  const progressions = [getRandomNumber()];
  const progressionStep = (getRandomNumber() + 1);

  for (let i = 0; i < countsOfNumber; i += 1) {
    const result = progressions[i];
    progressions.push(result + progressionStep);
  }
  return progressions;
};

const getTaskAndSolution = () => {
  const progressions = getProgression();
  const randomAsk = getRandomNumber();
  const correctAnswer = progressions[randomAsk - 1];
  const newProgressions = [];

  for (let i = 0; i < countsOfNumber; i += 1) {
    if (progressions[i] === correctAnswer) {
      newProgressions.push('..');
    } else {
      newProgressions.push(progressions[i]);
    }
  }
  console.log(`Question: ${newProgressions.join(' ')}`);
  return correctAnswer;
};

const playProgressionRound = () => {
  const correctAnswer = getTaskAndSolution();
  const userAnswer = Number(getUserAnswer());

  return playRound(correctAnswer, userAnswer);
};

const playProgressionGame = () => {
  const condition = 'What number is missing in the progression?';

  playGame(playProgressionRound, condition);
};

export default playProgressionGame;
