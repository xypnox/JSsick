import { day4Input, day4Test } from "./inputs.ts";

/**
--- Day 4: Camp Cleanup ---

Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique ID number, and each Elf is assigned a range of section IDs.

However, as some of the Elves compare their section assignments with each other, they've noticed that many of the assignments overlap. To try to quickly find overlaps and reduce duplicated effort, the Elves pair up and make a big list of the section assignments for each pair (your puzzle input).

For example, consider the following list of section assignment pairs:

2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8

For the first few pairs, this list means:

    Within the first pair of Elves, the first Elf was assigned sections 2-4 (sections 2, 3, and 4), while the second Elf was assigned sections 6-8 (sections 6, 7, 8).
    The Elves in the second pair were each assigned two sections.
    The Elves in the third pair were each assigned three sections: one got sections 5, 6, and 7, while the other also got 7, plus 8 and 9.

This example list uses single-digit section IDs to make it easier to draw; your actual list might contain larger numbers. Visually, these pairs of section assignments look like this:

.234.....  2-4
.....678.  6-8

.23......  2-3
...45....  4-5

....567..  5-7
......789  7-9

.2345678.  2-8
..34567..  3-7

.....6...  6-6
...456...  4-6

.23456...  2-6
...45678.  4-8

Some of the pairs have noticed that one of their assignments fully contains the other. For example, 2-8 fully contains 3-7, and 6-6 is fully contained by 4-6. In pairs where one assignment fully contains the other, one Elf in the pair would be exclusively cleaning sections their partner will already be cleaning, so these seem like the most in need of reconsideration. In this example, there are 2 such pairs.

In how many assignment pairs does one range fully contain the other?
**/

/**
 * Do pairs overlap?
 */
const overlaps = (pair1: [number, number], pair2: [number, number]) => {
  if (pair1[0] <= pair2[0] && pair1[1] >= pair2[1]) {
    return true;
  } else if (pair2[0] <= pair1[0] && pair2[1] >= pair1[1]) {
    return true;
  }
  return false;
};

const generatePairs = (str: string) => {
  const pairs = str
    .split("\n")
    .map((pair) => pair.split(",") as [string, string]);

  const pairsNum = pairs.map((pair) => {
    const [a, b] = pair;
    const [a1, a2] = a.split("-").map((n) => parseInt(n, 10));
    const [b1, b2] = b.split("-").map((n) => parseInt(n, 10));
    return [[a1, a2] as [number, number], [b1, b2] as [number, number]];
  });

  return pairsNum;
};

const solution1 = (str: string) => {
  /** Pairs of numbers */

  // console.log({ pairsNum });
  const pairsNum = generatePairs(str);

  const overlapsCount = pairsNum.reduce((acc, pairs) => {
    const [a, b] = pairs;
    if (overlaps(a, b)) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log({ overlapsCount });
};

solution1(day4Test);
solution1(day4Input);

/*
 Cases
XXXXX
   XXXXX

   XXXXX
XXXXX

XXXXX
      XXXXX

      XXXXX
XXXXX

XXXXXX
 XXXX

 XXXX
XXXXXX

 */

const partialOverlaps = (pair1: [number, number], pair2: [number, number]) => {
  if (pair1[0] < pair2[0] && pair1[1] < pair2[0]) {
    return false;
  } else if (pair1[0] > pair2[1] && pair1[1] > pair2[1]) {
    return false;
  }
  return true;
};

const solution2 = (str: string) => {
  const pairsNum = generatePairs(str);

  const overlapsCount = pairsNum.reduce((acc, pairs) => {
    const [a, b] = pairs;
    console.log({ a, b, overlaps: partialOverlaps(a, b) });
    if (partialOverlaps(a, b)) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log({ overlapsCount });
};

solution2(day4Test);
solution2(day4Input);
