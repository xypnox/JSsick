function merge(A, p, q, r) {
  // A -> Array to be merged
  // p -> starting index of first array
  // q -> starting index of second array
  // r -> ending index of second array
  let B = A.slice(p, q);
  let C = A.slice(q, r + 1);

  // console.log(A, p, q, r, B, C);

  // insert largest number as sentinel at the end
  B.push(Number.MAX_SAFE_INTEGER);
  C.push(Number.MAX_SAFE_INTEGER);

  let i = 0,
    j = 0;

  for (let n = p; n < r + 1; n++) {
    if (B[i] <= C[j]) {
      A[n] = B[i++];
    } else {
      A[n] = C[j++];
    }
  }
}

function mergeSort(A, p, r) {
  let mid = Math.floor((p + r) / 2);

  if (mid < r) {
    mergeSort(A, p, mid);
    mergeSort(A, mid + 1, r);
    // console.log('merging');
    merge(A, p, mid + 1, r);
    // console.log(A);
  }
}

let arrayToBeSorted = [10, 3, 2, 4, 5, 2];

mergeSort(arrayToBeSorted, 0, arrayToBeSorted.length - 1);
console.log(arrayToBeSorted);
