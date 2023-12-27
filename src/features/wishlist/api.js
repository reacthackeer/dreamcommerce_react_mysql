// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const wishlistApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateSingleWishlistProduct: builder.mutation({
            query: (data) => ({
                url: `/wishlist/${data.product__id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: () => [{type: 'getAllUserWishlistProduct'}]
        }),
        getAllSingleUserWishlistProduct: builder.query({
            query: (user__id) => `/wishlist/get-all/${user__id}`,
            providesTags: () => [{type: 'getAllUserWishlistProduct'}]
        }),
        addSingleWishlist: builder.mutation({
            query: (data) => ({
                url: '/wishlist',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'getAllUserWishlistProduct'}]
        }),
        deleteSingleWishlistProduct: builder.mutation({
            query: (product__id) => ({
                url: `/wishlist/${product__id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'getAllUserWishlistProduct'}]
        }),
        moveToCart: builder.mutation({
            query: ({wishlistId}) => `/wishlist/transfer-to-cart/${wishlistId}`,
            invalidatesTags: () => [{type: 'getAllUserWishlistProduct'}, {type: 'getAllUserCartProduct'}] 
        })
    })
})

export const {    
    useAddSingleWishlistMutation,
    useGetAllSingleUserWishlistProductQuery, 
    useUpdateSingleWishlistProductMutation,
    useDeleteSingleWishlistProductMutation,
    useMoveToCartMutation
} = wishlistApi;