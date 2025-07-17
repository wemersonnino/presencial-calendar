import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { getUserPerfilAction } from '@/interfaces/actions/auth/getUserPerfil.action';
import { UserPerfilClient } from '@/components/perfil/UserPerfilClient';

export default async function PerfilPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect('/login');
  }

  const { success, data } = await getUserPerfilAction(session.user.email);

  if (!success || !data) {
    return <p>Erro ao carregar perfil.</p>;
  }

  return (
    <UserPerfilClient
      nome={data.nome}
      email={session.user.email}
      role={data.role}
      descricao={data.descricao}
      podeEditar={data.podeEditar}
      podeVisualizar={data.podeVisualizar}
      gerenciaUsuarios={data.gerenciaUsuarios}
    />
  );
}
