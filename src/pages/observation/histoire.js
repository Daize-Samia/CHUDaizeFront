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
    Typography,
    FormGroup,
    
    Checkbox

    
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

const Histoire=() =>{
    
    return(
        <>
        <Formik
                initialValues={{
                    ageAppSym: '',
                    dyspnee: '',
                    sueursALeffort: '',
                    cyanose     : '',
                    malaise : '',
                    diffalimentaire: '',
                    stagnationponderale: '',
                    syncope    : '',
                    palpitation           :'',
                    signesrespiratoires    :'',
                    autres :'',
                    poids :'',
                    taille :'',
                    pc :'',
                    temperature           :'',
                    ta:'',
                    fc:'',
                    fr:'',
                    alaireambiante    :'',
                    souso2:'',
                    dysmorphie :'',
                    optionDysmorphie :'',
                    sInsufCard :[],
                    souffle :'',
                    pouls_peripherique_percues:'',
                    optionPPP :'',
                    eclat_B2 :'',
                    bruit_galop:'',
                    optionBruit :'',
                    hippocratisme_digital :'',
                    deformation_thoracique  :'',
                    resteexamenclinique :'',
                    optionREC :'',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    ageAppSym: Yup.string().max(255).required('champ requis'),
                    dyspnee: Yup.string().max(255).required('champ requis'),
                    sueursALeffort: Yup.string().max(255).required('champ requis'),
                    cyanose: Yup.string().max(255).required('champ requis'),
                    malaise: Yup.string().max(255).required('champ requis'),
                    diffalimentaire :Yup.string().max(255).required('champ requis'),
                    stagnationponderale :Yup.string().max(255).required('champ requis'),
                    syncope :Yup.string().max(255).required('champ requis'),
                    palpitation :Yup.string().max(255).required('champ requis'),
                    signesrespiratoires :Yup.string().max(255).required('champ requis'),
                    autres :Yup.string().max(255).required('champ requis'),
                    poids :Yup.number().required('champ requis'),
                    taille:Yup.number().required('champ requis'),
                    pc :Yup.number().required('champ requis'),
                    temperature:Yup.number().required('champ requis'), 
                    ta :Yup.number().required('champ requis'),
                    fr :Yup.number().required('champ requis'),
                    fc :Yup.number().required('champ requis'),
                    alaireambiante :Yup.number().required('champ requis'),
                    souso2: Yup.number().required('champ requis'),
                    dysmorphie:Yup.string().max(255).required('champ requis'),
                    optionDysmorphie :Yup.string().when('dysmorphie',{
                        is: 'oui',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),
                    sInsufCard:Yup.string().max(255).required('champ requis'),
                    souffle:Yup.string().max(255).required('champ requis'),
                    pouls_peripherique_percues : Yup.string().max(255).required('champ requis'),
                    optionPPP : Yup.string().when('pouls_peripherique_percues',{
                        is: 'oui',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),
                    eclat_B2:Yup.string().max(255).required('champ requis'),
                    bruit_galop:Yup.string().max(255).required('champ requis'),
                    optionBruit : Yup.string().when('bruit_galop',{
                        is: 'oui',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),
                    hippocratismedigital:Yup.string().max(255).required('champ requis'),
                    déformationthoracique:Yup.string().max(255).required('champ requis'),
                    resteexamenclinique:Yup.string().max(255).required('champ requis'),
                    optionREC : Yup.string().when('resteexamenclinique',{
                        is: 'normal',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),

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

                            <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="ageAppSym">âge d’apparition des symptômes :</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.ageAppSym && errors.ageAppSym)}
                                            id="ageAppSym"
                                            type="ageAppSym"
                                            value={values.ageAppSym}
                                            name="ageAppSym"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="ageAppSym"
                                            inputProps={{}}
                                        />
                                        {touched.ageAppSym && errors.ageAppSym && (
                                            <FormHelperText error id="helper-text-ageAppSym">
                                                {errors.ageAppSym}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="dyspnee">Dyspnée  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="dyspnee"
                                        value= {values.dyspnee}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.dyspnee && errors.dyspnee && (
                                        <FormHelperText error id="helper-text-dyspnee">
                                            {errors.dyspnee}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="sueursALeffort">Sueurs à l'effort   </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="sueursALeffort"
                                        value= {values.sueursALeffort}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.sueursALeffort && errors.sueursALeffort && (
                                        <FormHelperText error id="helper-text-sueursALeffort">
                                            {errors.sueursALeffort}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cyanose"> cyanose </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="cyanose"
                                        value= {values.cyanose     }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.cyanose && errors.cyanose && (
                                        <FormHelperText error id="helper-text-cyanose ">
                                            {errors.cyanose}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="malaise"> Malaise </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="malaise"
                                        value= {values.malaise     }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.malaise && errors.malaise && (
                                        <FormHelperText error id="helper-text-malaise ">
                                            {errors.malaise}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            
                            
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor=""> Difficulté alimentaire </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="diffalimentaire"
                                        value= {values.diffalimentaire }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.diffalimentaire && errors.diffalimentaire && (
                                        <FormHelperText error id="helper-text-diffalimentaire ">
                                            {errors.diffalimentaire}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor=""> Stagnation pondérale </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="stagnationponderale"
                                        value= {values.stagnationponderale }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.stagnationponderale && errors.stagnationponderale && (
                                        <FormHelperText error id="helper-text-stagnationponderale ">
                                            {errors.stagnationponderale}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor=""> Syncope  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="syncope"
                                        value= {values.syncope }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.syncope && errors.syncope && (
                                        <FormHelperText error id="helper-text-syncope ">
                                            {errors.syncope}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor=""> Palpitation    </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="palpitation"
                                        value= {values.palpitation }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.palpitation && errors.palpitation && (
                                        <FormHelperText error id="helper-text-palpitation ">
                                            {errors.palpitation}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="signesrespiratoires"> Signes respiratoires    </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="signesrespiratoires"
                                        value= {values.signesrespiratoires }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.signesrespiratoires && errors.signesrespiratoires && (
                                        <FormHelperText error id="helper-text-signesrespiratoires ">
                                            {errors.signesrespiratoires}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            

                            <Grid item xs={12} >
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="autres">Autres :</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.autres && errors.autres)}
                                            id="autres"
                                            type="autres"
                                            value={values.autres}
                                            name="autres"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Autres"
                                            inputProps={{}}
                                        />
                                        {touched.autres && errors.autres && (
                                            <FormHelperText error id="helper-text-autres">
                                                {errors.autres}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="examenclinique" style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>EXAMEN CLINIQUE :</InputLabel>
                                        <InputLabel htmlFor="general" style={{ color: 'green', fontSize: '15px', fontWeight: 'italic' }}> ¤ General :</InputLabel>
                            

                                             <div style={{ display: 'flex' }}>
                                             <div style={{ flex: 1, marginRight: '1rem' }}>
                                                <InputLabel htmlFor="poids">Poids</InputLabel>
                                                 
                                                
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.poids && errors.poids)}
                                                        id="poids"
                                                        type="poids"
                                                        value={values.poids}
                                                        name="poids"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="poids"
                                                        inputProps={{}}
                                                    />
                                                    {touched.poids && errors.poids && (
                                                        <FormHelperText error id="helper-text-poids">
                                                            {errors.poids}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="taille">Taille</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.taille && errors.taille)}
                                                        id="taille"
                                                        type="taille"
                                                        value={values.taille}
                                                        name="taille"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="taille"
                                                        inputProps={{}}
                                                    />
                                                    {touched.taille && errors.taille && (
                                                        <FormHelperText error id="helper-text-taille">
                                                            {errors.taille}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="pc">PC :</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.pc && errors.pc)}
                                                        id="pc"
                                                        type="pc"
                                                        value={values.pc}
                                                        name="pc"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="pc"
                                                        inputProps={{}}
                                                    />
                                                    {touched.pc && errors.pc && (
                                                        <FormHelperText error id="helper-text-pc">
                                                            {errors.pc}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    </div>
                                                    </Stack>
                                                    </Grid>
                                            <Grid item xs={12}  >
                                                         <Stack spacing={1}>

                                                    <div style={{ display: 'flex' }}>
                                             <div style={{ flex: 1, marginRight: '1rem' }}>
                                                <InputLabel htmlFor="poids">Temperature</InputLabel>
                                                 
                                                
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.temperature && errors.temperature)}
                                                        id="tempertaure"
                                                        type="temperature"
                                                        value={values.temperature}
                                                        name="temperature"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="temperature"
                                                        inputProps={{}}
                                                    />
                                                    {touched.temperature && errors.temperature && (
                                                        <FormHelperText error id="helper-text-temperature">
                                                            {errors.temperature}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="ta">TA</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.ta && errors.ta)}
                                                        id="ta"
                                                        type="ta"
                                                        value={values.ta}
                                                        name="ta"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="ta"
                                                        inputProps={{}}
                                                    />
                                                    {touched.ta && errors.ta && (
                                                        <FormHelperText error id="helper-text-ta">
                                                            {errors.ta}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="fc">FC:</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.fc && errors.fc)}
                                                        id="fc"
                                                        type="fc"
                                                        value={values.fc}
                                                        name="fc"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="fc"
                                                        inputProps={{}}
                                                    />
                                                    {touched.fc && errors.fc && (
                                                        <FormHelperText error id="helper-text-fc">
                                                            {errors.fc}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="fr">FR:</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.fr && errors.fr)}
                                                        id="fr"
                                                        type="fr"
                                                        value={values.fr}
                                                        name="fr"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="fr"
                                                        inputProps={{}}
                                                    />
                                                    {touched.fr && errors.fr && (
                                                        <FormHelperText error id="helper-text-fr">
                                                            {errors.fr}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    </div>
                                                    </Stack>
                                                    </Grid>
                                                    <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="sao2">SAO2</InputLabel>
                                    <div style={{ display: 'flex' }}>
                                             <div style={{ flex: 1, marginRight: '1rem' }}>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.alaireambiante && errors.alaireambiante)}
                                                        id="alaireambiante"
                                                        type="alaireambiante"
                                                        value={values.alaireambiante}
                                                        name="alaireambiante"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="A l'aire ambiante"
                                                        inputProps={{}}
                                                    />
                                                    {touched.alaireambiante && errors.alaireambiante && (
                                                        <FormHelperText error id="helper-text-alaireambiante">
                                                            {errors.alaireambiante}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                    
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.souso2 && errors.souso2)}
                                                        id="souso2"
                                                        type="souso2"
                                                        value={values.souso2}
                                                        name="souso2"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Sous O2"
                                                        inputProps={{}}
                                                    />
                                                    {touched.souso2 && errors.souso2 && (
                                                        <FormHelperText error id="helper-text-souso2">
                                                            {errors.souso2}
                                                        </FormHelperText>
                                                    )}
                                                    </div>
                                                    </div>
                                                    </Stack>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="dysmorphie">Dysmorphie :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="dysmorphie"
                                        value= {values.dysmorphie}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        <FormControlLabel value="oui" control={<Radio />} label="oui " />
                                    </RadioGroup>
                                   {values.dysmorphie === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionDysmorphie"
                                                value={values.optionDysmorphie}
                                                name="optionDysmorphie"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Trisomie21 - Trisomie18 ou Autres"
                                                fullWidth
                                        error={Boolean(touched.optionDysmorphie && errors.optionDysmorphie)}
                                    />
                                        ) : null}
                                        
                                    {touched.dysmorphie && errors.dysmorphie && (
                                        <FormHelperText error id="helper-text-dysmorphie">
                                            {errors.dysmorphie}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                                    <InputLabel htmlFor="general" style={{ color: 'green', fontSize: '15px', fontWeight: 'italic' }}> ¤ Examen Cardiovasculaire :</InputLabel>
                                     <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="serologie">Signes d’insuffisance cardiaque : </InputLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                name="sInsufCard"
                                                checked={values.sInsufCard.includes('Tachycardie')}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="Tachycardie"
                                            />
                                            }
                                            label="Tachycardie"
                                        />
                                        <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        name="sInsufCard"
                                                        checked={values.sInsufCard.includes('Hépatomégalie')}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value="Hépatomégalie"
                                                    />
                                                    }
                                                    label="Hépatomégalie"
                                                />
                                                <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            name="sInsufCard"
                                                            checked={values.sInsufCard.includes('OMI')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="OMI"
                                                        />
                                                        }
                                                        label="OMI"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            name="sInsufCard"
                                                            checked={values.sInsufCard.includes('RHJ')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="RHJ"
                                                        />
                                                        }
                                                        label="RHJ"
                                                    />
                                        </FormGroup>
                                    {touched.sInsufCard && errors.sInsufCard && (
                                        <FormHelperText error id="helper-text-sInsufCard">
                                            {errors.sInsufCard}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid> 

                                    <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="pouls_peripherique_percues">pouls_peripherique_percues :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="pouls_peripherique_percues"
                                        value= {values.pouls_peripherique_percues}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                       
                                        <FormControlLabel value="oui" control={<Radio />} label="oui " />
                                        <FormControlLabel value="peu" control={<Radio />} label="peu " />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                    </RadioGroup>
                                   {values.pouls_peripherique_percues === "non" ? (
                                           <OutlinedInput
                                       
                                                type="optionPPP"
                                                value={values.optionPPP}
                                                name="optionPPP"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder=""
                                                fullWidth
                                        error={Boolean(touched.optionPPP && errors.optionPPP)}
                                    />
                                        ) : null}
                                        
                                    {touched.pouls_peripherique_percues && errors.pouls_peripherique_percues && (
                                        <FormHelperText error id="helper-text-pouls_peripherique_percues">
                                            {errors.pouls_peripherique_percues}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="souffle">souffle : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="souffle"
                                        value= {values.souffle}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {touched.souffle && errors.souffle && (
                                        <FormHelperText error id="helper-text-souffle">
                                            {errors.souffle}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="eclat_B2">Eclat de B2 : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="eclat_B2"
                                        value= {values.eclat_B2}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                    {touched.eclat_B2 && errors.eclat_B2 && (
                                        <FormHelperText error id="helper-text-eclat_B2">
                                            {errors.eclat_B2}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="bruit_galop">Bruit de galop: </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="bruit_galop"
                                        value= {values.bruit_galop}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.bruit_galop === "non" ? (
                                           <OutlinedInput
                                       
                                                type="optionBruit"
                                                value={values.optionBruit}
                                                name="optionBruit"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Autres"
                                                fullWidth
                                        error={Boolean(touched.optionBruit && errors.optionBruit)}
                                    />
                                        ) : null}
                                    
                                    {touched.bruit_galop && errors.bruit_galop && (
                                        <FormHelperText error id="helper-text-bruit_galop">
                                            {errors.bruit_galop}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="hippocratismedigital">  Hippocratisme digital  : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="hippocratismedigital"
                                        value= {values.hippocratismedigital}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {touched.hippocratismedigital && errors.hippocratismedigital && (
                                        <FormHelperText error id="helper-text-hippocratismedigital">
                                            {errors.hippocratismedigital}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="déformationthoracique"> Déformation thoracique :  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="déformationthoracique"
                                        value= {values.déformationthoracique}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {touched.déformationthoracique && errors.déformationthoracique && (
                                        <FormHelperText error id="helper-text-déformationthoracique">
                                            {errors.déformationthoracique}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="resteexamenclinique" style={{ color: 'green', fontSize: '15px', fontWeight: 'italic' }}> ¤ Le reste de l'examen clinique :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="resteexamenclinique"
                                        value= {values.resteexamenclinique}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="normal" control={<Radio />} label="normal" />
                                        <FormControlLabel value="pathologique" control={<Radio />} label="pathologique" />
                                        
                                    </RadioGroup>
                                    {values.resteexamenclinique === "pathologique" ? (
                                           <OutlinedInput
                                       
                                                type="optionREC"
                                                value={values.optionREC}
                                                name="optionREC"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder=""
                                                fullWidth
                                        error={Boolean(touched.optionREC && errors.optionREC)}
                                    />
                                        ) : null}

                                    
                                    {touched.resteexamenclinique && errors.resteexamenclinique && (
                                        <FormHelperText error id="helper-text-resteexamenclinique">
                                            {errors.resteexamenclinique}
                                        </FormHelperText>
                                    )}
                            
                                   
                                


                                    </Stack>
                                </Grid>

                               

                                

                        </Grid>
                        </form>
                 )}
                 </Formik>
                 </>
    ) }
export default Histoire;