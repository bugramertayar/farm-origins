'use client';
import { useEffect, useState } from 'react';
import { AuthService } from '@/services/auth.service';
import { LoginUserType } from '@/types/auth/loginUserType';
import { useAuth } from '@/contexts/AuthContext';
import { TextInput } from '@/components/inputs';
import { PlatformButton } from '@/components/common';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const authService = new AuthService();
  const { login } = useAuth();

  const [isLoginFormValid, setIsLoginFormValid] = useState(false);
  const [loginFormValues, setLoginFormValues] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    checkFormValidity();
  }, [loginFormValues]);

  const onFormChange = (id: string, value: any) => {
    setLoginFormValues({ ...loginFormValues, [id]: value });
  };

  const checkFormValidity = () => {
    const isValid = loginFormValues.email !== '' && loginFormValues.password !== '';
    setIsLoginFormValid(isValid);
  };

  const goToRegister = async () => {
    router.push('/register');
  };

  const submitClick = async () => {
    try {
      await authService
        .login(loginFormValues)
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
            <TextInput
              label="Email address"
              id="email"
              placeholder="john.doe@company.com"
              value={loginFormValues.email}
              onChange={(event) => {
                onFormChange(event.target.id, event.target.value);
              }}
            />

            <TextInput
              label="Password"
              id="password"
              placeholder="•••••••••"
              value={loginFormValues.password}
              onChange={(event) => {
                onFormChange(event.target.id, event.target.value);
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <PlatformButton type="secondary" text="Register" onClick={goToRegister} />
            <PlatformButton text="Login" disabled={!isLoginFormValid} onClick={submitClick} />
          </div>
        </div>
      </div>
    </>
  );
}
