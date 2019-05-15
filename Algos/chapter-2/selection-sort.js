let A = [5, 8, 6, 3, 7, 1, 2, 4];

for (let i = 0; i < A.length - 1; i++) {
  let element = A[i];
  let pos = i;

  for (let j = i; j < A.length; j++) {
    if (element > A[j]) {
      element = A[j];
      pos = j;
    }
  }

  A[pos] = A[i];
  A[i] = element;
}

console.log(A);
