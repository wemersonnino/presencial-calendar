import Link from "next/link";
import { HomeIcon, CalendarIcon, ChartPieIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <nav>
        <Link href="/dashboard" className="flex items-center p-2 hover:bg-gray-800 rounded">
          <HomeIcon className="h-5 w-5 mr-2" />Dashboard
        </Link>
        <Link href="/dashboard/edit-date" className="flex items-center p-2 hover:bg-gray-800 rounded">
          <CalendarIcon className="h-5 w-5 mr-2" />Editar Datas
        </Link>
        <Link href="/dashboard/reports" className="flex items-center p-2 hover:bg-gray-800 rounded">
          <ChartPieIcon className="h-5 w-5 mr-2" />Relatórios
        </Link>
        <Link href="/dashboard/notifications" className="flex items-center p-2 hover:bg-gray-800 rounded">
          <BellIcon className="h-5 w-5 mr-2" />Notificações
        </Link>
        <Link href="/dashboard/settings" className="flex items-center p-2 hover:bg-gray-800 rounded">
          <Cog6ToothIcon className="h-5 w-5 mr-2" />Configurações
        </Link>
      </nav>
    </aside>
  );
}
