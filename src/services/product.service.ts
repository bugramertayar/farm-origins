import axiosInstance from '@/contexts/axiosInstance';
import { SelectOptionNumberType } from '@/types/common/selectOptionNumberType';

export class ProductService {
  async getUnitTypes(): Promise<SelectOptionNumberType[]> {
    try {
      const response = await axiosInstance.get('parameter/unit-type-list');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getCategories(): Promise<SelectOptionNumberType[]> {
    try {
      const response = await axiosInstance.get('parameter/category-list');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
