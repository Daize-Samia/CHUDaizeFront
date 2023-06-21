// third-party
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// project import
import rootReducers from './reducers';
import { signInApi } from '../services/signingApi';
import { addPatientApi } from 'services/addPatientApi';
import { signUpApi } from 'services/signupApi';
import { getPatientsApi } from 'services/getPatientsApi';
import { observationApi } from 'services/ObservationApi';

import { modifyPatientApi } from 'services/modifyPatientApi';
import { getPatientByIdApi } from 'services/getPatientByIdApi';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            signInApi.middleware,
            addPatientApi.middleware,
            signUpApi.middleware,
            getPatientsApi.middleware,
            observationApi.middleware,
            modifyPatientApi.middleware,
            getPatientByIdApi.middleware,
        ]),
    devTools: true,

});

const { dispatch } = store;
let persistor = persistStore(store);

export { store, dispatch, persistor };
