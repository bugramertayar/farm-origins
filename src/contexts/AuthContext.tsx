'use client';
import { LoginUserType } from '@/types/auth/loginUserType';
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

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
  const [user, setUser] = useState<LoginUserType | null>(null);

  const login = (userData: LoginUserType) => {
    setUser(userData);
    Cookies.set('token', userData.accessToken);
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('token');
    router.push('/login');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
