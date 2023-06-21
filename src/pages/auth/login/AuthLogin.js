import React, { useEffect, useState } from 'react';

// material-ui
import {
    Button,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import PulseLoader from "react-spinners/PulseLoader";

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { useLoginMutation } from 'services/signingApi';
import { useNavigate } from 'react-router';
import { dispatch } from 'store';
import { login } from 'store/slices/authSlice';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| LOGIN ||============================ //
const AuthLogin = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [loginMutation, { isSuccess, isLoading, isError, error, data }] = useLoginMutation();

    useEffect(() => {
        if (isSuccess) {
            dispatch(login(data))
            navigate('/')
        }
    }, [isSuccess, data])

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Formik
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Doit être un email valide').max(255).required('L\'e-mail est requis'),
                    password: Yup.string().max(255).required('Mot de passe requis')
                })}
                onSubmit={async (values, helpers) => {
                    await loginMutation({body: values})

                }}
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Adresse e-mail</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Entrer l'adresse e-mail"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-login">Mot de passe</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="-password-login"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="Entrer le mot de passe"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            {isError && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{error.data?.message}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        {isLoading ? <PulseLoader size={10}/> : 'Se connecter'}
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

export default AuthLogin;
