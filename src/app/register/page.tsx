'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthService } from '@/services/auth.service';
import { RegisterFormType } from '@/types/auth/registerFormType';
import { RadioGroupInput, TextInput } from '@/components/inputs';

export default function Register() {
  const router = useRouter();
  const authService = new AuthService();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState(0);

  const radioButtonOptions = [
    { label: 'Buyer', value: 0 },
    { label: 'Seller', value: 1 }
  ];

  const submitClick = async () => {
    try {
      const formData: RegisterFormType = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        userRole
      };
      await authService
        .register(formData)
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
          <RadioGroupInput options={radioButtonOptions} value={userRole} onChange={(event) => setUserRole(event.target.value)}></RadioGroupInput>
          <form>
            <div className="grid gap-6 my-6 md:grid-cols-2">
              <TextInput label="First name" id="firstName" placeholder="John" value={firstName} onChange={setFirstName} />

              <TextInput label="Last name" id="lastName" placeholder="Doe" value={lastName} onChange={setLastName} />

              <TextInput label="Phone number" id="phoneNumber" placeholder="123-45-678" value={phoneNumber} onChange={setPhoneNumber} />

              <TextInput label="Email address" id="email" placeholder="john.doe@company.com" value={email} onChange={setEmail} />

              <TextInput label="Password" id="password" placeholder="•••••••••" value={password} onChange={setPassword} />

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
            <Link className="text-center focus:outline-none col-span-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5" href="/login">
              Go Back to Login
            </Link>

            <button type="submit" onClick={submitClick} className="focus:outline-none col-span-1 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mt-5">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
