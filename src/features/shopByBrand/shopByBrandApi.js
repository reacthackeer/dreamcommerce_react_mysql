// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllShopByBrand: builder.query({
            query: () => `/shop-by-brand`,
            providesTags: () => [{type: 'get__all__by__brand'}]
        }), 
        getSingleShopByBrand: builder.query({
            query: (id) => `/shop-by-brand/${id}`
        }),
        addSingleShopByBrand: builder.mutation({
            query: (categoryInfo) => ({
                url: '/shop-by-brand',
                method: 'POST',
                body: categoryInfo
            }),
            invalidatesTags: () => [{type: 'get__all__by__brand'}]
        }),
        updateSingleShopByBrand: builder.mutation({
            query: (categoryInfo) => ({
                url: `/shop-by-brand/${categoryInfo.id}`,
                method: 'PUT',
                body: categoryInfo
            }),
            invalidatesTags: () => [{type: 'get__all__by__brand'}]
        }),   
        deleteSingleShopByBrand: builder.mutation({
            query: (id) => ({
                url: `/shop-by-brand/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__by__brand'}]
        }),
    })
});
export const {
    useGetAllShopByBrandQuery,
    useGetSingleShopByBrandQuery,
    useAddSingleShopByBrandMutation,
    useUpdateSingleShopByBrandMutation,
    useDeleteSingleShopByBrandMutation
} = offerApi;