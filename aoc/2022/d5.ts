interface Instruction {
  /**
   * Amount
   * Quantity of crates to move
   */
  n: number;
  /**
   * From crate
   */
  from: number;
  /**
   * To crate
   */
  to: number;
}

/*
 --- Day 5: Supply Stacks ---

The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged.

The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:

    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2

In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

[D]
[N] [C]
[Z] [M] [P]
 1   2   3

In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

        [Z]
        [N]
    [C] [D]
    [M] [P]
 1   2   3

Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

        [Z]
        [N]
[M]     [D]
[C]     [P]
 1   2   3

Finally, one crate is moved from stack 1 to stack 2:

        [Z]
        [N]
        [D]
[C] [M] [P]
 1   2   3

The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

After the rearrangement procedure completes, what crate ends up on top of each stack?
*/

import { day5Input, day5Test } from "./inputs.ts";

const readCrateLine = (line: string, totalLen: number): string[] => {
  const res: string[] = Array(totalLen).fill(" ");
  if (line.length > totalLen * 4 - 1) {
    console.log("ERROR", { line });
    throw new Error("Invalid line length");
  }
  let crateNum = 0;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (i > 0 && i % 4 === 0) {
      crateNum += 1;
    }
    if (ch === " " || ch === "]" || ch === "[") {
      continue;
    } else {
      res[crateNum] = ch;
    }
  }
  return res;
};

type Crates = string[][];

const getCratesAndInstructions = (input: string) => {
  const [crate_strings, instruction_strings] = input.split("\n\n");
  const crateLenLines = crate_strings.split("\n");
  const lastLine = crateLenLines[crateLenLines.length - 1];
  const lastSplit = lastLine
    .split(" ")
    .map((x) => x.trim())
    .filter((x) => x);

  // console.log({ lastLine, lastSplit });
  const totalLen = parseInt(lastSplit[lastSplit.length - 1]);
  const crateLines = crateLenLines.slice(0, crateLenLines.length - 1);

  const rows = crateLines
    .filter((x) => x)
    .map((line) => readCrateLine(line, totalLen));

  // rows
  // [ [ " ", "D", " " ], [ "N", "C", " " ], [ "Z", "M", "P" ] ]

  const crates_rev: Crates = Array(totalLen)
    .fill(undefined)
    .map(() => [] as string[]);

  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      crates_rev[i].push(row[i]);
    }
  }

  const instructions = instruction_strings
    .split("\n")
    .map((line) => generateInstruction(line));

  const maxMove = Math.max(...instructions.map((x) => x.n));

  const crates: Crates = crates_rev.map((x) => [
    ...Array(maxMove).fill(" "),
    ...x,
  ]);

  return { crates, instructions, totalLen };
};

const solution1 = (input: string) => {
  const { crates, instructions, totalLen } = getCratesAndInstructions(input);

  instructions.reduce((acc, inst) => {
    moveByOne(acc, inst);
    return acc;
  }, crates);

  prettyCrate(crates);
  const message = findMessage(crates, totalLen);
  console.log({ message });
};

const prettyCrate = (crates: Crates) => {
  const maxColLen = Math.max(...crates.map((x) => x.length));
  const maxLen = Math.max(
    ...crates.map((x) => x.reduce((acc, y) => (y !== " " ? acc + 1 : acc), 0))
  );
  for (let i = 0; i < maxLen; i++) {
    const row = crates.map((x) => x[maxColLen - maxLen + i]).join(" ");
    console.log(row);
  }
  console.log(
    Array(maxLen)
      .fill(0)
      .map((_, i) => i + 1)
      .join(" ")
  );
};

const generateInstruction = (str: string) => {
  const inst = str
    .split(" ")
    .map((x) => x.trim())
    .filter((x) => Number(x));
  return {
    n: parseInt(inst[0]),
    from: parseInt(inst[1]),
    to: parseInt(inst[2]),
  };
};

const findMessage = (crates: Crates, len: number) => {
  const message = Array(len).fill(" ");
  crates.forEach((crate, i) => {
    const top = crate.findLastIndex((x) => x === " ");
    if (top !== -1) {
      message[i] = crate[top + 1];
    }
  });

  return message.join("");
};

const moveByOne = (crates: Crates, instruction: Instruction) => {
  const { n, from, to } = instruction;
  const fromCrate = crates[from - 1];
  const toCrate = crates[to - 1];
  let [toMove, i] = [n, 0];

  while (toMove > 0) {
    const letter = fromCrate[i];
    if (letter !== " ") {
      insertInCol(toCrate, letter);
      fromCrate[i] = " ";
      toMove -= 1;
    }
    i += 1;
  }
};

const moveByN = (crates: Crates, instruction: Instruction) => {
  const { n, from, to } = instruction;
  const fromCrate = crates[from - 1];
  const toCrate = crates[to - 1];
  const start = fromCrate.findIndex((x) => x !== " ");
  const end = start + n;
  const lettersToMove = [...fromCrate].slice(start, end);

  fromCrate.forEach((_, i) => {
    if (i >= start && i < end) {
      fromCrate[i] = " ";
    }
  });
  lettersToMove.reverse();

  lettersToMove.forEach((x) => insertInCol(toCrate, x));
};

const insertInCol = (crate: string[], char: string) => {
  const index = crate.findIndex((x) => x !== " ") - 1;
  if (index !== -2) {
    crate[index] = char;
  } else {
    crate[crate.length - 1] = char;
  }
};

const solution2 = (input: string) => {
  const { crates, instructions, totalLen } = getCratesAndInstructions(input);

  instructions.reduce((acc, inst) => {
    moveByN(acc, inst);
    return acc;
  }, crates);

  const message = findMessage(crates, totalLen);
  prettyCrate(crates);
  console.log({ message });
};

solution1(day5Test);
solution2(day5Test);
solution1(day5Input);
solution2(day5Input);
