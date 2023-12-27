// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBrand: builder.query({
            query: () => `/brands`,
            providesTags: () => [{type: 'get__all__brands'}]
        }), 
        getSingleBrand: builder.query({
            query: (uid) => `/brands/${uid}`
        }),
        addSingleBrand: builder.mutation({
            query: (brandInfo) => ({
                url: '/brands',
                method: 'POST',
                body: brandInfo
            }),
            invalidatesTags: () => [{type: 'get__all__brands'}]
        }),
        updateSingleBrand: builder.mutation({
            query: (brandInfo) => ({
                url: `/brands/${brandInfo.ID}`,
                method: 'PUT',
                body: brandInfo
            }),
            invalidatesTags: () => [{type: 'get__all__brands'}]
        }),
        updateSingleChild: builder.mutation({
            query: (brandInfo) => ({
                url: `/child-navbar/${brandInfo.ID}`,
                method: 'PUT',
                body: brandInfo,
            }),
            invalidatesTags: () => [{type: 'get__all__child__for__preview'}]
        }),
        updateSingleParent: builder.mutation({
            query: (brandInfo) => ({
                url: `/parent-navbar/${brandInfo.ID}`,
                method: 'PUT',
                body: brandInfo,
            }),
            invalidatesTags: () => [{type: 'get__all__parent__for__preview'}]
        }),
        updateSingleParentFather: builder.mutation({
            query: (brandInfo) => ({
                url: `/parent-father-navbar/${brandInfo.ID}`,
                method: 'PUT',
                body: brandInfo,
            }),
            invalidatesTags: () => [{type: 'get__all__parent__father__for__preview'}]
        }),
        updateSingleUp: builder.mutation({
            query: (brandInfo) => ({
                url: `/up-navbar/${brandInfo.ID}`,
                method: 'PUT',
                body: brandInfo,
            }),
            invalidatesTags: () => [{type: 'get__all__up__for__preview'}]
        }),
        getSingleBrandProduct: builder.query({
            query: ({brand, page, limit}) => `/products/brands/${brand}?page=${page}&peerPage=${limit}`
        }),
        getSingleBrandSimilarProduct: builder.query({
            query: ({brand, product__id, page, limit}) => `/products/brands/${brand}/${product__id}?page=${page}&peerPage=${limit}`
        }),
        getAllUpNavbar: builder.query({
            query: () => `/up-navbar`,
            providesTags: () => [{type: 'get__all__up__for__preview'}]
        }), 
        getAllParentFatherNavbar: builder.query({
            query: (up) => `/parent-father-navbar/by-up?up=${up}`,
            providesTags: () => [{type: 'get__all__parent__father__for__preview'}]
        }), 
        getAllParentNavbar: builder.query({
            query: ({up, parent__father}) => `/parent-navbar/get-all?up=${up}&parent__father=${parent__father}`,
            providesTags: () => [{type: 'get__all__parent__for__preview'}]
        }),
        getAllChildNavbar: builder.query({
            query: ({parent, up}) => `/child-navbar/get-all-parent?parent=${parent}&up=${up}`,
            providesTags: () => [{type: 'get__all__child__for__preview'}]
        }), 
        
        deleteSingleCollection: builder.mutation({
            query: (product__id) => ({
                url: `/child-navbar/${product__id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__child__for__preview'}]
        }),
        deleteSingleCategory: builder.mutation({
            query: (product__id) => ({
                url: `/parent-navbar/${product__id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__parent__for__preview'}]
        }),
        deleteSingleTopCategory: builder.mutation({
            query: (product__id) => ({
                url: `/parent-father-navbar/${product__id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__parent__father__for__preview'}]
        }),
        deleteSingleSection: builder.mutation({
            query: (product__id) => ({
                url: `/up-navbar/${product__id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__up__for__preview'}]
        }),
    })
});
export const {
    useDeleteSingleCategoryMutation,
    useUpdateSingleBrandMutation,
    useGetSingleBrandQuery,
    useGetAllChildNavbarQuery,
    useGetAllParentNavbarQuery,
    useGetAllParentFatherNavbarQuery,
    useGetAllUpNavbarQuery,
    useGetAllBrandQuery,
    useGetSingleBrandProductQuery,
    useGetSingleBrandSimilarProductQuery,
    useAddSingleBrandMutation,
    useUpdateSingleChildMutation,
    useDeleteSingleCollectionMutation,
    useUpdateSingleParentMutation,
    useUpdateSingleParentFatherMutation,
    useDeleteSingleTopCategoryMutation,
    useUpdateSingleUpMutation,
    useDeleteSingleSectionMutation
} = offerApi;