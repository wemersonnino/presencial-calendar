import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export interface SidebarLink {
  name: string;
  href?: string;
  icon: React.ElementType;
  roles?: string[]; // se omitido, visível para todos
  group?: string;
  children?: SidebarLink[]; // submenu
}

export const sidebarLinks: SidebarLink[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
    group: 'Geral',
  },
  {
    name: 'Team',
    icon: UsersIcon,
    href: '#',
    roles: ['admin', 'usuario'],
    group: 'Teams',
  },
  {
    name: 'Projects',
    href: '/dashboard/projects',
    icon: FolderIcon,
    group: 'Geral',
  },
  {
    name: 'Calendar',
    href: '/dashboard/calendar',
    icon: CalendarIcon,
    group: 'Geral',
  },
  {
    name: 'Documents',
    href: '/dashboard/documents',
    icon: DocumentDuplicateIcon,
    group: 'Geral',
  },
  {
    name: 'Reports',
    icon: ChartPieIcon,
    group: 'Relatórios',
    children: [
      {
        name: 'Monthly Report',
        href: '/dashboard/reports/monthly',
        icon: ChartPieIcon,
      },
      {
        name: 'Annual Report',
        href: '/dashboard/reports/annual',
        icon: ChartPieIcon,
      },
    ],
  },
];

// Link extra fixo no rodapé (exibido apenas para admin)
export const settingsLink: SidebarLink = {
  name: 'Settings',
  href: '/dashboard/settings',
  icon: Cog6ToothIcon,
  roles: ['admin'],
};
