// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllShopByCategory: builder.query({
            query: () => `/shop-by-category`,
            providesTags: () => [{type: 'get__all__by__category'}]
        }), 
        getSingleShopByCategory: builder.query({
            query: (id) => `/shop-by-category/${id}`
        }),
        addSingleShopByCategory: builder.mutation({
            query: (categoryInfo) => ({
                url: '/shop-by-category',
                method: 'POST',
                body: categoryInfo
            }),
            invalidatesTags: () => [{type: 'get__all__by__category'}]
        }),
        updateSingleShopByCategory: builder.mutation({
            query: (categoryInfo) => ({
                url: `/shop-by-category/${categoryInfo.id}`,
                method: 'PUT',
                body: categoryInfo
            }),
            invalidatesTags: () => [{type: 'get__all__by__category'}]
        }),   
        deleteSingleShopByCategory: builder.mutation({
            query: (id) => ({
                url: `/shop-by-category/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__by__category'}]
        }),
    })
});
export const {
    useGetAllShopByCategoryQuery,
    useGetSingleShopByCategoryQuery,
    useAddSingleShopByCategoryMutation,
    useUpdateSingleShopByCategoryMutation,
    useDeleteSingleShopByCategoryMutation
} = offerApi;