import * as React from 'react';
import {Box, Typography, Button} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AnimateButton from 'components/@extended/AnimateButton';
import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { fetchPatients } from 'store/slices/patientSlice';

import { useNavigate } from 'react-router';
import { getPatientByIp } from 'services/functions';

const VISIBLE_FIELDS = ['date', 'IP' ,'Nom/prenom','N°TELE', 'Age' ,'Date De Naissance', 'Maladie'];

export default function QuickFilteringGrid() {

  const patient = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();
  const navigateInfo = useNavigate();

  const [totalItems, setTotalItems] = useState(0);
  const [items, setItems] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [clicked, setClicked] = useState();
  const [clickedItem, setClickedItem] = useState();
  

  useEffect(() => {
    
    dispatch(fetchPatients());

    if(patient){
      setItems(patient["hydra:member"]);
      setTotalItems(patient["hydra:totalItems"]);
      setDataLoaded(true);
    }
  }, []);


  
  const generateData = () => {
    const data = [];
    const rowLength = totalItems;

    for (let i = 0; i < rowLength; i++) {
      const rowData = {
        id: i + 1,
        date: getConsultDate(i),
        IP: items[i].iP,
        'Nom/prenom': `${items[i].nom} ${items[i].prenom}`,
        'N°TELE': items[i].tele,
        Age: getAge(i),
        'Date De Naissance': getBirthDate(i),
        Maladie: items[i].maladie,
      };
      data.push(rowData);
    }

    return [...data].reverse();
  };

  const getConsultDate = (i) => {
    const inputDateString = items[i].dateDeConsultation;
    const date = new Date(inputDateString);
    const outputDateString = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return outputDateString;
  };

  const getAge = (i) => {
    const dateNaiss = items[i].dateDeNaiss;
    const date = new Date(dateNaiss);
    const now = new Date();
    if((now.getFullYear() - date.getFullYear()) == 0){
      if((now.getMonth() - date.getMonth()) == 0){
        return `${now.getDay() - date.getDay()} jours`
      }
      else{
        return `${now.getMonth() - date.getMonth()} mois`;
      }
    }
    else{
      return `${now.getFullYear() - date.getFullYear()} an`;
    }
  }

  const getRandomAge = () => Math.floor(Math.random() * 50) + 20;

  const getBirthDate = (i) => {
    const inputDateString = items[i].dateDeNaiss;
    const date = new Date(inputDateString);
    const outputDateString = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return outputDateString;
  };

  const columns = React.useMemo(
    () =>
      [
        ...VISIBLE_FIELDS.map((field) => ({
        field,
        headerName: field,
        width: 150,
        sortable: !(field === 'N°TELE' || field === 'Maladie' ||  field === 'Date' || field === 'Date De Naissance'),
        
      })),{
        field: 'voirPlus',
        sortable: false,
        headerName: 'Voir Plus',
        width: 150,
        renderCell: (params) => (
          
          <AnimateButton>
          <Button
              
              //href="patient"
            
              type="link"
              variant="outlined"
              color="primary"
              onClick={() => {
                
                if(patient){
                  const pat = getPatientByIp(patient["hydra:member"],params.row.IP );
                  navigateInfo('/patientInfo/:iP', { state: pat });
                }
                
              }}
          >
              voir Plus
          </Button>
      </AnimateButton>
          
        ),
      },],
    []
  );

  const data = React.useMemo(() => generateData(), [dataLoaded]);

  return (
  <>
    <Box sx={{ 
    height: 80, 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Typography variant="h2" component="h2" sx={{ marginBottom: '10px', color: '#004999' }}>
        Liste Des Patients
      </Typography>
    </Box>
    
    <Box sx={{ height: 800, width: '100%' }}>

      
        
      <DataGrid
        rows={data}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{
          Toolbar: GridToolbar,
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>

    </>
  );
}