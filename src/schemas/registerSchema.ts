import { z } from 'zod';

export const registerSchema = z.object({
  nome: z.string().min(3, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
