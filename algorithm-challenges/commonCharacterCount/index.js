function commonCharacterCount(s1, s2) {
  let numCommon = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      numCommon++;
      let index = s2.indexOf(s1[i])
      console.log('index', index)
      const news2 = s2.slice(index, s2.length);
      console.log(news2)
    }
  }
  console.log(numCommon)
  return numCommon;
}

commonCharacterCount("aabcc", "adcaa")
