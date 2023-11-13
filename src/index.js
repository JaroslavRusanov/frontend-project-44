import readlineSync from 'readline-sync';

const playGame = (condition, roundResults = 0) => {
  const countsRound = 3;

  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');

  if (userName.length === 0) {
    console.log('Hello, Anonymous!');
    userName = 'Anonymous';
  }

  userName = userName.trim();

  if (userName[0] !== userName[0].toUpperCase()) {
    userName = `${userName[0].toUpperCase()}${userName.slice(1)}`;
  }
  console.log(`Hello, ${userName}!`);

  if (condition === 'stop') {
    return;
  }

  console.log(condition);

  for (let i = 0; i < countsRound; i += 1) {
    const resultRound = roundResults();
    const question = resultRound[0];
    const correctAnswer = resultRound[1].toString();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
