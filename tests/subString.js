// Program to find a substring

let str = 'IamsTeststring';
let subStr = 'amTs';
let i;
outer: for (i = 0; i < str.length; i++) {
  let k = i;
  for (let j = 0; j < subStr.length; j++) {
    if (str[k] != subStr[j]) {
      break;
    } else if (j == subStr.length - 1) {
      console.log('substring');
      break outer;
    } else {
      k++;
    }
  }
  if (i == str.length - 1) {
    console.log('No substring');
  }
}
