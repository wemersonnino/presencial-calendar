'use client';

interface SidebarProps {
  role?: string;
}

export const Sidebar = ({ role }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-800 p-4 text-white">
      <h2 className="mb-4 text-xl font-bold">Dashboard</h2>
      <nav className="space-y-2">
        {role === 'admin' && (
          <a href="/dashboard/admin" className="block hover:underline">
            Área do Admin
          </a>
        )}
        {role === 'usuario' && (
          <a href="/dashboard/user" className="block hover:underline">
            Área do Usuário
          </a>
        )}
        <a href="/dashboard/perfil" className="block hover:underline">
          Meu Perfil
        </a>
        <a href="/logout" className="block text-red-300 hover:underline">
          Sair
        </a>
      </nav>
    </aside>
  );
};
