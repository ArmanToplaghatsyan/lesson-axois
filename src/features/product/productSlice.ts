import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../type/type';
import { RootState } from '../../app/store';
import {
  getCategories,
  getProductById,
  getProducts,
  getProductsByCategories,
} from './productAPI';

const initialState: {
  products: IProduct[];
  product: IProduct;
  categories: string[];
} = {
  product: {} as IProduct,
  products: [],
  categories: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getProducts.pending, () => {
        console.log('pending');
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log('rejet', action.payload);
      })

      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(getProductsByCategories.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const selectProduct = (state: RootState) => state.main;
export default productSlice.reducer;
