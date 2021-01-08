const sentence = "grumpy wizards make toxic brew";
const divContainer = document.querySelector('div.container');
const h1Text = document.querySelector('.sentence');


function splitQuote(){
  sentence.split('').forEach(character => {
    var characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    h1Text.appendChild(characterSpan);
  })
}
splitQuote();


document.addEventListener('keydown', (event)=>{
  const x = event.key;
  const spanArray = h1Text.querySelectorAll('span');
  let counter = 0;
  while (counter < spanArray.length) {
    if (spanArray[counter] === x) {
      spanArray[counter].classList.add('green');
      counter++
    }
    else {
      spanArray[counter].className.add('red');
    }
  }

})
