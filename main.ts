import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "// That 200ms sleep isn't latency, it's the load-bearing wall between us and charging the customer twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
