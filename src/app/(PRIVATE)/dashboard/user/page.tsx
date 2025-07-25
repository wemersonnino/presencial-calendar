// app/private/user/page.tsx
import { Calendar } from '@/components/calendar/Calendar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { EscalasService } from '@/core/application/services/Escalas.service';

export default async function UserPage() {
  /*const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error('Usuário não autenticado');
  }

  const escalasService = EscalasService.getInstance();
  const escalas = await escalasService.getEscalas(session.user.id);

  if (!escalas) {
    throw new Error('Erro ao carregar escalas do usuário');
  }*/

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800">Agenda do Usuário</h2>
      <Calendar />
    </>
  );
}
