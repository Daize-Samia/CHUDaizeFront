// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import { signInApi } from 'services/signingApi';
import authSlice from 'store/slices/authSlice';
import patientSlice from 'store/slices/patientSlice';
import { addPatientApi } from 'services/addPatientApi';
import { signUpApi } from 'services/signupApi';
import { getPatientsApi } from 'services/getPatientsApi';
import { observationApi } from 'services/ObservationApi';
import { modifyPatientApi } from 'services/modifyPatientApi' ;
import { getPatientByIdApi } from 'services/getPatientByIdApi';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    menu,
    auth: authSlice,
    patient: patientSlice,
    [signInApi.reducerPath]: signInApi.reducer,
    [addPatientApi.reducerPath]: addPatientApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [getPatientsApi.reducerPath]: getPatientsApi.reducer,

    [observationApi.reducerPath]: observationApi.reducer,

    [modifyPatientApi.reducerPath]: modifyPatientApi.reducer,
    [getPatientByIdApi.reducerPath]: getPatientByIdApi.reducer,

});

export default reducers;
