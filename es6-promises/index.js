const takeAChance = require('./take-a-chance');

const prom1 = takeAChance('Josh');
prom1.then((value) =>{
  console.log(value);
})

prom1.catch((error) => {
  console.log(error.message);
})
