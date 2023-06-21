import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from './functions';

export const signInApi = createApi({
    reducerPath: 'signInApi',
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ body }) => ({
                url: '/auth',
                method: 'POST',
                body,
            })
        }),
    }),
});

export const {useLoginMutation} = signInApi;
