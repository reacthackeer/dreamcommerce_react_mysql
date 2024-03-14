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
        getAllAdminOrderProduct: builder.query({
            query: ({status, page, peerPage}) => ({
                url: `/order/all?filter=${status}&&page=${page}&peerPage=${peerPage}`,
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
        statusUpdate: builder.mutation({
            query: ({id, status}) => ({
                url: `/order/status/${id}/${status}`,
                method: 'PUT',
            }),
            invalidatesTags: () => [{type: 'getAllUserOrderProduct'}]
        }),
    })
})

export const {    
    useGetAllAdminOrderProductQuery,
    useStatusUpdateMutation,
    useApplyCashOnMutation,
    useGetAllUserOrderProductQuery,
    useIncrementOrderMutation,
    useDecrementOrderMutation
} = authApi;
