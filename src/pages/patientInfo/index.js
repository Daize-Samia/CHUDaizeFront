import { useEffect, useState ,  } from 'react';
import { useLocation, useNavigate , useParams } from 'react-router-dom';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Person } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetPatientQuery } from 'services/getPatientByIdApi';
import { fetchPatientByIp, fetchPatients } from 'store/slices/patientSlice';


const PatientInfo = () => {
  const [patient , setPatient] = useState(null);
  const { iP } = useParams();

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
  // useEffect(() => {
  //   const fetchIp = async () => {
  //     try {
  //       const response = await fetch(`/api/patients/ip/${ip}`);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setPatient(data);
  //       } else {
  //         console.error('Error:', response.status);
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  
  //   fetchPatientByIp();
  // }, [ip]);

useEffect(() => {
  const fetchPatient = async () => {
    try {
      const response = await fetch(`/api/patients?iP=${iP}`, {
        headers: {
          Accept: "application/json",
        },
      });
      
      if (!response.ok) {
         throw new Error("Erreur lors de la requête");
       }

      const jsonData = await response.json();
      setPatient(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  fetchPatient();
}, [iP]);
  
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
        patient ?(
          <div>
            <h2>Patient Informations</h2>
            <p>IP :{patient.iP} </p>
            <p>Nom :{patient.nom} </p>
            <p>prenom :{patient.prenom} </p>
          </div>
        ):(<p>Loading user</p>)
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
