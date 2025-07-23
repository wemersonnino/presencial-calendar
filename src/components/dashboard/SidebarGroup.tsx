import Link from 'next/link';
import { SidebarLink } from './sidebar-links';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export interface SidebarGroupProps {
  group?: SidebarLink;
  role?: string;
  item: SidebarLink;
}

export const SidebarGroup = ({ group, role, item }: SidebarGroupProps) => {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href || '#'}
        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
      >
        <item.icon className="h-5 w-5 text-gray-400" />
        {item.name}
      </Link>
    );
  }
  if (item.roles && !item.roles.includes(role || '')) {
    return null; // Não renderiza se o papel não tiver permissão
  }
  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
      >
        <div className="flex items-center gap-3">
          <item.icon className="h-5 w-5 text-gray-400" />
          {item.name}
        </div>
        <ChevronDownIcon
          className={`h-4 w-4 transform text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul className="mt-1 space-y-1 pl-8">
          {item.children.map((child) => (
            <li key={child.name}>
              <Link
                href={child.href || '#'}
                className="block text-sm text-gray-600 hover:underline"
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
