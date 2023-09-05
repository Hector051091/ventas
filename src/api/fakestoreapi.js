import axios from "axios";
import { BASE_URL } from "../config";

export class Fakestoreapi {
  static async getAllProducts() {
    try {
      const response = await axios.get(`${BASE_URL}products`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all Products:", error);
      throw error;
    }
  }

  static async getAllCategories() {
    try {
      const response = await axios.get(`${BASE_URL}products/categories`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all categories:", error);
      throw error;
    }
  }

  static async getProductsSpecificCategory(category) {
    try {
      const response = await axios.get(
        `${BASE_URL}products/category/${category}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product by category:", error);
      throw error;
    }
  }
}
