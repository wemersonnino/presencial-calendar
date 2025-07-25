import Calendar from '@/components/calendar/Calendar';

export default async function UserPage() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800">Agenda do Usuário</h2>
      <Calendar />
    </>
  );
}
