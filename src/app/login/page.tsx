'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AuthService } from '@/services/auth.service';
import { LoginUserType } from '@/types/auth/loginUserType';
import { LoginFormType } from '@/types/auth/loginFormType';
import { useAuth } from '@/contexts/AuthContext';

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

          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <div className="relative mb-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

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
