import { LoginFormType } from '@/types/auth/loginFormType';
import { LoginUserType } from '@/types/auth/loginUserType';
import { RegisterFormType } from '@/types/auth/registerFormType';
import axios from 'axios';

export class AuthService {
  async login(formData: LoginFormType): Promise<LoginUserType> {
    try {
      const response = await axios.post('http://192.168.1.9:8080/api/account/login', formData);
      const user = response.data;
      localStorage.setItem('token', user.accessToken);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    localStorage.removeItem('token');
  }

  async register(formData: RegisterFormType): Promise<boolean> {
    try {
      const response = await axios.post('http://192.168.1.9:8080/api/account/register', formData);
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
