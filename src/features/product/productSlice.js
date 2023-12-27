import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    header: [],
    ides: [], 
    price: {
        start: 0,
        end: 0
    },
    searchString: ''
};

const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        clearFilterProduct: (state, action) => {
            state.header = [];
            state.ides = [];
            state.price = {start: 0, end: 0};
            state.searchString = ''
        },
        updateFilterProduct: (state, action) => {
            let {ides, header} = action.payload;
            state.ides = ides;
            state.header = header;
        },
        updateProductPrice: (state, action) => {
            state.price = action.payload;
        },
        updateSearchString: (state, action) => {
            state.searchString = action.payload;
        }
    },
});

export const { clearFilterProduct, updateFilterProduct, updateProductPrice, updateSearchString } = productFilterSlice.actions;
export default productFilterSlice.reducer;
