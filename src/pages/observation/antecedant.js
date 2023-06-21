import React, { useState , useEffect} from 'react';
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

const Antecedant =()=>{
    const [selectedOption,setSelectedOption]= useState("normal");

    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
   
    
    return (
        <>


         <Formik
                initialValues={{
                    grossesseS: '',
                    serologie: '',
                    deroulement: '',
                    optionDeroulement :'',
                    agegestationnel: '',
                    accouchement : '',
                    PN: '',
                    allaitement: '',
                    developpementpsychomoteur: '',
                    irr :'',
                    chirurgicaux :'',
                    consanguinite :'',
                    optionConsanguinite :'',
                    cardfamille :'',
                    atcdmaternels :'',
                    optionAtcd :'',
                    pmedic :'',
                    optionMedicament:'',
                
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    grossesseS: Yup.string().max(255).required('champ requis'),
                    serologie: Yup.string().max(255).required('champ requis'),
                    deroulement: Yup.string().max(255).required('champ requis'),
                    optionDeroulement :Yup.string().when('deroulement',{
                        is: 'normal',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),
                    agegestationnel: Yup.string().max(255).required('champ requis'),
                    Accouchement: Yup.string().max(255).required('champ requis'),
                    PN :Yup.string().max(255).required('champ requis'),
                    allaitement :Yup.string().max(255).required('champ requis'),
                    developpementpsychomoteur :Yup.string().max(255).required('champ requis'),
                    irr :Yup.string().max(255).required('champ requis'),
                    chirurgicaux :Yup.string().max(255).required('champ requis'),
                    consanguinité :Yup.string().max(255).required('champ requis'),
                    optionConsanguinite :Yup.string().when('consanguinite',{
                        is: 'oui',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),
                    cardfamille :Yup.string().max(255).required('champ requis'),
                    ATCDmaternels:Yup.string().max(255).required('champ requis'), 
                    optionAtcd :Yup.string().when('atcdmaternels',{
                        is: 'oui',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),
                    pmedic:Yup.string().max(255).required('champ requis'),
                    optionMedicament :Yup.string().when('pmedic',{
                        is: 'oui',
                        then:Yup.string().required('Le champ optionnel est requis')
                    }),

                })}
               
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={1} >
                        <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="grossesseS">Grossesse Suivie :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="grossesseS"
                                        value= {values.grossesseS}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {touched.grossesseS && errors.grossesseS && (
                                        <FormHelperText error id="helper-text-grossesseS">
                                            {errors.grossesseS}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                             <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="serologie">Sérologie faites : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="serologie"
                                        value= {values.serologie}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {touched.serologie && errors.serologie && (
                                        <FormHelperText error id="helper-text-serologie">
                                            {errors.serologie}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="deroulement">Déroulement :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="deroulement"
                                        value= {values.deroulement}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="normal" control={<Radio />} label="normal" />
                                        <FormControlLabel value="pathologique" control={<Radio />} label="pathologique " />
                                    </RadioGroup>
                                   {values.deroulement === "pathologique" ? (
                                           <OutlinedInput
                                       
                                                type="optionPathologique"
                                                value={values.optionPathologique}
                                                name="optionPathologique"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Pathologique"
                                                fullWidth
                                        error={Boolean(touched.optionPathologique && errors.optionPathologique)}
                                    />
                                        ) : null}
                                        
                                    {touched.deroulement && errors.deroulement && (
                                        <FormHelperText error id="helper-text-deroulement">
                                            {errors.deroulement}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                                        
                       <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="agegestationnel">Age gestationnel :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="agegestationnel"
                                        value= {values.agegestationnel}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                         <FormControlLabel value="àterme " control={<Radio />} label="à terme " />
                                        <FormControlLabel value="prématuré" control={<Radio />} label="prématuré" />
                                        <FormControlLabel value="post terme " control={<Radio />} label="post terme" />

                                        
                                    </RadioGroup>
                                    {touched.agegestationnel && errors.agegestationnel && (
                                        <FormHelperText error id="helper-text-agegestationnel">
                                            {errors.agegestationnel}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                           <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="accouchement">Accouchement </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="accouchement"
                                        value= {values.accouchement}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="VB " control={<Radio />} label="VB " />
                                        <FormControlLabel value="Césarienne " control={<Radio />} label="Césarienne " />
                                         
                                        
                                    </RadioGroup>
                                    {touched.accouchement && errors.accouchement && (
                                        <FormHelperText error id="helper-text-accouchement">
                                            {errors.accouchement}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                                    
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="PN">PN</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.PN && errors.PN)}
                                        id="PN"
                                        type="PN"
                                        value={values.PN}
                                        name="PN"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="PN"
                                        inputProps={{}}
                                    />
                                    {touched.PN && errors.PN && (
                                        <FormHelperText error id="helper-text-PN">
                                            {errors.PN}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="allaitement">Allaitement  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="allaitement"
                                        value= {values.allaitement}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="Sein   " control={<Radio />} label="Sein " />
                                        <FormControlLabel value="Artificiel " control={<Radio />} label="Artificiel" />
                                        <FormControlLabel value="Mixte " control={<Radio />} label="Mixte" />

                                        
                                    </RadioGroup>
                                    {touched.allaitement && errors.allaitement && (
                                        <FormHelperText error id="helper-text-allaitement">
                                            {errors.allaitement}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="developpementpsychomoteur">Développement psychomoteur </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="developpementpsychomoteur"
                                        value= {values.developpementpsychomoteur}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="Normal   " control={<Radio />} label="Normal " />
                                        <FormControlLabel value="Retardé " control={<Radio />} label="Retardé" />
                                     
                                    </RadioGroup>
                                    {touched.developpementpsychomoteur && errors.developpementpsychomoteur && (
                                        <FormHelperText error id="helper-text-developpementpsychomoteur">
                                            {errors.developpementpsychomoteur}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="irr">Infection respiratoires à répétition </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="irr"
                                        value= {values.irr}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {touched.irr && errors.irr && (
                                        <FormHelperText error id="helper-text-irr">
                                            {errors.irr}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="Chirurgicaux">Chirurgicaux</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.Chirurgicaux && errors.Chirurgicaux)}
                                        id="Chirurgicaux"
                                        type="Chirurgicaux"
                                        value={values.Chirurgicaux}
                                        name="Chirurgicaux"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Chirurgicaux"
                                        inputProps={{}}
                                    />
                                    {touched.Chirurgicaux && errors.Chirurgicaux && (
                                        <FormHelperText error id="helper-text-Chirurgicaux">
                                            {errors.Chirurgicaux}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                                <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="consanguinite">consanguinité</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="consanguinite"
                                        value= {values.consanguinite}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.consanguinite === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionConsanguinite"
                                                value={values.optionConsanguinite}
                                                name="optionConsanguinite"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Degré"
                                                fullWidth
                                        error={Boolean(touched.optionConsanguinite && errors.optionConsanguinite)}
                                    />
                                        ) : null}
                                    {touched.consanguinite && errors.consanguinite && (
                                        <FormHelperText error id="helper-text-consanguinite">
                                            {errors.consanguinite}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid> 

                             

                           <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cardfamille">Cardiopathie dans la famille </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="cardfamille"
                                        value= {values.cardfamille}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {touched.cardfamille && errors.cardfamille && (
                                        <FormHelperText error id="helper-text-cardfamille">
                                            {errors.cardfamille}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                             <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="atcdmaternels">ATCD maternels </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="atcdmaternels"
                                        value= {values.atcdmaternels}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.atcdmaternels === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionAtcd"
                                                value={values.optionAtcd}
                                                name="optionAtcd"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Diabete sucré --phénylcétonurie 15 ou Autres"
                                                fullWidth
                                        error={Boolean(touched.optionAtcd && errors.optionAtcd)}
                                    />
                                        ) : null}

                                    {touched.ATCDmaternels && errors.ATCDmaternels && (
                                        <FormHelperText error id="helper-text-ATCDmaternels">
                                            {errors.ATCDmaternels}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                             <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="pmedic">Prise de médicament </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="pmedic"
                                        value= {values.pmedic}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.pmedic === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionMedicament"
                                                value={values.optionMedicament}
                                                name="optionMedicament"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Anticonvulsivants -Barbiturique – Lithium ou Autres"
                                                fullWidth
                                        error={Boolean(touched.optionMedicament && errors.optionMedicament)}
                                    />
                                        ) : null}
                                    {touched.pmedic && errors.pmedic && (
                                        <FormHelperText error id="helper-text-pmedic">
                                            {errors.pmedic}
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
        export default Antecedant;
                
     
        
 