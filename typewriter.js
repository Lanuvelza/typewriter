const sentence = "hello there from lighthouse labs";


let time = 50;

for (let i = 0; i <= sentence.length; i++) {
    
  setTimeout(() => {
    // print the char here
    if (i === sentence.length) {
      process.stdout.write('\n');
    } else {

      process.stdout.write(sentence[i]);
    }
    
  }, time += 50); // <= 50s delay to make it noticeable. Can dial it down later.

}

