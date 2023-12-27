// http://localhost:10000/api/v1/products/p/Accessories/Cable?page=1&&peerPage=40

import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSingleProduct: builder.query({
            query: ({visible__url, product__id}) => `/products/${visible__url}/${product__id}`,
            providesTags: () => [{type: 'get__single__product__by__visible__url__and__product__id'}]
        }),
        getSingleProductById: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: () => [{type: 'get__single__product__by__product__id'}]
        }),
        addSingleProduct: builder.mutation({
            query: (product)=> ({
                url: '/products',
                method: "POST",
                body: product
            })
        }),
        updateSingleProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.ID}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: () => [{type: 'get__single__product__by__visible__url__and__product__id'}, {type: 'get__single__product__by__product__id'}]
        }),
        getSingleFilterProduct: builder.query({
            query: ({child, parent, parent__father}) => `/products/p/${parent__father}/${parent}/${child}?page=1&&peerPage=1`,
            providesTags: () => [{type:'get__filter__navbar__all__types'}]
        }),
        getSingleFilterNavbar: builder.query({
            query: ({child, parent, parent__father}) => `/filter-navbar/get-single-by-property-query?child=${child}&parent=${parent}&parent__father=${parent__father}`,
            providesTags: () => [{type: 'get__single__filter__navbar'}]
        }),
        updateSingleFilterNavbar: builder.mutation({
            query: (filterNavbar) => ({
                url: `/filter-navbar/${filterNavbar.ID}`,
                method: 'PUT',
                body: filterNavbar
            }),
            invalidatesTags: () => [{type: 'get__all__child__product'}, {type: 'get__filter__navbar__all__types'}, {type: 'get__single__filter__navbar'}]
        }),
        getUserSearchProduct: builder.query({
            query: ({searchString, page, limit}) => `/products/search/${searchString}?page=${page}&&peerPage=${limit}`
        })
    })
})


export const {
    useGetUserSearchProductQuery,
    useUpdateSingleFilterNavbarMutation,
    useGetSingleFilterNavbarQuery,
    useGetSingleFilterProductQuery,
    useUpdateSingleProductMutation,
    useAddSingleProductMutation,
    useGetSingleProductQuery,
    useGetSingleProductByIdQuery
} = productApi;