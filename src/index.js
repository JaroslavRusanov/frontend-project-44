import readlineSync from 'readline-sync';

const playGame = (condition, roundResults) => {
  const countsRound = 3;

  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');

  if (userName.length === 0) {
    userName = 'Anonymous';
  }

  console.log(`Hello, ${userName}!`);

  console.log(condition);

  for (let i = 0; i < countsRound; i += 1) {
    const [question, correctAnswer] = roundResults();

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
