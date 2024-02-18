'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth.service';
import { RadioGroupInput, TextInput } from '@/components/inputs';
import { PlatformButton } from '@/components/common';

export default function Register() {
  const router = useRouter();
  const authService = new AuthService();

  const [isRegisterFormValid, setIsRegisterFormValid] = useState(false);
  const [registerFormValues, setRegisterFormValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    userRole: 0
  });

  useEffect(() => {
    checkFormValidity();
  }, [registerFormValues]);

  const checkFormValidity = () => {
    const isValid = registerFormValues.firstName !== '' && registerFormValues.lastName !== '' && registerFormValues.phoneNumber !== '' && registerFormValues.email !== '' && registerFormValues.password !== '';
    setIsRegisterFormValid(isValid);
  };

  const onFormChange = (id: string, value: any) => {
    setRegisterFormValues({ ...registerFormValues, [id]: value });
  };

  const radioButtonOptions = [
    { label: 'Buyer', value: 0 },
    { label: 'Seller', value: 1 }
  ];

  const goToLogin = async () => {
    router.push('/login');
  };

  const submitClick = async () => {
    try {
      await authService
        .register(registerFormValues)
        .then((result: boolean) => {
          if (result) {
            router.push('/login');
          }
        })
        .catch(() => {
          // TODO throw a toast and stay in register Page
        });
    } catch (error) {
      console.error('Register failed:', error);
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center w-1/2 bg-gray-200 p-8 pb-10">
        <div className="h-full w-full flex flex-col justify-center">
          <h1 className="pb-5 text-2xl font-bold">Register</h1>
          <RadioGroupInput
            id="userRole"
            options={radioButtonOptions}
            value={registerFormValues.userRole}
            onChange={(event) => {
              onFormChange(event.target.id, event.target.value);
            }}
          />
          <form>
            <div className="grid gap-6 my-6 md:grid-cols-2">
              <TextInput
                label="First name"
                id="firstName"
                placeholder="John"
                value={registerFormValues.firstName}
                onChange={(event) => {
                  onFormChange(event.target.id, event.target.value);
                }}
              />

              <TextInput
                label="Last name"
                id="lastName"
                placeholder="Doe"
                value={registerFormValues.lastName}
                onChange={(event) => {
                  onFormChange(event.target.id, event.target.value);
                }}
              />

              <TextInput
                label="Phone number"
                id="phoneNumber"
                placeholder="123-45-678"
                value={registerFormValues.phoneNumber}
                onChange={(event) => {
                  onFormChange(event.target.id, event.target.value);
                }}
              />

              <TextInput
                label="Email address"
                id="email"
                placeholder="john.doe@company.com"
                value={registerFormValues.email}
                onChange={(event) => {
                  onFormChange(event.target.id, event.target.value);
                }}
              />

              <TextInput
                label="Password"
                id="password"
                placeholder="•••••••••"
                value={registerFormValues.password}
                onChange={(event) => {
                  onFormChange(event.target.id, event.target.value);
                }}
              />

              <TextInput label="Confirm Password" id="confirm_password" placeholder="•••••••••" />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the{' '}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                  terms and conditions
                </a>
                .
              </label>
            </div>
          </form>

          <div className="grid grid-cols-2 gap-4">
            <PlatformButton type="secondary" text="Go Back to Login" onClick={goToLogin} />
            <PlatformButton text="Register" disabled={!isRegisterFormValid} onClick={submitClick} />
          </div>
        </div>
      </div>
    </>
  );
}
