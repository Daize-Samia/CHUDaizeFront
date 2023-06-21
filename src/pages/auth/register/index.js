import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import Register from './AuthRegister';
import AuthWrapper from '../AuthWrapper';

// ================================|| REGISTER ||================================ //

const Index = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Inscrivez-vous</Typography>
                    <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Vous avez déjà un compte?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Register />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Index;
