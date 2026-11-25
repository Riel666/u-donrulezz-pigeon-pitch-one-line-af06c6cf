import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "PigeonPost: 40,000 couriers already live on every rooftop, work for crumbs, and never call in sick — we’re raising a seed round to scale the coo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
