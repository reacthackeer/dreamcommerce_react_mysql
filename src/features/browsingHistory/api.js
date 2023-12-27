// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const browsingHistory = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addSingleBrowsingHistory: builder.mutation({
            query: (data) => ({
                url: '/browsing-history',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'my__browsing__history'}]
        }),
        getSingleUserBrowsingHistory: builder.query({
            query: ({user__id, page, limit}) => `/browsing-history/get-all/${user__id}?page=${page}&&peerPage=${limit}`,
            providesTags: () => [{type: 'my__browsing__history'}]
        })
    })
})

export const {     
    useAddSingleBrowsingHistoryMutation,
    useGetSingleUserBrowsingHistoryQuery
} = browsingHistory;