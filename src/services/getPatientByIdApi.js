import { createApi } from '@reduxjs/toolkit/query/react';
import { getAllPatientsBaseQuery } from './functions';
import { addPatientBaseQuery } from './functions';


export const getPatientByIdApi = createApi({
    reducerPath: 'getPatientsApi',
    baseQuery: addPatientBaseQuery(),
    endpoints: (builder) => ({
        getPatient: builder.query({
            query: (id) => ({
                url: `/api/patients/${id}`,
                method: 'GET',
            })
        }),
    }),
});

export const { useGetPatientQuery } = getPatientByIdApi;