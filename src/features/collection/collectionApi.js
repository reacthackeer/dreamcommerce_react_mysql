// http://localhost:10000/api/v1/products/p/Accessories/Cable/USB Cable?page=1&&peerPage=40

import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCollectionProduct: builder.query({
            query: ({father, parent, child, page, limit}) => `/products/p/${father}/${parent.replace(/&/g,'anndd')}/${child}?page=${page}&&peerPage=${limit}`,
            providesTags: () => [{type: 'get__all__child__product'}]
        }),
        getAllCollectionSimilarProduct: builder.query({
            query: ({father, parent, child, product__id, page, limit}) => `/products/p/similar__product/${father}/${parent.replace(/&/g,'anndd')}/${child}/${product__id}?page=${page}&&peerPage=${limit}`
        })
    })
})

export const { 
    useGetAllCollectionProductQuery,
    useGetAllCollectionSimilarProductQuery
} = offerApi;