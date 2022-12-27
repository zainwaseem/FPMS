import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/products/productsApi";
// import counterReducer from "../features/auth/AuthSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    // counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
