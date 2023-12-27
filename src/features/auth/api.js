// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: "/auth/update",
                method: "PUT",
                body: data
            })
        })
    })
})

export const {    
    useRegisterUserMutation,
    useLoginUserMutation,
    useUpdateUserMutation
} = authApi;
