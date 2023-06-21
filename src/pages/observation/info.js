import React, { useState , useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useLocation } from 'react-router-dom';
//project import 
import {useAddObservationMutation} from 'services/ObservationApi';
import {add} from 'store/slices/observationSlice';
import { dispatch } from 'store';
import { useNavigate } from 'react-router';
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
//third party 
import * as Yup from 'yup';
import { Formik } from 'formik';
// project import
import AnimateButton from 'components/@extended/AnimateButton';

const Info =()=>{
    const location = useLocation();
    const state = location.state || {};
    const patient = state;
    
    const [addObservationMutation,{isSuccess,isLoading,isError,error , data}] = useAddObservationMutation();
   
    const navigateInfo = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(add(data))
            navigateInfo('/', { state: data });
        }
    }, [isSuccess, data])

  

 
    return(
        <>
         <Formik
                initialValues={{
                    iP: patient["iP"],
                    prenom: patient["prenom"],
                    nom: patient["nom"],
                    dateNaissance: '',
                    adresse: '',
                    agemere: '',
                    grossesse: '',
                    parite :'',
                    agepere:'',
                    nombreFratrie :'',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    iP :Yup.number().required('champ requis'),
                    prenom: Yup.string().max(255).required('champ requis'),
                    nom: Yup.string().max(255).required('champ requis'),
                    dateNaissance: Yup.date().required('champ requis'),
                    adresse: Yup.string().max(255).required('champ requis'),
                    agemere: Yup.string().max(255).required('champ requis'),
                    grosesse: Yup.string().max(255).required('champ requis'),
                    parite:Yup.number().required('champ requis'),
                    agepere :Yup.string().max(255).required('champ requis'),
                    nombreFratrie : Yup.number().required('champ requis'),

                   
    
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    
                    await addPatientMutation({body: values});
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
                                    <InputLabel htmlFor="iP">IP*</InputLabel>
                                    <OutlinedInput
                                        id="iP"
                                        type="iP"
                                        value={values.iP}
                                        name="iP"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="IP"
                                        fullWidth
                                        error={Boolean(touched.iP && errors.iP)}
                                    />
                                    {touched.iP && errors.iP && (
                                        <FormHelperText error id="helper-text-iP-patient">
                                            {errors.iP}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="nom">Nom*</InputLabel>
                                    <OutlinedInput
                                        id="nom"
                                        type="nom"
                                        value={values.nom}
                                        name="nom"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="nom"
                                        fullWidth
                                        error={Boolean(touched.nom && errors.nom)}
                                    />
                                    {touched.nom && errors.nom && (
                                        <FormHelperText error id="helper-text-nom-patient">
                                            {errors.nom}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="prenom-patient">Prénom*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.prenom && errors.prenom)}
                                        id="prenom-patient"
                                        type="prenom"
                                        value={values.prenom}
                                        name="prenom"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Prénom"
                                        inputProps={{}}
                                    />
                                    {touched.prenom && errors.prenom && (
                                        <FormHelperText error id="helper-text-prenom-patient">
                                            {errors.prenom}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                        <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="dateNaissance">Date de Naissance*</InputLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    format="DD/MM/YYYY"
                                    error={Boolean(touched.dateNaissance && errors.dateNaissance)}
                                        id="dateNaissance"
                                        
                                        value={values.dateNaissance}
                                        name="dateNaissance"
                                        disableFuture
                                        onBlur={handleBlur}
                                        onChange={(newValue) => {
                                            const year = newValue.$d.getFullYear();
                                            const month = String(newValue.$d.getMonth() + 1).padStart(2, '0');
                                            const day = String(newValue.$d.getDate()).padStart(2, '0');
                                            const formattedDate = `${year}-${month}-${day}`;
                                            
                                            console.log(formattedDate)
                                            handleChange('dateNaissance')(formattedDate);
                                        }}
                                        placeholder="dateNaissance"
                                        inputProps={{}} />
                                    </LocalizationProvider>
                                    {touched.dateNaissance && errors.dateNaissance && (
                                        <FormHelperText error id="helper-text-dateDeNaiss-patient">
                                            {errors.dateNaissance}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="adresse">Adresse*</InputLabel>
                                    <OutlinedInput
                                        id="adresse"
                                        type="adresse"
                                        value={values.adresse}
                                        name="adresse"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Adresse"
                                        fullWidth
                                        error={Boolean(touched.adresse && errors.adresse)}
                                    />
                                    {touched.adresse && errors.adresse && (
                                        <FormHelperText error id="helper-text-adresse-patient">
                                            {errors.adresse}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="agemere">Age de Mere*</InputLabel>
                                    <OutlinedInput
                                        id="agemere"
                                        type="agemere"
                                        value={values.ageMere}
                                        name="agemere"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="age de Mere"
                                        fullWidth
                                        error={Boolean(touched.agemere && errors.agemere)}
                                    />
                                    {touched.agemere && errors.agemere && (
                                        <FormHelperText error id="helper-text-agemere-patient">
                                            {errors.agemere}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="agepere">Age de Pere*</InputLabel>
                                    <OutlinedInput
                                        id="agepere"
                                        type="agepere"
                                        value={values.agepere}
                                        name="agepere"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="age de Pere"
                                        fullWidth
                                        error={Boolean(touched.agepere && errors.agepere)}
                                    />
                                    {touched.agepere && errors.agepere && (
                                        <FormHelperText error id="helper-text-agepere-patient">
                                            {errors.agepere}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="parite">Parite*</InputLabel>
                                    <OutlinedInput
                                        id="parite"
                                        type="ageMere"
                                        value={values.ageMere}
                                        name="ageMere"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Parite"
                                        fullWidth
                                        error={Boolean(touched.parite && errors.parite)}
                                    />
                                    {touched.parite && errors.parite && (
                                        <FormHelperText error id="helper-text-parite-patient">
                                            {errors.parite}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="parite">Grossesse*</InputLabel>
                                    <OutlinedInput
                                        id="grossesse"
                                        type="grossesse"
                                        value={values.grossesse}
                                        name="grossesse"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Grossesse"
                                        fullWidth
                                        error={Boolean(touched.grossesse && errors.grossesse)}
                                    />
                                    {touched.grossesse && errors.grossesse && (
                                        <FormHelperText error id="helper-text-grossesse-patient">
                                            {errors.grossesse}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="nombreFratrie">Nombre de Fratrie*</InputLabel>
                                    <OutlinedInput
                                        id="nombreFratrie"
                                        type="nombreFratrie"
                                        value={values.nombreFratrie}
                                        name="nombreFratrie"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Grossesse"
                                        fullWidth
                                        error={Boolean(touched.nombreFratrie && errors.nombreFratrie)}
                                    />
                                    {touched.nombreFratrie && errors.nombreFratrie && (
                                        <FormHelperText error id="helper-text-nombreFratrie-patient">
                                            {errors.nombreFratrie}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            
                            </Grid>
                            </form>
                 )}
                 </Formik>

       
                   
        </>
    )
    }
    export default Info;