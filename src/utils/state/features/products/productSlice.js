import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    error: null,
    loading: false,
    filtered: []
}

export const productSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        getProductsRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.data = null;
        },
        getProducts: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setFiltered: (state, action) => {
            return { ...state, filtered: action.payload }
        }
    }
})

export const { getProductsRequest, getProducts, getProductsFailure, setFiltered } = productSlice.actions;
export default productSlice.reducer;