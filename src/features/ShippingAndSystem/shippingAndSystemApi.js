// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const systemAndShippingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({ 
        addSingleSystem: builder.mutation({
            query: (product)=> ({
                url: '/system',
                method: "POST",
                body: product
            })
        }),
        getSingleUserPriceCalculator: builder.query({
            query: (userId) => ({
                url: `/system/${userId}`
            }),
            providesTags: () => [{type: 'calculateSystemSingleUser'}]
        }),
        getSingleSystemInformation: builder.query({
            query: () => ({
                url: `/system`
            })
        })
    })
});
export const { 
    useAddSingleSystemMutation,
    useGetSingleUserPriceCalculatorQuery,
    useGetSingleSystemInformationQuery
} = systemAndShippingApi;