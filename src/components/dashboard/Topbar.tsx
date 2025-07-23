import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from './DashboardShell';
import Link from 'next/link';
import { Bell, ChevronDown, LogOut, UserIcon } from 'lucide-react';

interface TopbarProps {
  onMenuClick: () => void;
}

export const Topbar = ({ onMenuClick }: TopbarProps) => {
  const user = useUser();
  const notificationCount = 3;
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Botão mobile */}
      <div className="flex items-center gap-2">
        <Button className="text-gray-600 lg:hidden" onClick={onMenuClick} aria-label="Abrir menu">
          <Bars3Icon className="h-6 w-6" />
        </Button>

        {/* Campo de busca e menu do usuário (igual como você já fez) */}
        {/* Placeholder onde ficará o search no futuro */}
        <div className="hidden text-sm text-gray-400 sm:block">
          Outras opções aqui futuramente...
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notificações */}
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-700" aria-label="Notificações">
            <Bell className="h-5 w-5" />
          </button>
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-bold text-white">
              {notificationCount}
            </span>
          )}
        </div>

        {/* Menu de usuário */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.image || ''} alt={user?.name || 'User'} />
              <AvatarFallback>
                <UserIcon className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium text-gray-900 lg:inline">{user?.name}</span>
            <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end">
            <DropdownMenuItem asChild>
              <Link href="/dashboard/perfil" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/logout" className="flex items-center gap-2 text-red-500">
                <LogOut className="h-4 w-4" />
                <span>Sign out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
