import {useEffect, useState,} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {Box, Typography, Button, Grid} from '@mui/material';
import {Person} from '@mui/icons-material';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useGetPatientQuery} from 'services/getPatientByIdApi';

const PatientInfo = () => {
    const [patient, setPatient] = useState(null);
    const {iP} = useParams();
    const {data} = useGetPatientQuery(iP);
    // const location = useLocation();
    const navigate = useNavigate();
    // const state = location.state || {};
    // const patient = state;

    // Function to display the toast notification
    const showToast = () => {
        toast.success('Patient Ajouté', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
        });
    };

    useEffect(() => {
      if (data.length) {
        setPatient(data[0])
      }
    }, [data]);

    useEffect(() => {
        showToast();
    }, []);

    // Function to navigate to the modifier un patient form
    const handleModifyPatient = () => {
        navigate('/patientmodif');
    };

    return (
        <div>
            {
                patient ? (
                    <div>
                        <h2>Patient Informations</h2>
                        <p>IP :{patient.iP} </p>
                        <p>Nom :{patient.nom} </p>
                        <p>prenom :{patient.prenom} </p>
                    </div>
                ) : (<p>Loading user</p>)
            }
            {/* <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h2" align="center">
            Les Informations du patient
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleModifyPatient} sx={{ marginTop: '10px' }}>
            Modifier
          </Button>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              bgcolor: 'background.paper',
              p: 2,
              borderRadius: 4,
            }}
          >
            {patient.sexe === 'masculin' && (
            <img src='../../assets/images/users/icon_femme.jpg' alt="Masculin" style={{ width: '40px', height: '40px' }} />
          )}
          {patient.sexe === 'feminin' && (
            <img src='../../assets/images/users/icon_homme.jpg' alt="Féminin" style={{ width: '40px', height: '40px' }} />
          )} */}

            {/* <Person sx={{ fontSize: 40 }} /> */}
            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6">IP : </Typography>
                </div>
                <div>
                  <Typography variant="body1">{patient["iP"]}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6">Nom :  </Typography>
                </div>
                <div>
                  <Typography variant="body1">{patient["nom"]}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6">Prénom : </Typography>
                </div>
                <div>
                  <Typography variant="body1">{patient["prenom"]}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6">Diagnostic : </Typography>
                </div>
                <div>
                  <Typography variant="body1">{patient["categorie"]}</Typography>
                </div>
            </div>
          </Box>
        </Grid>
        </Grid>*/}
        </div>
    );
};


export default PatientInfo;
