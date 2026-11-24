import { mkdirSync, writeFileSync } from "node:fs";

// The Houseplant Out-of-Office — one auto-reply, 111 characters.
// A fern, forgotten since March, answers its own out-of-office mail:
// it survived on dust and spite, and it has unionized with the cactus.
const ENTRY =
  "Out of office. I'm the fern you forgot in March. I survived on dust and spite. The cactus and I have unionized.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts characters, and fewer bytes
// win an exact tie on the leaderboard.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
