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

const isEven = (number) => (number % 2 === 0);

const getRandomNumber = () => (Math.round(Math.random() * 100));

const playRound = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer && userAnswer.toLowerCase().trim() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const playGame = () => {
  const userName = greetingsWithName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < countsRound; i += 1) {
    const isCorrectRound = playRound();
    if (!isCorrectRound) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
