import { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// material-ui
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

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { useAddPatientMutation } from 'services/addPatientApi';
import { add } from 'store/slices/patientSlice';
import { useNavigate } from 'react-router';

//inport functions to get categories and illnesses
import {getCategories, getIllnessesByCategory} from '../../services/functions';


// ============================|| Rendez Vous ||============================ //
const AddPatient = () => {
    

    return (
        <>
        <Box sx={{ 
    height: 80, 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Typography variant="h2" component="h2" sx={{ marginBottom: '10px', color: '#004999' }}>
        Ajouter Un Rendez Vous
      </Typography>
    </Box>
            <Formik
                initialValues={{
                    
                    prenom: '',
                    nom: '',                  
                    tele:'',
                    province:'1',
                    dateDeConsultation:'',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    
                    prenom: Yup.string().max(255).required('champ requis'),
                    nom: Yup.string().max(255).required('champ requis'),
                    
                    
                    tele: Yup.number().required('champ requis'),
                    dateDeConsultation: Yup.date().required('champ requis'),
    
                    
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    
                
                    
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={1} >
                            
                            <Grid item xs={12} >
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
                            <Grid item xs={12} >
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="nom-patient">Nom*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.nom && errors.nom)}
                                        id="nom-patient"
                                        type="nom"
                                        value={values.nom}
                                        name="nom"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Nom"
                                        inputProps={{}}
                                    />
                                    {touched.nom && errors.nom && (
                                        <FormHelperText error id="helper-text-nom-patient">
                                            {errors.nom}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="tele-patient">tél*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.tele && errors.tele)}
                                        id="tele-patient"
                                        type="tele"
                                        value={values.tele}
                                        name="tele"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="tél"
                                        inputProps={{}}
                                    />
                                    {touched.tele && errors.tele && (
                                        <FormHelperText error id="helper-text-tele-patient">
                                            {errors.tele}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="province-patient">Province*</InputLabel>
                                    <Select
                                        labelId="province"
                                        name="province"
                                        id="province"
                                        value={values.province}
                                        label="province"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={1}>Berkane</MenuItem>
                                        <MenuItem value={2}>Driouch</MenuItem>
                                        <MenuItem value={3}>Figuig</MenuItem>
                                        <MenuItem value={4}>Guercif</MenuItem>
                                        <MenuItem value={5}>Jerada</MenuItem>
                                        <MenuItem value={6}>Nador</MenuItem>
                                        <MenuItem value={7}>Oujda-Angad</MenuItem>
                                        <MenuItem value={8}>Taourirt</MenuItem>
                                    </Select>
                                    {touched.province && errors.province && (
                                        <FormHelperText error id="helper-text-province-patient">
                                            {errors.province}
                                        </FormHelperText>
                                    )}
                                </Stack>

                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="dateDeConsultation-patient">Date de Consultation*</InputLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    format="DD/MM/YYYY"
                                    error={Boolean(touched.dateDeConsultation && errors.dateDeConsultation)}
                                        id="dateDeConsultation-patient"
                                        
                                        value={values.dateDeConsultation}
                                        name="dateDeConsultation"
                                        onBlur={handleBlur}
                                        onChange={(newValue) => {
                                            
                                            const year = newValue.$d.getFullYear();
                                            const month = String(newValue.$d.getMonth() + 1).padStart(2, '0');
                                            const day = String(newValue.$d.getDate()).padStart(2, '0');
                                            const formattedDate = `${year}-${month}-${day}`;

                                            console.log(formattedDate)
                                            handleChange('dateDeConsultation')(formattedDate);
                                        }}
                                        placeholder="date De Consultation"
                                        inputProps={{}} />
                                    </LocalizationProvider>
                                    {touched.dateDeConsultation && errors.dateDeConsultation && (
                                        <FormHelperText error id="helper-text-dateDeConsultation-patient">
                                            {errors.dateDeConsultation}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            
                            <Grid item xs={12} spacing={8} >
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Enregistrer
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>

                    
                )}
            </Formik>
        </>
    );
};

export default AddPatient;
