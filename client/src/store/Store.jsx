import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/products/cartSlice";
import { productsApi } from "../features/products/productsApi";
// import counterReducer from "../features/auth/AuthSlice";
import productReducer from "../features/products/productSlice";
// import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    // users: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    // counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
