import readlineSync from 'readline-sync';

const countsRound = 3;

const getRandomNumber = () => (Math.round(Math.random() * 10));

const getTwoRandomNumbers = () => {
  const twoNumbers = [];

  while (twoNumbers.length < 3) {
    twoNumbers.push(getRandomNumber());
  }

  return twoNumbers;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const greetingsWithName = () => {
  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');

  if (userName.length === 0) {
    console.log('Hello, Anonymous!');
    return 'Anonymous';
  }

  userName = userName.trim();

  if (userName[0] !== userName[0].toUpperCase()) {
    userName = `${userName[0].toUpperCase()}${userName.slice(1)}`;
  }
  console.log(`Hello, ${userName}!`);
  return userName;
};

const playRound = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const playGame = (round, condition) => {
  const userName = greetingsWithName();
  console.log(condition);

  for (let i = 0; i < countsRound; i += 1) {
    const isCorrectRound = round();
    if (!isCorrectRound) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  getRandomNumber, getUserAnswer, playGame, playRound, greetingsWithName, getTwoRandomNumbers,
};
