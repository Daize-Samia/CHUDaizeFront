import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    observation: null,
    data: null
};
export const observationSlice = createSlice({
    name: "observation",
    initialState,
    reducers: {
        add: (state, action) => {
            state.observation = action.payload.observation;
        },
       
    },
});


export const {
    add,
  
} = observationSlice.actions;

export const selectObservationAndToken = (state) => ({
    observation: state.observation.observation,
    data: state.data
});

export default observationSlice.reducer;

