/*
Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
*/
function makeArrayConsecutive2(statues) {
  const sortedStatues = statues.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < sortedStatues.length; i++) {
    if (sortedStatues[i + 1]) {
      const diff = sortedStatues[i + 1] - sortedStatues[i] - 1;
      count += diff;
    }
    else {
      return count;
    }
    console.log(count);
  }
  return count;
}

makeArrayConsecutive2([40, 100, 1, 5, 25, 10]);
