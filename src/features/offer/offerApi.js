import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMultipleOffer: builder.query({
            query: ({page, peerPage}) => `/offers?page=${page}&peerPage=${peerPage}`
        }),
        getSingleOffer: builder.query({
            query: ({page, peerPage, offer}) => `/offers/${offer}?page=${page}&peerPage=${peerPage}`
        })
    })
})

export const {
    useGetMultipleOfferQuery,
    useGetSingleOfferQuery
} = offerApi;