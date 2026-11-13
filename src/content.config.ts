import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const word = z.object({
  word: z.string(),
  reading: z.string().optional(),
  meaning: z.string(),
  note: z.string(),
});

const kanji = z.object({
  char: z.string(),
  on: z.string(),
  kun: z.string().optional(),
  level: z.string(),
  meaning: z.string(),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    album: z.string(),
    released: z.coerce.date(),
    noted: z.coerce.date(),
    youtube: z.string().regex(/^[A-Za-z0-9_-]{11}$/),
    spotify: z.string().url(),
    musixmatch: z.string().url(),
    summary: z.string(),
    words: z.array(word),
    kanji: z.array(kanji),
  }),
});

export const collections = { notes };
