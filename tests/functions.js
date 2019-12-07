function addNum(a, b) {
  function abc(params) {
    console.log(params);
  }
  return abc;
}

let addNum2 = (a, b) => {
  return a => {
    console.log(a);
  };
};
