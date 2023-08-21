process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const urname = process.stdin.read();

  if (urname) {
    process.stdout.write(`Your name is: ${urname}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
