'use client';
import { LoginUserType } from '@/types/auth/loginUserType';
import { createContext, useContext, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { publicRoutes } from './publicRoutes';
interface AuthContextProps {
  user: LoginUserType | null;
  login: (userData: LoginUserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: (userData: LoginUserType) => {},
  logout: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<LoginUserType | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !publicRoutes.includes(pathname)) {
      logout();
    }
  }, [pathname]);

  const login = (userData: LoginUserType) => {
    setUser(userData);
    localStorage.setItem('token', userData.accessToken);
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    router.push('/login');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
