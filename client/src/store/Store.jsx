import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/products/cartSlice";
import { productsApi } from "../features/products/productsApi";
// import counterReducer from "../features/auth/AuthSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    // counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
