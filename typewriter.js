const sentence = "hello there from lighthouse labs";
const animation = (sentence) => {
  let i = 0;
  
  for (const char of sentence) {
    setTimeout(() =>
      process.stdout.write(char), i);
    i += 50;
  
  }
};

animation(sentence);