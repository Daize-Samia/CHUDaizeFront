import React, { useState } from "react";
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
    Typography,
    TextField
    
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

function Motif() {
  

  return (
    <>
    <Formik
                initialValues={{
                    motif_hosp_consul : '',
                    submit: null
                }}

                validationSchema={Yup.object().shape({
                    motif_hosp_consul : Yup.string().required('champ requis'),
                   
    
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
                            <TextField
                                name="motif_hosp_consul "
                                label="Motif d'Hospitalisation/Consultation"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                value={values.motif}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.motif_hosp_consul  && Boolean(errors.motif_hosp_consul )}
                                helperText={touched.motif_hosp_consul  && errors.motif_hosp_consul }
            />
                               {touched.motif && errors.motif && (
                                        <FormHelperText error id="helper-text-motif_hosp_consul -patient">
                                            {errors.motif_hosp_consul }
                                        </FormHelperText>
                                    )}
                    </form>
               )}
               </Formik>
               </>
  )
               }
  export default Motif;
                    