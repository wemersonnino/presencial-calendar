'use server';

import { RegisterSchema, registerSchema } from '@/schemas/register.schema';
import { RegisterService } from '@/core/application/services/Register.service';
import { RegisterFirebaseAdapter } from '@/core/infrastructure/adapters/RegisterFirebase.adapter';

export async function registerAction(formData: RegisterSchema) {
  const parsed = registerSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.format(),
    };
  }

  try {
    const adapter = new RegisterFirebaseAdapter();
    const service = RegisterService.getInstance(adapter);

    await service.register(parsed.data);

    return { success: true };
  } catch (error: unknown) {
    console.error('Erro ao registrar usuário:', error);

    return {
      success: false,
      errors: {
        _form: [error instanceof Error ? error.message : 'Erro ao registrar usuário.'],
      },
    };
  }
}
