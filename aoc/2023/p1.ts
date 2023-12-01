const getCallibrationNum = (input: string) => {
  const letters = input.split('');
  const cNums = letters.map((l) => parseInt(l)).filter((n) => !isNaN(n));
  const sum = parseInt(`${cNums[0]}${cNums[cNums.length - 1]}`);
  // console.log({
  //   input,
  //   letters,
  //   cNums,
  //   sum,
  // });
  return sum;
};

export const f1 = (input: string) => {
  const lines = input.split('\n');
  const calibrationNums = lines.map((line) => getCallibrationNum(line));
  // console.log(calibrationNums);
  const added = calibrationNums.reduce((acc, curr) => acc + curr, 0);
  return added;
};

const textOfNums = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const convertTextNums = (input: string) => {
  let output = `${input}`;
  const letters = output.split('');
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const textNum = textOfNums.filter((t) => t.startsWith(letter));
    if (textNum && textNum.length > 0) {
      textNum.forEach((t) => {
        const num = textOfNums.indexOf(t);
        const regex = new RegExp(t, 'g');
        const matches = regex.exec(input);
        if (matches) {
          console.log('Regexed', {
            matches,
            index: matches.index,
            curIndex: i,
          });
          if (matches.index === i) {
            // At index i only, replace text with num
            output = output.replace(t, `${num + 1}`);
          }
        }
      });
    }
  }

  return output;
};

export const f2 = (input: string) => {
  const lines = input.split('\n');
  // const calibrationNums = lines
  //   .map((line) => convertTextNums(line))
  //   .map((line) => getCallibrationNum(line));
  // // console.log(calibrationNums);
  const calNums: [string, string, number][] = lines
    .map((line) => [line, convertTextNums(line)])
    .map(([line, conv]) => [line, conv, getCallibrationNum(conv)]);

  calNums.forEach(([line, conv, cal]) => console.log({ line, conv, cal }));

  const added = calNums.reduce((acc, [text, rest, curr]) => acc + curr, 0);
  return added;
};

const convertTextNums2 = (input: string) => {
  const slidingWindow = 5;
  let output = '';
  for (let i = 0; i < input.length; i++) {
    const inputSlice = input.slice(i, i + slidingWindow);
    const nextNumMatched = textOfNums.filter((t) => inputSlice.startsWith(t));
    const num = textOfNums.indexOf(nextNumMatched[0]) + 1;
    if (nextNumMatched.length > 0) {
      output += `${num}`;
      i += nextNumMatched[0].length - 2;
    } else {
      output += input[i];
    }
  }
  console.log({ input, output });
  return output;
};

export const f22 = (input: string) => {
  const lines = input.split('\n');
  // const calibrationNums = lines
  //   .map((line) => convertTextNums(line))
  //   .map((line) => getCallibrationNum(line));
  // // console.log(calibrationNums);
  const calNums: [string, string, number][] = lines
    .map((line) => [line, convertTextNums2(line)])
    .map(([line, conv]) => [line, conv, getCallibrationNum(conv)]);

  calNums.forEach(([line, conv, cal]) => console.log(line, { conv, cal }));

  const added = calNums.reduce((acc, [text, rest, curr]) => acc + curr, 0);
  return added;
};
