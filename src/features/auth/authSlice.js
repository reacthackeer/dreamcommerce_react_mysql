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
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            // let { name, email, phone, token, img__src, address, user__id } = action.payload;
            state.auth = action.payload;
            state.auth.isLoggedIn = true;
        },
        addPrintUserInfo: (state, action) => {
            state.printUser = action.payload
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
        }
    }
});
export const {
        userLoggedIn, 
        userLOggedOut,
        addPrintUserInfo,
        resetPrintUserInfo
    } = authSlice.actions;
export default authSlice.reducer;