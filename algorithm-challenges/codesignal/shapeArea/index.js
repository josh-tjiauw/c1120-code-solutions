function shapeArea(n) {
  let amount = n * 2 - 1;
  for (let i = n - 1; i > 0; i--) {
    const x = (i + i - 1) * 2;
    amount += x;
  }
  return amount;
}
