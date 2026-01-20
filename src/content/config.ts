// src/content/config.ts
import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content", // v2.5.0+ requires this
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(), // Optional, in case you don't have an image yet
  }),
});

export const collections = {
  projects: projectsCollection,
};
