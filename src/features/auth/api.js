// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__admin'}]
        }),
        getAllAdminInfo: builder.query({
            query: ({role, store__id, store__email, designation}) => ({
                url: `/auth/get-all-admin?role=${role}&store__id=${store__id}&designation=${designation}&store__email=${store__email}`,
                method: 'GET'
            }),
            providesTags: () => [{type: 'get__all__admin'}]
        }),
        adminRegisterUser: builder.mutation({
            query: (data) => ({
                url: '/auth/admin-register',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__admin'}]
        }),
        printUserInfo: builder.query({
            query: (user__id) => ({
                url: `/auth/get-info/${user__id}`,
                method: 'GET'
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
            }),
            invalidatesTags: () => [{type: 'get__all__admin'}]
        }),
        updateAdminUser: builder.mutation({
            query: (data) => ({
                url: "/auth/admin-update",
                method: "PUT",
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__admin'}]
        }),
        updatePasswordByAdmin: builder.mutation({
            query: (data) => ({
                url: "/auth/admin-change-password",
                method: "PUT",
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__admin'}]
        }),
        deleteAdminUser: builder.mutation({
            query: (userId) => ({
                url: "/auth/admin-delete/"+userId,
                method: "DELETE", 
            }),
            invalidatesTags: () => [{type: 'get__all__admin'}]
        })
    })
})

export const {    
    useDeleteAdminUserMutation,
    useRegisterUserMutation,
    useLoginUserMutation,
    useUpdateUserMutation,
    usePrintUserInfoQuery, 
    useAdminRegisterUserMutation,
    useGetAllAdminInfoQuery,
    useUpdateAdminUserMutation,
    useUpdatePasswordByAdminMutation
} = authApi;
