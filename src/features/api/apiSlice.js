import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import { userLOggedOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:10000/api/v1',
    prepareHeaders: async (headers, {getState}) => {
        const token = getState()?.auth?.auth?.token;
        if(token){
            // headers.set('authorization', `Bearer___---___${token}`)
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
}); 
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        
        let result = await baseQuery(args, api, extraOptions);
        if(result?.error?.status === 401){
            api.dispatch(userLOggedOut());
            localStorage.removeItem('auth');
            window.location.assign('/login')
        };
        return result; 
    },
    tagTypes: [],
    endpoints: (builder) => ({})
})