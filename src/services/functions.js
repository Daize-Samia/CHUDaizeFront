import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/const';

import data from '../utils/maladies.json';




export const buildBaseQuery = () => fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        headers.set('content-type', 'application/json');
        const token = getState()?.auth?.accessToken;
        if (token && !headers.get('authorization')) {
            headers.set('authorization', token);
        }

        return headers;
    },
});


export const addPatientBaseQuery = () => fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        headers.set('content-type', 'application/json');
        const response = getState()?.patient;
        if(response){
            console.log(response);
        }
        return headers;
    },
});
export const addObservationBaseQuery = () => fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        headers.set('content-type', 'application/json');
        const response = getState()?.observation;
        if(response){
            console.log(response);
        }
        return headers;
    },
});

export const getAllPatientsBaseQuery = () => fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        headers.set('content-type', 'application/json');
        const response = getState()?.data;
        if(response){
            console.log(response);
        }
        return headers;
    },
});



// Modifier un patients 

export const putPatientBaseQuery = () => fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
        headers.set('content-type','application/json');
        const response =  getState = getState()?.patient;
        if(response){
            console.log(response);
        }
        return headers ;
    },
    preparedBody: (body, {method }) => {
        if(method === 'PUT') {
            return JSON.stringify(body);
        }
        return body;
    },    
});


export const getPatientByIp = (patients, iP) => {
    let filtered = [];
    filtered = patients.filter((patient) => (patient["iP"] === iP));
    if(filtered){
        console.log(filtered[0]);
        return filtered[0];
    }
    else{
        return  null;
    }
    

}

export const getIllnessesByCategory = (name) => {
    const obj = Object.values(data).find(obj => obj.name === name);
    return obj ? obj.maladies : [];
}

export const getCategories = () => {
    let categories = [];
    Object.values(data).forEach(obj => {
        categories = categories.concat(obj);
    });
    return categories;
}

export const getDiagnosticsSeries = (patients) => {

    let diagnosticsSeries = [];
    let filtered = [];
    const categories = getCategories();
    categories.map((category)=> {
        filtered = patients["hydra:member"].filter((value) => value["categorie"] === category["name"]);
        diagnosticsSeries.push(filtered.length);
    });

    return diagnosticsSeries;

}

export const getProvinceSeries = (patients)=> {
    const provices = ["Berkane", "Driouch", "Figuig", "Guercif", "Jerada", "Nador", "Oujda-Angad","Taourirt"];
    let provinceSeries = []
    let filtered = [];
    provices.map((province) => {
        filtered = patients["hydra:member"].filter((value) => value["province"] === province);
        provinceSeries.push(filtered.length);
    });

    return provinceSeries;

}

export const getSexeSeries = (patients) => {

    let months=[1,2,3,4,5,6];
    let femaleSerise = [];
    let maleSeries = [];
    let filteredMale = [];
    let filteredFemale = [];

    months.map((month) => {
        filteredMale = patients["hydra:member"].filter((value) => {
            return ((value["sex"] === 'male') && ((new Date(value["dateDeConsultation"])).getMonth() + 1) === month);
        });
        filteredFemale = patients["hydra:member"].filter((value) => {
            return ((value["sex"] === 'female') && ((new Date(value["dateDeConsultation"])).getMonth() + 1) === month);
        });
        maleSeries.push(filteredMale.length);
        femaleSerise.push(filteredFemale.length);
    });

    return {
        male: maleSeries,
        female: femaleSerise
    }
} 
