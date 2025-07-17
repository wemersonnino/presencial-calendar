'use server';

import { authSchema, LoginDTO } from '@/schemas/authSchema';
import { authRegisterSchema, RegisterDTO } from '@/schemas/authRegisterSchema';
import { AuthService } from '@/core/application/services/AuthService';
import { AuthResult, ServerValidationError } from './authResult';

export async function authenticate(formData: LoginDTO): Promise<AuthResult> {
  const parsed = authSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      errors: {
        ...parsed.error.format(),
      },
    };
  }

  const authService = AuthService.getInstance();

  try {
    const user = await authService.login(parsed.data.email, parsed.data.password);
    return { success: true, user };
  } catch (error) {
    console.error('Erro na autenticação:', error);

    const errors: ServerValidationError = {
      _form: ['Email ou senha inválidos'],
    };
    console.log('Tentando login com:', formData.email, formData.password);

    return {
      success: false,
      errors,
    };
  }
}
