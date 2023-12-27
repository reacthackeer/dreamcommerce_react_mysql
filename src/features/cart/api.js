// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateSingleCartProduct: builder.mutation({
            query: (data) => ({
                url: `/cart/${data.product__id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: () => [{type: 'getAllUserCartProduct'}]
        }),
        getAllSingleUserCartProduct: builder.query({
            query: (user__id) => `/cart/get-all/${user__id}`,
            providesTags: () => [{type: 'getAllUserCartProduct'}]
        }),
        getUserPdfStatement: builder.mutation({
            query: (user__id) => ({
                url: `/cart/get-all/product-as-a-pdf-format/${user__id}`,
                method: 'POST',
                
            })
        }),
        addSingleCart: builder.mutation({
            query: (data) => ({
                url: '/cart',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'getAllUserCartProduct'}]
        }),
        deleteSingleCartProduct: builder.mutation({
            query: (product__id) => ({
                url: `/cart/${product__id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'getAllUserCartProduct'}]
        }),
        moveToWishlist: builder.mutation({
            query: ({cartId}) => `/cart/transfer-to-wishlist/${cartId}`,
            invalidatesTags: () => [{type: 'getAllUserWishlistProduct'}, {type: 'getAllUserCartProduct'}] 
        }),
        printPdf: builder.mutation({
            query: (user__id) => ({
                url: `/cart/get-all/product-as-a-pdf-format/${user__id}`,
                method: 'POST',
                responseHandler: (response) => response.blob()
            })
        })
    })
})

export const {    
    useGetUserPdfStatementMutation,
    useMoveToWishlistMutation,
    useAddSingleCartMutation,
    useGetAllSingleUserCartProductQuery, 
    useUpdateSingleCartProductMutation,
    useDeleteSingleCartProductMutation,
    usePrintPdfMutation
} = cartApi;