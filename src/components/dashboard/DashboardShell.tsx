'use client';

import { Sidebar } from './Sidebar';
import { User } from 'next-auth';
import { createContext, useContext } from 'react';

interface Props {
  user: User;
  children: React.ReactNode;
}

const UserContext = createContext<User | null>(null);
export const useUser = () => useContext(UserContext);

export const DashboardShell = ({ user, children }: Props) => {
  return (
    <UserContext.Provider value={user}>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar role={user.role} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </UserContext.Provider>
  );
};
