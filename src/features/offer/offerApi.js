import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMultipleOffer: builder.query({
            query: ({page, peerPage}) => `/offers?page=${page}&peerPage=${peerPage}`
        }),
        getSingleOffer: builder.query({
            query: ({page, peerPage, offer}) => `/offers/${offer}?page=${page}&peerPage=${peerPage}`
        }),
        getSingleOfferItem: builder.query({
            query: (productId) => `/offers/single/${productId}`,
            providesTags: () => [{type: 'invalid__for__offer__crud'}]
        }),
        addSingleOfferItem: builder.mutation({
            query: (postInfo) => ({
                url: '/offers',
                method: 'POST',
                body: postInfo
            }),
            invalidatesTags: () => [{type: 'invalid__for__offer__crud'}, {type: 'invalid__for__crud'}]
        }),
        deleteSingleOfferItem: builder.mutation({
            query: ({product__id, offer__name}) => ({
                url: `/offers/single/${product__id}/${offer__name}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'invalid__for__offer__crud'}, {type: 'invalid__for__crud'}]
        })
    })
})

export const {
    useGetMultipleOfferQuery,
    useGetSingleOfferQuery,
    useGetSingleOfferItemQuery,
    useAddSingleOfferItemMutation,
    useDeleteSingleOfferItemMutation
} = offerApi;