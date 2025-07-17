import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  rememberMe: z.boolean().optional(),
  nome: z.string().optional(),
});
export type LoginDTO = z.infer<typeof authSchema>;
