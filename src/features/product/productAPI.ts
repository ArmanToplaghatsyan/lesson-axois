import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('get products', async () => {
  try {
    const { data } = await axios.get('https://dummyjson.com/products');
    return data.products;
  } catch (e: any) {
    return e.message;
  }
});

export const getProductById = createAsyncThunk(
  'get product By Id',
  async (id: number) => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products/' + id);
      return data;
    } catch (e: any) {
      return e.message;
    }
  },
);

export const getCategories = createAsyncThunk('get categories', async () => {
  try {
    const { data } = await axios.get(
      'https://dummyjson.com/products/categories',
    );
    return data;
  } catch (e: any) {
    return e.message;
  }
});

export const getProductsByCategories = createAsyncThunk(
  'get product by categroies',
  async (text: string) => {
    try {
      const { data } = await axios.get(
        'https://dummyjson.com/products/category/' + text,
      );
      return data.products
    } catch (e: any) {
      return e.message;
    }
  },
);

export const deleteProductById = createAsyncThunk(
    'delete product By Id',
    async (id: number) => {
      try {
        const { data } = await axios.delete('https://dummyjson.com/products/' + id);
        return data;
      } catch (e: any) {
        return e.message;
      }
    },
  );
  