import { createApi } from '@reduxjs/toolkit/query/react';
import {addObservationBaseQuery} from './functions';

export const observationApi = createApi({
    reducerPath :'observationApi',
    baseQuery : addObservationBaseQuery(),
    endpoints :(builder) =>({
        addObservation : builder.mutation({
            query :({body}) =>({
                url :'/api/observation',
                method :'POST',
                body,
            })
        }),
    }),
});

export const {useAddObservationMutation} = observationApi;