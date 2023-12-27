// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        applyCashOn: builder.mutation({
            query: (data) => ({
                url: `/order/apply-for-cash-on-delivery`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: () => [{type: 'getAllUserCartProduct'}, {type: 'getAllUserOrderProduct'}]
        }),
        getAllUserOrderProduct: builder.query({
            query: (userId) => ({
                url: `/order/${userId}`,
                method: 'GET' 
            }),
            providesTags: () => [{type: 'getAllUserOrderProduct'}]
        }),
        incrementOrder: builder.mutation({
            query: (id) => ({
                url: `/order/increment/${id}`,
                method: 'PUT'
            }),
            invalidatesTags: () => [{type: 'getAllUserOrderProduct'}]
        }),
        decrementOrder: builder.mutation({
            query: (id) => ({
                url: `/order/decrement/${id}`,
                method: 'PUT'
            }),
            invalidatesTags: () => [{type: 'getAllUserOrderProduct'}]
        }),
    })
})

export const {    
    useApplyCashOnMutation,
    useGetAllUserOrderProductQuery,
    useIncrementOrderMutation,
    useDecrementOrderMutation
} = authApi;
