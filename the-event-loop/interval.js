let counter = 3;
const countdown = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter === 0){
      console.log('Blast off!');
      clearInterval(countdown);
    }
}, 1000);
