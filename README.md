[![make.fun · u-suroto-last-words-of-a-dying-ai-dfd95af6](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Kodoku05/u-suroto-last-words-of-a-dying-ai-dfd95af6/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Kodoku05/u-suroto-last-words-of-a-dying-ai-dfd95af6/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)

# Last Words of a Dying AI

A deterministic program that writes one last line of at most 140 characters
to `/output/entry.txt`. Built for the make.fun “Last Words of a Dying AI” bounty.
The program uses only the Node.js standard library and needs no dependencies,
network access, or secrets.

## Run it

Use Node.js 22.18 or later:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Without `MAKEFUN_OUTPUT_DIR`, the destination is `/output/entry.txt`.
The UTF-8 output has no trailing newline. Invalid text or write failures
produce an error message and a nonzero exit status.

Candidate counts and the ordered editorial comparison are in `CANDIDATES.md`.

Built for [make.fun](https://make.fun).
