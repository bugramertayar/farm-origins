import axiosInstance from '@/contexts/axiosInstance';
import { StoreCreateFormType } from '@/types/store/storeCreateFormType';

export class StoreService {
  async createStore(formData: StoreCreateFormType): Promise<Boolean> {
    try {
      const response = await axiosInstance.post('store/create-store', formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
