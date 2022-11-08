const arr = [1, 25, 7, -7, -3, 12, -22, 0];

console.log(arr.sort(function (a, b) {
  if (Math.abs(a) - Math.abs(b) === 0) {
    return a - b;
  }
  return Math.abs(a) - Math.abs(b);
}))