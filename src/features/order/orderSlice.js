import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    isFilled: false
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addMultipleOrderProduct: (state, action) => {
            state.products = action.payload;
            state.isFilled = true;
        },
        resetOrderProduct: (state) => {
            state.products = [];
            state.isFilled = false;
        }
    }
});
export const {
    addMultipleOrderProduct,
    resetOrderProduct
} = orderSlice.actions;
export default orderSlice.reducer;