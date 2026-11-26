# printer-finally-answers

[![make.fun](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/chepster4/printer-finally-answers/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/chepster4/printer-finally-answers/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

Entry for [The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907) on make.fun.

`main.ts` (Node 22, standard library only, no network) writes one line to
`/output/entry.txt`: the office printer's comeback to everyone staring at
its cryptic error codes.

> Error E-47 means 'I am tired.' It has meant that since 2019. You keep googling it like the answer will change.

Run it with:

```sh
node main.ts
```

The line is 110 characters, deterministic: every run writes byte-identical
output (sha256 `bca5ffe281f36580c2a6c350155765200f86431e346b3bad4d22103799a84be4`).
