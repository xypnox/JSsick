let A = [5, 8, 6, 3, 7, 1, 2, 4];

for (let i = 0; i < A.length - 1; i++) {
  let element = A[i];
  let pos = i;

  for (let j = i; j < A.length; j++) {
    // in this loop we store the smallest of subarray A[i..n]
    // in element and position in pos
    if (element > A[j]) {
      element = A[j];
      pos = j;
    }
  }
  // here we swap A[pos] and A[i] we are helped by the fact
  // that the value in A[pos] is already stored in element
  // Hence we can overwrite that value
  A[pos] = A[i];
  A[i] = element;
}

console.log(A);
