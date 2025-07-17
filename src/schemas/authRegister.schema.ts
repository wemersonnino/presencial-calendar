import { z } from 'zod';

export const authRegisterSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
  nome: z.string().min(1, { message: 'Nome obrigatório' }),
});

export type RegisterDTO = z.infer<typeof authRegisterSchema>;
