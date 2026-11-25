import { mkdirSync, writeFileSync } from "node:fs";

const entry: string = `My mother found the college brochure I'd hidden and told me, "You can't want something and be embarrassed to want it."`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
