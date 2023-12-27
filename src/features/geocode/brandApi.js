// http://localhost:10000/api/v1/brands 

import { apiSlice } from "../api/apiSlice";

export const geocodeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllDivisions: builder.query({
            query: () => `/geocode/divisions`, 
        }),
        getAllDistrict: builder.query({
            query: (id) => `/geocode/districts/${id}`
        }),
        getAllUpazillas: builder.query({
            query: (id) => `/geocode/upazilas/${id}`
        }),
        getAllUnions: builder.query({
            query: (id) => `/geocode/unions/${id}`
        })
    })
});
export const {
    useGetAllDivisionsQuery,
    useGetAllDistrictQuery,
    useGetAllUpazillasQuery,
    useGetAllUnionsQuery
} = geocodeApi;