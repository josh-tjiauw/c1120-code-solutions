var modifyString = function (s) {
  let answer = s.split('');
  let previous = 0;
  let next = 0;
  if (s.length === 1) {
    return 'a';
  }
  for (let i = 0; i < answer.length; i++) {
    if (i === answer.length - 1 && s[i] === '?') {
      previous = answer[i - 1].charCodeAt(0);
      for (let m = 97; m <= 122; m++) {
        if (m != previous) {
          answer[i] = String.fromCharCode(m);
          break;
        }
      }
    } else if (i > 0 && answer[i] === '?') {
      previous = answer[i - 1].charCodeAt(0);
      next = answer[i + 1].charCodeAt(0);
      for (let j = 97; j <= 122; j++) {
        if (j != previous && j != next) {
          answer[i] = String.fromCharCode(j);
          break;
        }
      }
    } else if (i === 0 && s[i] === '?') {
      next = answer[i + 1].charCodeAt(0);
      for (let k = 97; k <= 122; k++) {
        if (k != next) {
          answer[i] = String.fromCharCode(k);
          break;
        }
      }
    }
  }
  return answer.join('');
};
