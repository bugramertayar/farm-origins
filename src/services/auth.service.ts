import axiosInstance from '@/contexts/axiosInstance';
import { LoginFormType } from '@/types/auth/loginFormType';
import { LoginUserType } from '@/types/auth/loginUserType';
import { RegisterFormType } from '@/types/auth/registerFormType';

export class AuthService {
  async login(formData: LoginFormType): Promise<LoginUserType> {
    try {
      const response = await axiosInstance.post('account/login', formData);
      const user = response.data;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async register(formData: RegisterFormType): Promise<boolean> {
    try {
      const response = await axiosInstance.post('account/register', formData);
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
}
