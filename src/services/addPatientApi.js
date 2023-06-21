import { createApi } from '@reduxjs/toolkit/query/react';
import { addPatientBaseQuery } from './functions';


export const addPatientApi = createApi({
    reducerPath: 'addPatientApi',
    baseQuery: addPatientBaseQuery(),
    endpoints: (builder) => ({
        addPatient: builder.mutation({
            query: ({ body }) => ({
                url: '/api/patients',
                method: 'POST',
                body,
            })
        }),
    }),
});

export const {useAddPatientMutation} = addPatientApi;