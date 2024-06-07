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
        addSingleStoreInformation: builder.mutation({
            query: (product)=> ({
                url: '/store-information',
                method: "POST",
                body: product
            }),
            invalidatesTags: ()=> [{type: 'get-store-information'}]
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
        }),
        getSingleStoreInformation: builder.query({
            query: () => ({
                url: `/store-information`
            }),
            providesTags: ()=> [{type: 'get-store-information'}]
        }),
        getSingleContactUs: builder.query({
            query: () => ({
                url: `/contact-us`
            }),
            providesTags: ()=> [{type: 'get-contact-us'}]
        }),
        addSingleContactUs: builder.mutation({
            query: (product)=> ({
                url: '/contact-us',
                method: "POST",
                body: product
            }),
            invalidatesTags: ()=> [{type: 'get-contact-us'}]
        }), 
    })
});
export const { 
    useAddSingleStoreInformationMutation,
    useGetSingleStoreInformationQuery,
    useAddSingleSystemMutation,
    useGetSingleUserPriceCalculatorQuery,
    useGetSingleSystemInformationQuery,
    useGetSingleContactUsQuery,
    useAddSingleContactUsMutation
} = systemAndShippingApi;