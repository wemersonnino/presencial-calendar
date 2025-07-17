'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authSchema, LoginDTO } from '@/schemas/auth.schema';
import { authenticateAction } from '@/interfaces/actions/auth/authenticate.action';
import { signIn } from 'next-auth/react';

export const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginDTO>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: LoginDTO) => {
    const result = await authenticateAction(data);

    if (!result.success) {
      const formError = result.errors._form?.[0];
      setServerError(formError ?? 'Falha na autenticação');
      return;
    }

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.ok) {
      router.push('/dashboard');
    } else {
      setServerError(res?.error ?? 'Erro ao logar');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-md rounded bg-white p-6 shadow-md"
    >
      <h2 className="font- mb-4 text-2xl text-gray-800">Login</h2>

      {serverError && <p className="mb-4 rounded bg-red-100 p-2 text-red-600">{serverError}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register('email')}
        className="mb-2 w-full rounded border px-3 py-2 text-gray-950"
      />
      {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Senha"
        {...register('password')}
        className="mb-2 w-full rounded border px-3 py-2 text-gray-950"
      />
      {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn ac w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600 disabled:bg-gray-300"
      >
        {isSubmitting ? 'Entrando...' : 'Login'}
      </button>
    </form>
  );
};
