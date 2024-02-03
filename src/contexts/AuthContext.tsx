'use client';
import { LoginUserType } from '@/types/auth/loginUserType';
import { createContext, useContext, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { AuthService } from '@/services/auth.service';
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
  const authService = new AuthService();
  const publicRoutes = ['/login', '/register'];

  const [user, setUser] = useState<LoginUserType | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !publicRoutes.includes(pathname)) {
      authService.logout().then(() => {
        router.push('/login');
        logout();
      });
    }
  }, [pathname]);

  const login = (userData: LoginUserType) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
