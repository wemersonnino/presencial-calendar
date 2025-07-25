import { RegisterForm } from '@/components/login/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full p-4">
        <h1 className="mb-4 text-2xl font-bold">Criar Conta</h1>
        <RegisterForm />
      </div>
    </main>
  );
}
