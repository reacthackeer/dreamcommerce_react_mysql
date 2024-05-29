// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPopularCategory: builder.query({
            query: () => `/popular-category`,
            providesTags: () => [{type: 'get__all__popular__category'}]
        }), 
        getSinglePopularCategory: builder.query({
            query: (id) => `/popular-category/${id}`
        }),
        addSinglePopularCategory: builder.mutation({
            query: (categoryInfo) => ({
                url: '/popular-category',
                method: 'POST',
                body: categoryInfo
            }),
            invalidatesTags: () => [{type: 'get__all__popular__category'}]
        }),
        updateSinglePopularCategory: builder.mutation({
            query: (categoryInfo) => ({
                url: `/popular-category/${categoryInfo.id}`,
                method: 'PUT',
                body: categoryInfo
            }),
            invalidatesTags: () => [{type: 'get__all__popular__category'}]
        }),   
        deleteSinglePopularCategory: builder.mutation({
            query: (id) => ({
                url: `/popular-category/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__popular__category'}]
        }),
    })
});
export const {
    useGetAllPopularCategoryQuery,
    useGetSinglePopularCategoryQuery,
    useAddSinglePopularCategoryMutation,
    useUpdateSinglePopularCategoryMutation,
    useDeleteSinglePopularCategoryMutation
} = offerApi;