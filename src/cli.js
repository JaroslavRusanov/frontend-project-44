import readlineSync from 'readline-sync';

export default () => {
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
