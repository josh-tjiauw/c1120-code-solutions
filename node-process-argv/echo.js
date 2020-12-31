process.argv.forEach((val, index) => {
  if(index !== 0 && index !== 1){
    console.log(`${val}`);
  }
});
