import { createContext, useContext, ReactNode, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = (userData: User) => {
    setUser(userData);
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    setLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>{children}</UserContext.Provider>
  );
}
