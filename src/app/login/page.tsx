'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AuthService } from '@/services/auth.service';
import { LoginUserType } from '@/types/auth/loginUserType';
import { LoginFormType } from '@/types/auth/loginFormType';
import { useAuth } from '@/contexts/AuthContext';
import { TextInput } from '@/components/inputs';
import { PlatformButton } from '@/components/common';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const authService = new AuthService();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = async () => {
    router.push('/register');
  };

  const submitClick = async () => {
    try {
      const formData: LoginFormType = {
        email,
        password
      };
      await authService
        .login(formData)
        .then((user: LoginUserType) => {
          if (user) {
            login(user);
          }
        })
        .catch(() => {
          // TODO throw a toast and stay in login Page
        });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center w-1/2 bg-gray-200 p-8 pb-10">
        <div className="h-full w-full flex flex-col justify-center">
          <h1 className="pb-5 text-2xl font-bold">Login</h1>

          <div className="grid gap-6 my-6">
            <TextInput label="Email address" id="email" placeholder="john.doe@company.com" value={email} onChange={setEmail} />

            <TextInput label="Password" id="password" placeholder="•••••••••" value={password} onChange={setPassword} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <PlatformButton type="secondary" text="Register" onClick={goToRegister} />
            <PlatformButton text="Login" onClick={submitClick} />
          </div>
        </div>
      </div>
    </>
  );
}
