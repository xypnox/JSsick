import { day6Input, day6Test, day6Tests } from "./inputs.ts";

const sol1 = (input: string, findSize = 4) => {
  let markerFound = false;
  const lettersEcountered: string[] = [];
  let read = 0;
  const last4: string[] = [];

  while (markerFound === false) {
    const nextLetter = input[0];
    input = input.slice(1);
    read++;
    lettersEcountered.push(nextLetter);

    last4.push(nextLetter);

    if (last4.length > findSize) {
      last4.shift();
    }

    if (last4.length < findSize) {
      continue;
    }

    const set4 = new Set(last4);

    if (set4.size === findSize) {
      markerFound = true;
      break;
    }
  }

  // const uniqEncountered = new Set(lettersEcountered);

  // console.log({
  //   lettersEcountered,
  //   last4,
  //   read,
  // });

  return read;
};

// sol1(day6Test);

day6Tests.forEach((test) => console.log({ test, sol: sol1(test, 14) }));

console.log(sol1(day6Input));
console.log(sol1(day6Input, 14));
