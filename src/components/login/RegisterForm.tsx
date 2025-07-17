'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/registerSchema';
import { register } from '@/interfaces/actions/auth/register';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    setFormError(null);

    const result = await register({
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    });

    if (!result.success && result.errors) {
      const errors = result.errors;

      if ('_form' in errors && errors._form) {
        setFormError(errors._form.join(', '));
      }

      if ('nome' in errors && errors.nome?._errors?.[0]) {
        form.setError('nome', { message: errors.nome._errors[0] });
      }

      if ('email' in errors && errors.email?._errors?.[0]) {
        form.setError('email', { message: errors.email._errors[0] });
      }

      if ('senha' in errors && errors.senha?._errors?.[0]) {
        form.setError('senha', { message: errors.senha._errors[0] });
      }
    } else {
      // ✅ Registro com sucesso — redirecionar ou notificar
      window.location.href = '/login';
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h2 className="text-center text-2xl font-bold">Criar Conta</h2>

      {formError && <div className="text-center text-sm text-red-600">{formError}</div>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Digite seu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Digite sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Criando conta...' : 'Cadastrar'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
