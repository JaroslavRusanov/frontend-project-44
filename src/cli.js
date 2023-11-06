import readlineSync from 'readline-sync';

const greetingWithName = (name) => {
  let userName = readlineSync.question('May I have your name? ');
  userName = userName.trim();

  if (userName[0] !== userName[0].toUpperCase()) {
    userName = `${userName[0].toUpperCase()}${userName.slice(1)}`;
  }
  console.log(`Hello, ${userName}!`);
};

export { greetingWithName };