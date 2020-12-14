var count = document.querySelector('em');
var hotButton = document.querySelector('button.hot-button');
var clickCount = document.querySelector('p.click-count');

function clicked() {
  count.textContent ++;
  if (count.textContent<4) {
    hotButton.className = 'hot-button cold';
  }
  else if (count.textContent<7) {
    hotButton.className = 'hot-button cool'
  }
  else if (count.textContent<10) {
    hotButton.className = 'hot-button tepid'
  }
  else if (count.textContent<13) {
    hotButton.className = 'hot-button warm'
  }
  else if (count.textContent<16) {
    hotButton.className = 'hot-button hot'
  }
  else {
    hotButton.className = 'hot-button nuclear'
  }
}
hotButton.addEventListener('click', clicked)
