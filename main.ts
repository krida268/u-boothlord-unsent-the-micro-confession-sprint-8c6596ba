// Unsent: The Micro-Confession Sprint — a two-part micro-confession.
// The message was typed once, to one person, and never sent.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = [
  "To: the neighbour whose dog I hit with my bike in 2019",
  "I told you it ran into the road. It didn't — I was looking at my phone, and I've felt guilty walking past your gate ever since.",
].join("\n");

// The gate: /output/entry.txt must be UTF-8 text of 1 to 260 characters.
if (ENTRY.length < 1 || ENTRY.length > 260) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-260 gate`);
}
const messageLine = ENTRY.split("\n")[1];
if (messageLine.length > 200) {
  throw new Error(`unsent message is ${messageLine.length} characters, over the 200 limit`);
}

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
