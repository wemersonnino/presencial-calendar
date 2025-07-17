import { ZodFormattedError } from 'zod';
import { LoginDTO } from '@/schemas/authSchema';

export type ServerValidationError = Partial<ZodFormattedError<LoginDTO> & { _form?: string[] }>;

export type AuthSuccess = {
  success: true;
  user: {
    uid: string;
    email: string | null;
    nome?: string;
    role?: string;
  };
};

export type AuthFailure = {
  success: false;
  errors: ServerValidationError;
};

export type AuthResult = AuthSuccess | AuthFailure;
