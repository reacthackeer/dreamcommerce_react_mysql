import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllShopByBrand: builder.query({
            query: () => `/shop-by-brand`
        })
    })
})

export const {
    useGetAllShopByBrandQuery
} = offerApi;