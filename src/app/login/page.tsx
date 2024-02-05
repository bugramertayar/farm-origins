'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AuthService } from '@/services/auth.service';
import { LoginUserType } from '@/types/auth/loginUserType';
import { LoginFormType } from '@/types/auth/loginFormType';
import { useAuth } from '@/contexts/AuthContext';
import { TextInput } from '@/components/inputs';

export default function Login() {
  const authService = new AuthService();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitClick = async () => {
    // try {
    //   const formData: LoginFormType = {
    //     email,
    //     password
    //   };
    //   await authService
    //     .login(formData)
    //     .then((user: LoginUserType) => {
    //       if (user) {
    //         login(user);
    //       }
    //     })
    //     .catch(() => {
    //       // TODO throw a toast and stay in login Page
    //     });
    // } catch (error) {
    //   console.error('Login failed:', error);
    // }
    login({ accessToken: 'asd', userId: '', username: '', expiredAt: new Date(), email: '' });
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
            <Link className="text-center focus:outline-none col-span-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5" href="/register">
              Register
            </Link>

            <button type="button" onClick={submitClick} className="w-full px-5 py-2.5 mt-5 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
