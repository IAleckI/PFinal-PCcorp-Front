import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productSlice";
import searchSlice from "./features/products/searchSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        search: searchSlice,
    }
})