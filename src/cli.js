import readlineSync from 'readline-sync';

export const greetingWithName = () => {
  let userName = readlineSync.question('May I have your name? ');

  if (userName.length === 0) {
    return console.log(`Hello, Anonymous!`);
  }

  userName = userName.trim();

  if (userName[0] !== userName[0].toUpperCase()) {
    userName = `${userName[0].toUpperCase()}${userName.slice(1)}`;
  }
  console.log(`Hello, ${userName}!`);
};