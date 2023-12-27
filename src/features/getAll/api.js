// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const getAllNavbarData = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllFullNavbarData: builder.query({
            query: () => '/auth/get-all-navbar-data',
            providesTags: () => [{type: 'get__all__navbar__data'}]
        }),
        addChild: builder.mutation({
            query: (data) => ({
                url: '/child-navbar',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__navbar__data'}]
        }),
        addParent: builder.mutation({
            query: (data) => ({
                url: '/parent-navbar',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__navbar__data'}, {type: 'get__all__parent__for__preview'}], 
        }),
        addParentFather: builder.mutation({
            query: (data) => ({
                url: '/parent-father-navbar',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__navbar__data'}, {type: 'get__all__parent__father__for__preview'}]
        }),
        addSection: builder.mutation({
            query: (data) => ({
                url: '/up-navbar',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'get__all__navbar__data'},{type: 'get__all__up__for__preview'}]
        }),
        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `/brands/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'get__all__brands'}]
        })
    })
})

export const {      
    useGetAllFullNavbarDataQuery,
    useAddChildMutation,
    useAddParentMutation,
    useAddParentFatherMutation,
    useAddSectionMutation,
    useDeleteBrandMutation
} = getAllNavbarData;