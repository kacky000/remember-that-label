import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A printed warning label for every human: the promise not to need a note.
const label =
  "WARNING: Contents will say \"I'll remember that, no need to write it down.\" Contents will not remember that.";

const limit = 160;
if ([...label].length > limit) throw new Error(`label is ${[...label].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), label);
