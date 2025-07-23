'use client';

import { Sidebar } from './Sidebar';
import { User } from 'next-auth';
import React, { createContext, useContext, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Topbar } from '@/components/dashboard/Topbar';

interface Props {
  user: User;
  children: React.ReactNode;
}

const UserContext = createContext<User | null>(null);
export const useUser = () => useContext(UserContext);

export const DashboardShell = ({ user, children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <UserContext.Provider value={user}>
      {/* Mobile Sidebar */}
      <Dialog
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="relative z-50 lg:hidden"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 left-0 w-64 bg-white p-4 shadow-xl">
          <Sidebar role={user.role} onClose={() => setSidebarOpen(false)} />
        </Dialog.Panel>
      </Dialog>
      <div className="flex min-h-screen bg-gray-100">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex">
          <Sidebar role={user.role} />
        </div>

        <div className="flex w-full flex-1 flex-col">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </UserContext.Provider>
  );
};
