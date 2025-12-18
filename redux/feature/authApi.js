import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.252.13.92:8052',
    }),
    endpoints: (builder) => ({
        // REGISTER
        register: builder.mutation({
            query: (formData) => ({
                url: '/user/register',
                method: 'POST',
                body: formData, 
                
            }),
        }),

        // VERIFY EMAIL
        verifyEmail: builder.mutation({
            query: ({ email, code }) => ({
                url: '/user/verify-email',
                method: 'POST',
                body: { email, code },
            }),
        }),

        // LOGIN
        login: builder.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body: JSON.stringify(body), 
                headers: { 'Content-Type': 'application/json' },
            }),
        }),

    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useVerifyEmailMutation,
} = authApi;
