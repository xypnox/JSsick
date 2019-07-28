/*
func multiply(m, n)
  if len(m) == 1 or len(n) == 1:
  	return m * n
  k = 2 * (max(len(m), len(n)) / 2 + 1 )
  a = m / 10 ** k
  b = m % 10 ** k
  c = n / 10 ** k
  d = n % 10 ** k
  ac = multiply(a, c)
  bd = multiply(b, d)
  mid = multiply(a+b, c+d) - ac -bd
  return ac * 10 ** k + mid * 10 ** k/2 + bd

  THIS IS INCOMPLETE AF
  JS BigInt is as bas as Rust's
*/

var bigInt = require('big-integer');

function len(x) {
  return x.toString().length;
}

function multiply(m, n) {
  if (len(m) < 2 || len(n) < 2) {
    return m * n;
  }
  let k = bigInt(Math.floor(Math.max(len(m), len(n)) / 2));
  let a = bigInt(Math.floor(m / bigInt(10).pow(k)));
  let b = bigInt(m % bigInt(10).pow(k));
  let c = bigInt(Math.floor(n / bigInt(10).pow(k)));
  let d = bigInt(n % bigInt(10).pow(k));

  // console.log(k, a, b, c, d);
  let ac = multiply(a, c);
  let bd = multiply(b, d);
  let mid = bigInt(multiply(bigInt(a).add(b), bigInt(c).add(d)))
    .minus(ac)
    .minus(bd);

  return bigInt(ac * bigInt(10).pow(2 * k) + mid * bigInt(10).pow(k) + bd);
}

let num = bigInt(
  3141592653589793238462643383279502884197169399375105820974944592
);
let num2 = bigInt(
  2718281828459045235360287471352662497757247093699959574966967627
);
console.log(num.multiply(num2).toString());
console.log(bigInt(multiply(num, num2)).toString());
// 8539734222673564525269145676516705265142247142361069361059726337973952462849792421336654765520811828069885969081738438551535616
// 8539734222673567143831944056453630612218016538782105147427095380765301779103346028763080360925993065714475378497400474227965952
