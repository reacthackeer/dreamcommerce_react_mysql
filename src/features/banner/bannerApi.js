// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const bannerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBanner: builder.query({
            query: () => `/banner`,
            providesTags: () => [{type: 'get__all__banner'}]
        }),  
        getSingleBanner: builder.query({
            query: (uid) => `/banner/${uid}`, 
            providesTags: () => [{type: 'get__single__banner'}]
        }),
        addSingleBanner: builder.mutation({
            query: (brandInfo) => ({
                url: '/banner',
                method: 'POST',
                body: brandInfo
            }),
            invalidatesTags: () => [{type: 'get__all__banner'},{type: 'get__single__banner'}]
        }),
        updateSingleBanner: builder.mutation({
            query: (bannerInfo) => ({
                url: `/banner/${bannerInfo.id}`,
                method: 'PUT',
                body: bannerInfo
            }),
            invalidatesTags: () => [{type: 'get__all__banner'},{type: 'get__single__banner'}]
        }),    
        deleteSingleBanner: builder.mutation({
            query: (bannerId) => ({
                url: `/banner/${bannerId}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__banner'},{type: 'get__single__banner'}]
        }),
    })
});
export const {
    useGetAllBannerQuery,
    useGetSingleBannerQuery,
    useAddSingleBannerMutation,
    useUpdateSingleBannerMutation,
    useDeleteSingleBannerMutation
} = bannerApi;