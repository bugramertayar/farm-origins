'use client';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState(0);

  const submitClick = async () => {
    try {
      const formData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        userRole
      };
      const response = await axios.post('http://192.168.1.9:8080/api/account/register', formData);

      if (response.status === 200) {
        router.push('/login');
      } else {
        console.error('Registration failed:', response.data);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center w-1/2 bg-gray-200 p-8 pb-10">
        <div className="h-full w-full flex flex-col justify-center">
          <h1 className="pb-5 text-2xl font-bold">Register</h1>

          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-license" type="radio" value={userRole} checked={userRole === 0} onChange={(event) => setUserRole(0)} name="list-radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer" />
                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                  Buyer
                </label>
              </div>
            </li>

            <li className="w-full">
              <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-passport" type="radio" value={userRole} checked={userRole === 1} onChange={(event) => setUserRole(1)} name="list-radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer" />
                <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                  Seller
                </label>
              </div>
            </li>
          </ul>

          <form>
            <div className="grid gap-6 my-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
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
