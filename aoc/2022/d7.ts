import { day7Input, day7Test } from "./inputs.ts";

interface Folder {
  name: string;
  type: "folder";
  size: number;
  children: Node[];
}

interface File {
  type: "file";
  name: string;
  size: number;
}

type Node = Folder | File;

const NodeStr = (node: Node) => {
  if (node.type === "folder") {
    return `- ${node.name} (dir, ${node.size} bytes)`;
  } else {
    return `- ${node.name} (file, size=${node.size})`;
  }
};

const prettyPrint = (node: Folder, indent: number = 0) => {
  console.log(" ".repeat(indent) + NodeStr(node));
  for (const child of node.children) {
    if (child.type === "folder") {
      prettyPrint(child, indent + 2);
    } else {
      console.log(" ".repeat(indent + 2) + NodeStr(child));
    }
  }
};

const findAtMostSize = (node: Folder, size: number): Folder[] => {
  const res: Folder[] = [];
  if (node.size <= size && node.type === "folder") {
    res.push(node);
  }
  for (const child of node.children) {
    if (child.type === "folder") {
      res.push(...findAtMostSize(child, size));
    }
  }
  return res;
};

const findMinSizeWithAtLeast = (node: Folder, size: number) => {
  const res: Folder[] = [];
  if (node.size >= size && node.type === "folder") {
    res.push(node);
  }
  for (const child of node.children) {
    if (child.type === "folder") {
      res.push(...findMinSizeWithAtLeast(child, size));
    }
  }
  return res;
};

export const sol1 = (input: string) => {
  const dirTree: Folder = {
    type: "folder",
    children: [] as Node[],
    name: "/",
    size: 0,
  };

  let currentDir: Folder | null = null;
  let cwd: Folder[] = [];

  const commands = input.split("\n");

  for (const command of commands) {
    const [cmd, ...rest] = command.split(" ");

    switch (cmd) {
      case "$": {
        const [cmd, ...rest2] = rest;
        if (cmd === "cd") {
          console.log("Need to change dir", { rest2 });
          const dir2change2 = rest2[0];
          if (currentDir === null && dir2change2 === "/") {
            currentDir = dirTree;
            cwd = [];
          } else if (dir2change2 === "..") {
            if (cwd.length === 0) {
              currentDir = null;
            } else {
              currentDir = cwd.pop()!;
            }
          } else if (currentDir !== null) {
            const newDir = currentDir.children.find(
              (x) => x.name === dir2change2 && x.type === "folder"
            ) as Folder;
            if (newDir) {
              cwd.push(currentDir);
              currentDir = newDir;
            } else {
              throw new Error("Invalid dir");
            }
          }
        } else if (cmd === "ls") {
          console.log("Need to list dir");
        }
        break;
      }
      case "dir": {
        console.log("Found dir", { rest });
        currentDir?.children.push({
          type: "folder",
          name: rest[0],
          size: 0,
          children: [],
        });
        break;
      }
      default: {
        const [name] = rest;
        console.log("Found file", { name, size: cmd });

        if (currentDir === null) {
          throw new Error("Invalid state");
        }
        currentDir.children.push({
          type: "file",
          name: rest[0],
          size: parseInt(cmd),
        });
        currentDir.size += parseInt(cmd);
        cwd.forEach((x) => (x.size += parseInt(cmd)));
        break;
      }
    }
  }

  prettyPrint(dirTree);
  const size = 100000;
  const dirs = findAtMostSize(dirTree, size);
  const sumSize = dirs.reduce((acc, x) => acc + x.size, 0);
  console.log({ dirs, sumSize });
  const totalSize = 70000000
  const filled =  dirTree.size
  const empty = totalSize - filled

  const required = 30000000 - empty
  const minSized = findMinSizeWithAtLeast(dirTree, required);
  const sortedMin = minSized.sort((a, b) => a.size - b.size);
  // console.log({ dirs, sumSize, minSized, sortedMin });
  const mostMin = sortedMin[0];
  console.log({ mostMin });
};

sol1(day7Test);
sol1(day7Input);
