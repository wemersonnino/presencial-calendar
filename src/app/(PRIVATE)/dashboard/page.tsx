// app/(dashboard)/page.tsx
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/authOptions';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/login');

  if (session.user.role === 'admin') {
    redirect('/dashboard/admin');
  } else if (session.user.role === 'usuario') {
    redirect('/dashboard/user');
  }

  redirect('/unauthorized'); // ou uma página de erro personalizada
}
