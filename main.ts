// The Printer Finally Answers — entry program.
// Writes one line, the office printer's comeback, to /output/entry.txt.
//
// The line is judged against five criteria, in order:
//   1. The printer's own voice: first-person comeback to the humans who
//      stare at its cryptic error codes.
//   2. Funny at once: a real joke — the code is not cryptic at all, it just
//      says the machine is tired — not a complaint with a punchline bolted on.
//   3. Sounds like the machine: weary, literal, faintly passive-aggressive,
//      mocking the human who keeps googling the same code.
//   4. Lands in a single read: no setup, no second sentence needed.
//   5. Fresh: no "paper jam" punchline, no "turn it off and on again".
// The joke's twist is the last clause: the answer will not change, because
// the code already told the truth.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Error E-47 means 'I am tired.' It has meant that since 2019. You keep googling it like the answer will change.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
