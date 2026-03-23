import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "sk"]),
    publishDate: z.coerce.date()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "sk"]),
    region: z.string().optional()
  })
});

export const collections = { blog, projects };
