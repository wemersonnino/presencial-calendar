import { z } from 'zod';

export const authSchema = z.object({
  email: z.email({
    // pattern: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
    pattern: z.regexes.email,
    message: 'Invalid email address',
  }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  rememberMe: z.boolean().optional(),
  nome: z.string().optional(),
});
export type LoginDTO = z.infer<typeof authSchema>;
