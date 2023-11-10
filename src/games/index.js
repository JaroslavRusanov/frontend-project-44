import readlineSync from 'readline-sync';

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

const countsRound = 3;

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

const getRandomNumber = () => (Math.round(Math.random() * 10));

const getUserAnswer = () => readlineSync.question('Your answer: ');

export { getRandomNumber, getUserAnswer, playGame };