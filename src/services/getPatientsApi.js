import { createApi } from '@reduxjs/toolkit/query/react';
import { getAllPatientsBaseQuery } from './functions';


export const getPatientsApi = createApi({
    reducerPath: 'getPatientsApi',
    baseQuery: getAllPatientsBaseQuery(),
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: () => ({
                url: '/api/patients',
                method: 'GET',
            })
        }),
    }),
});

export const { useGetPatientsQuery } = getPatientsApi;
/*endpoint getPatients est defini en utilisant la methode query() du builder , cela
signifie que cet endpoint effectue une requte de type GET */