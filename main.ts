import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The night guard where I worked the desk watched me apologize twice to a guest given store credit for his deposit and said, 'The second sorry is for you, not him.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
