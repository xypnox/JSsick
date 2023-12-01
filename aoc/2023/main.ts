import { p1, p1Sample } from './data.ts';
import { f1, f22 } from './p1.ts';

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log('Attack on code');
  console.log('P1', f1(p1), f22(p1));
  console.log('P1 Sample', f1(p1Sample), f22(p1Sample));
}
