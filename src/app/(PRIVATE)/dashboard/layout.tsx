import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { DashboardShell } from '@/components/dashboard/DashboardShell';
import { authOptions } from '@/lib/authOptions';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/login');

  return <DashboardShell user={session.user}>{children}</DashboardShell>;
}
