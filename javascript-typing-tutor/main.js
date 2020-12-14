var sentence = "grumpy wizards make toxic brew";
var divContainer = document.querySelector('div.container');
var h1Text = document.querySelector('.sentence');

function splitQuote(){
  sentence.split('').forEach(character => {
    var characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    h1Text.appendChild(characterSpan);
  })
}
splitQuote();

document.addEventListener('keydown', (event)=>{
  var spanArray = h1Text.querySelectorAll('span');
  var correct = true;
  var x = event.key;
  spanArray.forEach((characterSpan, index)=>{
    if (x == null) {
      characterSpan.classList.add('black');
      correct=false;
    }
    if (x === characterSpan.innerText) {
      characterSpan.classList.add('green');
      characterSpan.classList.remove('red');
    }
    else {
      characterSpan.classList.add('red');
      characterSpan.classList.remove('green');
      correct=false;
    }
  })
})
