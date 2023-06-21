import { createApi } from '@reduxjs/toolkit/query/react';
import { putPatientBaseQuery } from './functions';

export const modifyPatientApi = createApi({
    reducerPath: 'addPatientApi',
    baseQuery: putPatientBaseQuery(),
    endpoints: (builder) => ({
        modifyPatient: builder.mutation({
            query: ({ body , id}) => ({
                url: `/api/patients/${id}`, 
                method: 'PUT', 
                body,
            })
        }),
    }),
});

export const { useModifyPatientMutation } = modifyPatientApi;

