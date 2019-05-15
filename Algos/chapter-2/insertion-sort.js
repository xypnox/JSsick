let i;
let A = [5, 8, 6, 3, 7, 1, 2, 4];

console.log(A);

for (let j = 1; j < A.length; j++) {
  const key = A[j];
  i = j - 1;

  while (i >= 0 && A[i] > key) {
    // note that changing A[i] > key is the
    // simplest way to reverse sort the Array
    A[i + 1] = A[i];
    i = i - 1;
  }

  A[i + 1] = key;
}

console.log(A)