let A = [5, 8, 6, 3, 7, 1, 2, 4];

function searchElement(x, A) {
  for (let i = 0; i < A.length; i++) {
    if (x === A[i]) {
      return i;
    }
  }
  return null;
}

console.log(searchElement(2, A));
console.log(searchElement(11, A));
