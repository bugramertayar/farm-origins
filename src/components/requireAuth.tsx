'use client';
import { getCurrentUser } from '@/hooks/auth/getCurrentUser';
import { AuthService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
  const router = useRouter();
  const authService = new AuthService();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      authService.logout().then(() => {});
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
}
