import { LoginUserType } from '@/types/auth/loginUserType';

export const setCurrentUser = (user: LoginUserType) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};
