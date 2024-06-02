// http://localhost:10000/api/v1/products/p/Accessories/Cable?page=1&&peerPage=40

import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTopCategoryProduct: builder.query({
            query: ({father, page, limit}) => `/products/p/${father}?page=${page}&&peerPage=${limit}`,
            providesTags: () => [{type: 'invalid__for__crud'}]
        })
    })
})

export const {  
    useGetAllTopCategoryProductQuery
} = offerApi;