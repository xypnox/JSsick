import { day8Input, day8Test } from "./inputs.ts";

const checkVisible = (i: number, arr: number[]) => {
  const val2Check = arr[i];
  const visible = [true, true];
  if (val2Check) {
    for (let j = 0; j < arr.length; j++) {
      if (j < i && arr[j] >= val2Check) {
        visible[0] = false;
      } else if (j > i && arr[j] >= val2Check) {
        visible[1] = false;
      }
    }
    return visible[0] || visible[1];
  }
  return false;
};

const getScenicScore = (i: number, arr: number[]) => {
  const val2Check = arr[i];
  const visible = [0, 0];
  const finished = [false, false];
  let k = 0;
  if (val2Check) {
    while (!finished[0] || !finished[1]) {
      if (!finished[0]) {
        const val = arr[i - k];
        if (val) {
          if (val < val2Check) {
            visible[0]++;
          } else {
            finished[0] = true;
          }
        } else {
          finished[0] = true;
        }
      }
      if (!finished[1]) {
        const val = arr[i + k];
        if (val) {
          if (val < val2Check) {
            visible[1]++;
          } else {
            finished[1] = true;
          }
        } else {
          finished[1] = true;
        }
      }
      k++;
    }
    // for (let j = 0; j < arr.length; j++) {
    //   if (j < i && arr[j] >= val2Check) {
    //     visible[0] += 1;
    //   } else if (j > i && arr[j] >= val2Check) {
    //     visible[1] += 1;
    //   }
    // }
    return visible[0] * visible[1];
  }
  return 0;
};

export const sol1 = (input: string) => {
  const grid = input.split("\n").map((line) => line.split("").map(Number));
  console.log(grid);

  const size = grid.length;
  let visibleCount = 0;

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      const row = grid[i];
      const col = grid.map((row) => row[j]);
      console.log({ i, j, val: grid[i][j], row, col });
      if (checkVisible(j, row) || checkVisible(i, col)) {
        console.log("visible");
        visibleCount++;
      }
    }
  }

  const defaultVisible = 4 * (size - 2) + 4;

  return { defaultVisible, visibleCount };
};

export const sol2 = (input: string) => {};

console.log(sol1(day8Test));
const sol = sol1(day8Input);
const total = sol.defaultVisible + sol.visibleCount;
console.log(sol1(day8Input), total);
