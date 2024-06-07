import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth: {
        name: undefined,
        email: undefined,
        phone: undefined,
        token: undefined,
        img__src: undefined,
        address: undefined,
        user__id: undefined,
        designation: undefined,
        role: undefined,
        isLoggedIn: true,
        ID: undefined
    },
    printUser: {
        name: undefined,
        email: undefined,
        phone: undefined,
        token: undefined,
        img__src: undefined,
        address: undefined,
        user__id: undefined,
        designation: undefined,
        role: undefined,
        isLoggedIn: true,
        ID: undefined
    },
    navbar: [],
    popularCategory: [],
    banners: [],
    cartProduct: [],
    authChecked: false,
    editMode: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            // let { name, email, phone, token, img__src, address, user__id } = action.payload;
            state.auth = action.payload;
            state.auth.isLoggedIn = true; 
            state.authChecked = true;
        },
        addPrintUserInfo: (state, action) => {
            state.printUser = action.payload
        },
        addAllNav: (state, action) => { 
            state.navbar = action.payload.navbar;
            state.banners = action.payload.banners;
            state.popularCategory = action.payload.popularCategory;
        },
        resetPrintUserInfo: (state, action) => {
            state.printUser = {
                name: undefined,
                email: undefined,
                phone: undefined,
                token: undefined,
                img__src: undefined,
                address: undefined,
                user__id: undefined,
                designation: undefined,
                role: undefined,
                isLoggedIn: true,
                ID: undefined
            }
        },
        userLOggedOut: (state) => {
            state.auth = {
                name: undefined,
                email: undefined,
                phone: undefined,
                token: undefined,
                img__src: undefined,
                address: undefined,
                user__id: undefined,
                designation: undefined,
                role: undefined
            }
            state.authChecked = true;
        }, 
        setCartProduct: (state, action) => {
            state.cartProduct = action.payload;
        }, 
        setEditMode: (state, action) => {
            state.editMode = action.payload
        }
    }
});
export const {
        setAuthChecked,
        userLoggedIn, 
        userLOggedOut,
        addPrintUserInfo,
        resetPrintUserInfo,
        addAllNav,
        setCartProduct,
        setEditMode
    } = authSlice.actions;
export default authSlice.reducer;