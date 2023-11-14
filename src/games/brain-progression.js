import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const countsOfNumber = 10;

const getProgression = () => {
  const progressions = [getRandomNumber(10)];
  const progressionStep = getRandomNumber(10, 1);

  for (let i = 0; i < countsOfNumber; i += 1) {
    const result = progressions[i];
    progressions.push(result + progressionStep);
  }
  return progressions;
};

const playProgressionRound = () => {
  const progressions = getProgression();
  const randomAsk = getRandomNumber(10);
  const correctAnswer = progressions[randomAsk - 1];
  const newProgressions = [];

  for (let i = 0; i < countsOfNumber; i += 1) {
    if (progressions[i] === correctAnswer) {
      newProgressions.push('..');
    } else {
      newProgressions.push(progressions[i]);
    }
  }
  const question = (`Question: ${newProgressions.join(' ')}`);

  return [question, correctAnswer];
};

const playProgressionGame = () => {
  const condition = 'What number is missing in the progression?';
  playGame(condition, playProgressionRound);
};

export default playProgressionGame;
