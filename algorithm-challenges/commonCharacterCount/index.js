function commonCharacterCount(s1, s2) {
  let numCommon = 0;
  let char = null;
  let char2 = null;
  for (let i = 0; i < s1.length; i++) {
    if (char === null) {
      if (s2.includes(s1[i])) {
        numCommon++;
        let index = s2.indexOf(s1[i])
        char = s2.slice(0, index);
        char2 = s2.slice(index + 1, s2.length)
        char = char.concat(char2);
      }
    } else {
      if (char.includes(s1[i])) {
        numCommon++;
        let index = char.indexOf(s1[i])
        char2 = char.slice(index + 1, s2.length)
        char = char.slice(0, index);
        char = char.concat(char2);
      }
    }
  }
  return numCommon;
}

commonCharacterCount("abca", "xyzbac")
