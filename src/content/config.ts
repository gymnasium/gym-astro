import { defineCollection, z } from 'astro:content';

const bios = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    description: z.string(),
    // Transform string to Date object
    headshot: z.string().optional(),
  }),
});

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const webinars = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    // Transform string to Date object
    date: z
      .string()
      .optional()
      .or(z.date().optional())
      .transform((str) => (str ? new Date(str) : undefined)),
    description: z.string(),
    event_date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    event_ogimage: z.string(),
    host: z.string(),
    id: z.string(),
    landing: z.boolean(),
    recording_ogimage: z.string(),
    register: z.boolean(),
    resources: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    speaker: z.array(z.string()).optional(),
    subtitle: z.string().optional(),
    time: z.string(),
    title: z.string(),
    video: z.boolean(),
    video_id: z.string(),
    webinar_id: z.any().optional(),
    webinar_question_key: z.string().or(z.number()).optional(),
  }),
});

export const collections = 
{ 
  //bios, blog, webinars
};
