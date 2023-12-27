import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllShopByCategory: builder.query({
            query: () => `/shop-by-category`
        })
    })
})

export const {
    useGetAllShopByCategoryQuery
} = offerApi;