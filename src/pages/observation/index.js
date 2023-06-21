import React, { useState , useEffect } from 'react';
import {toast , ToastContainer} from 'react-toastify';

import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    TextField,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    
} from '@mui/material';
import Info from './info';
import Antecedant from './antecedant';
import Histoire from './histoire';
import Motif from './Motif';
import Exemen from './exemen';
import { useAddObservationMutation } from 'services/ObservationApi';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';

const steps = ['Inforamtions générales', 'ANTECEDANTS','MOTIF D’HOSPITALISATION/CONSULTATION' , 'HISTOIRE DE LA MALADIE ','EXAMEN COMPLEMENTAIRES  '];

const Observation = () => {
    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate();
    
    const Soumisssion = () => {
        if (activeStep === steps.length - 1) {
          
          toast.success('Formulaire soumis avec succès !', {
            onClose: () => {
              navigate('/patient');
            }
          });
        } else {
          // Passer à l'étape suivante
          handleNext();
        }
    }
    
    const handleNext = () => {


        // Passer à l'étape suivante
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {


        setActiveStep(activeStep - 1);
    };

    

    return (
    <>
        <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Typography variant="h3" align="center" style={{ padding: '16px' }} gutterBottom>
                {steps[activeStep]}
            </Typography>
        
        <Formik
        initialValues = {{
            submit : null
        }}

        >

            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit} >
                {activeStep === 0 && (
                    <div>
                        <Info/>
                         </div>
                )}
                {activeStep === 1 && (
                    <div>
                       <Antecedant/> 
                        
                    </div>
                )}
                {activeStep === 2 && (
                    <div>
                      <Motif/>
                    </div>
                )}
                {activeStep === 3 && (
                    <div>
                      <Histoire/> 
                    </div>
                )}
                {activeStep === 4 && (
                    <div>
                      <Exemen/> 
                    </div>
                )}
              <ToastContainer/>
                <div>
                    {activeStep === 0 ? <Button disabled>Back</Button> : <Button onClick={handleBack}>Back</Button>}
                    <Button type ="submit" variant="contained" color="primary" onClick={Soumisssion}   >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </form>
            )}
            </Formik>
            </>
        
    );
};

export default Observation;