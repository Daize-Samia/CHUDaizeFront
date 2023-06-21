import { useState } from 'react';

// material-ui
import {
    Grid,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// project import

import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';




// sales report status
const status = [

    {
        value: '2018',
        label: '2018'
    },
    {
        value: '2019',
        label: '2019'
    },
    {
        value: '2020',
        label: '2020'
    },
    {
        value: '2021',
        label: '2021'
    },
    {
        value: '2022',
        label: '2022'
    },
    {
        value: 'Cette Année',
        label: 'Cette Année'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Dashboard = () => {
    const [value, setValue] = useState('Cette Année');
    

    return (

        <>
            <Grid  sx={{ width: '100%' }}>
                

                {/* row 4 */}
                <Grid item xs={12} md={15} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                        
                                <Typography variant="h2" component="h2" sx={{ marginBottom: '10px', color: '#004999', marginTop: '30px' }}>
                                    Statistiques des Patients par sexe
                                </Typography>
                        
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-select-currency"
                                size="small"
                                select
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
                            >
                                {status.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <MainCard sx={{ mt: 1.75 }}>
                        <Stack spacing={1.5} sx={{ mb: -12 }}>
                            <Typography variant="h6" color="secondary">
                                Nombre Total
                            </Typography>
                            <Typography variant="h4">560</Typography>
                        </Stack>
                        <SalesColumnChart />
                    </MainCard>
                </Grid>
                
                
            </Grid>
            
                

                

        </>
    );
};

export default Dashboard;
