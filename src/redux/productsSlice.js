import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProduct } from "../services/api";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  return await getProducts();
});


export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id) => {
  return await getProduct(id);
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    product: null,
    loading: false,
    error: null,
    cart: [], 
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find((p) => p.id === action.payload.id);
      if (!existing) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else if (item && item.quantity === 1) {
       
        state.cart = state.cart.filter((p) => p.id !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => { state.loading = true; })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, increaseQty, decreaseQty } = productsSlice.actions;
export default productsSlice.reducer;
