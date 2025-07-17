'use server';

import { authSchema, LoginDTO } from '@/schemas/auth.schema';
import { AuthService } from '@/core/application/services/Auth.service';
import { AuthResultAction, ServerValidationError } from './authResult.action';

export async function authenticateAction(formData: LoginDTO): Promise<AuthResultAction> {
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
