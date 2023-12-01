import { day3, day3Test } from "./inputs.ts";

const rucksacks = day3;
/**
--- Part Two ---

As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg

And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
**/

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const score = (letter: string) => {
  if (letters.includes(`${letter}`.toLowerCase())) {
    if (letter === letter.toLowerCase()) {
      return letters.indexOf(letter) + 1;
    } else {
      return letters.indexOf(letter.toLowerCase()) + 1 + 26;
    }
  }
  return null;
};

const commonLetter = (strA: string, strB: string) => {
  for (let i = 0; i < strA.length; i++) {
    if (strB.includes(strA[i])) {
      return strA[i];
    }
  }
  return null;
};

const commonLetters = (stringA: string, stringB: string): string[] => {
  const letts: string[] = [];
  for (let i = 0; i < stringA.length; i++) {
    if (stringB.includes(stringA[i]) && !letts.includes(stringA[i])) {
      letts.push(stringA[i]);
    }
  }
  console.log({ stringA, stringB, letts });
  return letts;
};

const commonInThree = (packs: [string, string, string]) => {
  const commons = [
    commonLetters(packs[0], packs[1]).join(""),
    commonLetters(packs[1], packs[2]).join(""),
  ];

  const commons3 = [commonLetters(commons[0], commons[1]).join("")];

  // console.log({ commons, commons3 });

  if (commons3[0].length >= 1) {
    return commons3[0];
  }
};

const commonType = (rucksack: string) => {
  const halves = [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ];

  const cL = commonLetter(halves[0], halves[1]);

  // console.log({ cL, score: score(cL) });
  return cL ? score(cL) : null;
};

const ruck = rucksacks
  .split("\n")
  .map((r) => commonType(r))
  .reduce((a: number, b: number | null) => (b ? a + b : a), 0);

const rucksIn3 = rucksacks.split("\n").reduce(
  (
    a: {
      cur: string[];
      tot: string[];
    },
    b: string
  ) => {
    if (a.cur.length === 0) {
      a.cur.push(b);
    } else if (a.cur.length === 1) {
      a.cur.push(b);
    } else if (a.cur.length === 2) {
      a = {
        cur: [],
        tot: [...a.tot, [...a.cur, b].join("\n")],
      };
    }

    return a;
  },
  {
    cur: [],
    tot: [],
  }
);

const rucksIn3Arr = rucksIn3.tot.map((r) => r.split("\n"));

const ruckScores = rucksIn3Arr
  .map((r) => {
    // console.log({ r });
    // console.log();
    return commonInThree(r as [string, string, string]);
  })
  .flat()
  .map((r) => (r ? score(r[0]) : 0))
  .reduce((a: number, b: number | null) => (b ? a + b : a), 0);

console.log({ rucksIn3, rucksIn3Arr, ruckScores });
