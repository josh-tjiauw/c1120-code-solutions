var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let count = 0;
  let i = 0;
  while (i < s.length) {
    let current = s[i];
    let next = s[i + 1];
    if (symbols[current] < symbols[next]) {
      count += symbols[next] - symbols[current];
      i += 2;
    } else {
      count += symbols[current];
      i++;
    }
  }
  return count;
};
