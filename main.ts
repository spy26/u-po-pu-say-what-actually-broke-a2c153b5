// Say What Actually Broke — make.fun entry (program/v1).
// Writes one single-line error message to /output/entry.txt and prints it.
// Deterministic: no randomness, no clock, no I/O beyond the fixed text.
// The entry is one line, 150 characters, well inside the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your session expired while you were reading this error. Log in again and it will expire again — the timeout is 90 seconds and the login form takes 91.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
