'use client';

import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  role?: string;
  onClose?: () => void;
}

export const Sidebar = ({ role, onClose }: SidebarProps) => {
  return (
    <aside className="flex h-full w-64 flex-col bg-white shadow-md">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        {onClose && (
          <button onClick={onClose} className="text-gray-600 lg:hidden">
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-2 p-4 text-sm">
        {role === 'admin' && (
          <Link href="/dashboard/admin" className="block hover:underline">
            Área do Admin
          </Link>
        )}
        {role === 'usuario' && (
          <Link href="/dashboard/user" className="block hover:underline">
            Área do Usuário
          </Link>
        )}
        <a href="/dashboard/perfil" className="block hover:underline">
          Meu Perfil
        </a>
        <Link href="/logout" className="block text-red-400 hover:underline">
          Sair
        </Link>
      </nav>
    </aside>
  );
};
