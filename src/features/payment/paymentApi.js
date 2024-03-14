// http://localhost:10000/api/v1/products/p/Accessories/Cable?page=1&&peerPage=40

import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addInitiatePayment: builder.mutation({
            query: (body) => ({
                url: `/payment/init`,
                method: 'POST',
                body: body,  
                headers: {
                    'Content-Type': 'application/json',
                }
            }) 
        })
    })
})


export const { 
    useAddInitiatePaymentMutation
} = productApi;