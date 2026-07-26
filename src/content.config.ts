import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    lang: z.enum(['en', 'hi']),
  }),
});

export const collections = {
  'blog': blogCollection,
};
