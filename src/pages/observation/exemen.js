import React, { useState } from 'react';
import {
    Box,
    FormControlLabel,
    Radio,
    RadioGroup,
    Select,
    MenuItem,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
    
} from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';




const Exemen =() =>{
    

    return(
        <>
        <Formik
                initialValues={{
                    ECG: '',
                    RadioThoracique: '',
                    EchographieCardiaque: '',
                    CAT: '',
        
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    ECG: Yup.string().max(255).required('champ requis'),
                    RadioThoracique: Yup.string().max(255).required('champ requis'),
                    EchographieCardiaque: Yup.string().max(255).required('champ requis'),
                    CAT: Yup.string().max(255).required('champ requis'),
                   
    
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    
                
                    try {
                        
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                    
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={1} >
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="ECG">ECG*</InputLabel>
                                    <OutlinedInput
                                        id="ECG"
                                        type="ECG"
                                        value={values.ECG}
                                        name="ECG"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="ECG"
                                        fullWidth
                                        error={Boolean(touched.ECG && errors.ECG)}
                                    />
                                    {touched.ECG && errors.ECG && (
                                        <FormHelperText error id="helper-text-ECG-patient">
                                            {errors.ECG}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="RadioThoracique">Radio Thoracique*</InputLabel>
                                    <OutlinedInput
                                        id="RadioThoracique"
                                        type="RadioThoracique"
                                        value={values.RadioThoracique}
                                        name="RadioThoracique"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Radio Thoracique"
                                        fullWidth
                                        error={Boolean(touched.RadioThoracique && errors.RadioThoracique)}
                                    />
                                    {touched.RadioThoracique && errors.RadioThoracique && (
                                        <FormHelperText error id="helper-text-RadioThoracique-patient">
                                            {errors.RadioThoracique}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="EchographieCardiaque">Echographie Cardiaque*</InputLabel>
                                    <OutlinedInput
                                        id="EchographieCardiaque"
                                        type="EchographieCardiaque"
                                        value={values.EchographieCardiaque}
                                        name="EchographieCardiaque"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Echographie Cardiaque"
                                        fullWidth
                                        error={Boolean(touched.EchographieCardiaque && errors.EchographieCardiaque)}
                                    />
                                    {touched.EchographieCardiaque && errors.EchographieCardiaque && (
                                        <FormHelperText error id="helper-text-EchographieCardiaque-patient">
                                            {errors.EchographieCardiaque}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="CAT">CAT*</InputLabel>
                                    <OutlinedInput
                                        id="CAT"
                                        type="CAT"
                                        value={values.CAT}
                                        name="CAT"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="CAT"
                                        fullWidth
                                        error={Boolean(touched.CAT && errors.CAT)}
                                    />
                                    {touched.CAT && errors.CAT && (
                                        <FormHelperText error id="helper-text-CAT-patient">
                                            {errors.CAT}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            </Grid>
                            </form>
                )}
                        </Formik>
                           
        </>
    )
}

export default Exemen;