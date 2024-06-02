// http://localhost:10000/api/v1/products/p/Accessories/Cable?page=1&&peerPage=40

import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSingleProduct: builder.query({
            query: ({visible__url, product__id}) => `/products/${visible__url}/${product__id}`,
            providesTags: () => [{type: 'get__single__product__by__visible__url__and__product__id'},{type: 'invalid__for__crud'}]
        }),
        getSingleProductById: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: () => [{type: 'get__single__product__by__product__id'}, {type: 'invalid__for__crud'}]
        }),
        addSingleArrayProduct: builder.mutation({
            query: (product)=> ({
                url: '/products/add-array-product',
                method: "POST",
                body: product
            }),
            invalidatesTags: ()=> [{type: 'invalid__for__crud'}]
        }),
        addSingleProduct: builder.mutation({
            query: (product)=> ({
                url: '/products',
                method: "POST",
                body: product
            }),
            invalidatesTags: ()=> [{type: 'invalid__for__crud'}]
        }),
        updateSingleProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.ID}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: () => [{type: 'get__single__product__by__visible__url__and__product__id'}, {type: 'get__single__product__by__product__id'}, {type: 'invalid__for__crud'}]
        }),
        getSingleFilterProduct: builder.query({
            query: ({child, parent, parent__father}) => `/products/p/${parent__father}/${parent}/${child}?page=1&&peerPage=1`,
            providesTags: () => [{type:'get__filter__navbar__all__types'},{type: 'invalid__for__crud'}]
        }),
        getSingleFilterNavbar: builder.query({
            query: ({child, parent, parent__father}) => `/filter-navbar/get-single-by-property-query?child=${child.replace(/&/g,'anndd')}&parent=${parent.replace(/&/g,'anndd')}&parent__father=${parent__father.replace(/&/g,'anndd')}`,
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
            query: ({searchString, page, limit}) => `/products/search/${searchString}?page=${page}&&peerPage=${limit}`,
            providesTags: () => [{type: 'invalid__for__crud'}]
        }),
        getAllOfferProducts: builder.query({
            query: ({page, limit}) => `/offers?page=${page}&&peerPage=${limit}`,
            providesTags: () => [{type: 'invalid__for__crud'}]
        })
    })
})


export const {
    useAddSingleArrayProductMutation,
    useGetUserSearchProductQuery,
    useUpdateSingleFilterNavbarMutation,
    useGetSingleFilterNavbarQuery,
    useGetSingleFilterProductQuery,
    useUpdateSingleProductMutation,
    useAddSingleProductMutation,
    useGetSingleProductQuery,
    useGetSingleProductByIdQuery,
    useGetAllOfferProductsQuery
} = productApi;