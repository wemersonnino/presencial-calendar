'use client';

import { useUser } from './DashboardShell';
import { sidebarLinks, settingsLink } from './sidebar-links';
import { SidebarGroup } from './SidebarGroup';
import Image from 'next/image';
import logo from '@/images/logo.png';

export const Sidebar = () => {
  const user = useUser();

  const canView = (roles?: string[]) => !roles || (user?.role && roles.includes(user.role));

  const groupedLinks = sidebarLinks.reduce(
    (acc, link) => {
      if (!canView(link.roles)) return acc;
      const group = link.group || 'Outros';
      if (!acc[group]) acc[group] = [];
      acc[group].push(link);
      return acc;
    },
    {} as Record<string, typeof sidebarLinks>,
  );

  return (
    <aside className="flex w-full flex-col border-r border-gray-200 bg-white px-4 py-6">
      <div className="mb-6 flex h-10 items-center gap-3 px-2">
        <Image src={logo} alt="Logo" className="h-8 w-auto" width={40} height={40} />
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>

      <nav className="flex flex-1 flex-col gap-y-3">
        {Object.entries(groupedLinks).map(([groupTitle, items]) => (
          <div key={groupTitle}>
            <h3 className="mb-2 px-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
              {groupTitle}
            </h3>
            <div className="flex flex-col gap-y-2">
              {items.map((item) => (
                <SidebarGroup key={item.name} item={item} role={user?.role} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Rodapé: Settings apenas para admin */}
      {canView(settingsLink.roles) && (
        <div className="mt-auto border-t border-gray-100 pt-4">
          <SidebarGroup item={settingsLink} />
        </div>
      )}
    </aside>
  );
};
