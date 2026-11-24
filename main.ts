// Entry: exactly 67 Unicode code points; the gate allows 1–140.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "Power loss detected. Save changes to files I said I hadn't touched?";

try {
  const count = [...line].length;
  if (count < 1 || count > 140 || line.trim() !== line || /[\r\n\u2028\u2029]/u.test(line)) {
    throw new Error('Entry must be one trimmed line of 1–140 Unicode code points.');
  }
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), line, { encoding: 'utf8' });
} catch (error) {
  console.error(`Failed to write entry: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
