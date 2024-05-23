// http://localhost:10000/api/v1/products/p/Accessories/Cable?page=1&&peerPage=40
// http://localhost:10000/api/v1/parent-navbar/get-all

import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategoryProduct: builder.query({
            query: ({father, parent,  page, limit}) => `/products/p/${father}/${parent.replace(/&/g,'anndd')}?page=${page}&&peerPage=${limit}`
        }),
        getAllCategory: builder.query({
            query: () => `/parent-navbar`
        })
    })
})

export const {  
    useGetAllCategoryProductQuery,
    useGetAllCategoryQuery
} = offerApi;