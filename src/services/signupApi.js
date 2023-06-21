import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from './functions';

export const signUpApi = createApi({
    reducerPath: 'signUpApi', // specifier le chemin du reducer
    baseQuery: buildBaseQuery(),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ body }) => ({
                url: '/api/users',
                method:'POST',
                body, //contient les données de la requete 
            
            })
        }),
    }),
});

export const {useRegisterMutation} = signUpApi;

/*ce code permet de creer une API avec un endpoint (register)
qui envoie une requete post a l'url /api/users  avec les données fournies dans le corps de la requete */

/*register est defini en utilisant la methode mutation , cela inque que cet endpoint effectue une mutation (geeralement une operation
    de creation ou de mise a jour)  */