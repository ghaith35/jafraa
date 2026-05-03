import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";

// Prisma 7 does not auto-load .env before evaluating this file.
// Load it manually so DATABASE_URL is available for migrate / db push.
dotenv.config();

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});
