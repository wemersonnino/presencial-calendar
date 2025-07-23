import { z } from 'zod';

export const escalaSchema = z.object({
  id: z.string(),
  title: z.string(),
  datetime: z.iso.datetime(), // formato ISO
  userId: z.string(),
});

export const escalasArraySchema = z.array(escalaSchema);

export type Escala = z.infer<typeof escalaSchema>;
